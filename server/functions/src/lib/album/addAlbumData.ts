import * as admin from "firebase-admin";
import { Sento } from "../../data/addSentoData";
import { Restaurant } from "../../data/addRestaurantData";

export const addAlbumData = async (
  sento: Sento,
  restaurant: Restaurant,
  sentoCoupon: any,
  restaurantCoupon: any
) => {
  const ref = await admin.firestore().collection("album");

  const length = (await ref.get()).size;

  const userId = "user" + length.toString();

  const travel = JSON.parse(
    JSON.stringify({
      userId: userId,
      sento: sento,
      restaurant: restaurant,
      sentoCoupon: sentoCoupon,
      restaurantCoupon: restaurantCoupon,
    })
  );

  await ref.add(travel);

  return travel;
};
