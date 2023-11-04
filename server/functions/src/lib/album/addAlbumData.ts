import * as admin from "firebase-admin";
import { Sento } from "../../data/addSentoData";
import { Restaurant } from "../../data/addRestaurantData";

export const addAlbumData = async (
  sento: Sento,
  restaurant: Restaurant,
  pub: number
) => {
  const db = admin.firestore();

  const ref = await db.collection("album");

  const length = (await ref.get()).size;

  const userId = "user" + length.toString();

  await ref.add(
    JSON.parse(
      JSON.stringify({
        id: userId,
        sento: sento,
        restaurant: restaurant,
        pub: pub,
      })
    )
  );
};
