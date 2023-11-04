/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { log } from "firebase-functions/logger";
import { getTravelQuery } from "./lib/coupon/getQuery";
import { getSento } from "./lib/coupon/getSento";
import { getSentoCoupon } from "./lib/coupon/getSentoCoupon";
import { getRestaurant } from "./lib/coupon/getRestaurant";
import { getRestaurantCoupon } from "./lib/coupon/getRestaurantCoupon";
import { addSentoData } from "./data/addSentoData";
import { addCouponData } from "./data/addCoupon";
import { addRestaurantData } from "./data/addRestaurantData";
import { addAlbumData } from "./lib/album/addAlbumData";
import { getAlbumData } from "./lib/album/getAlbumData";

admin.initializeApp();

export const addData = onRequest(async (request, response) => {
  log("addData was called.");
  await addSentoData();
  await addCouponData();
  await addRestaurantData();

  response.status(200).send({ message: "data added" });
});

export const getTravel = onRequest(async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET");

  const travelQuery = getTravelQuery(request);

  const { genre, ...getSentoArgs } = travelQuery;
  const { sauna, tennen, rank, ...getRestaurantArgs } = travelQuery;

  const sento = await getSento(getSentoArgs);
  const sentoCoupon = await getSentoCoupon(travelQuery.rank);
  const restaurant = await getRestaurant(getRestaurantArgs);
  const restaurantCoupon = await getRestaurantCoupon(travelQuery.rank);

  await addAlbumData(sento, restaurant, travelQuery.pub);

  response.status(200).send({
    sento: sento,
    sentoCoupon: sentoCoupon,
    restaurant: restaurant,
    restaurantCoupon: restaurantCoupon,
  });
});

export const getAlbum = onRequest(async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET");

  const albums = await getAlbumData();

  response.status(200).send(albums);
});
