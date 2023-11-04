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

admin.initializeApp();

export const addData = onRequest(async (request, response) => {
  log("addData was called.");
});

export const getTravel = onRequest(async (request, response) => {
  const travelQuery = getTravelQuery(request);

  const { genre, ...getSentoArgs } = travelQuery;
  const { sauna, tennen, rank, ...getRestaurantArgs } = travelQuery;

  const sento = await getSento(getSentoArgs);
  const sentoCoupon = await getSentoCoupon(travelQuery.rank);
  const restaurant = await getRestaurant(getRestaurantArgs);
  const restaurantCoupon = await getRestaurantCoupon(travelQuery.rank);

  response.status(200).send({
    sento: sento,
    sentoCoupon: sentoCoupon,
    restaurant: restaurant,
    restaurantCoupon,
  });
});
