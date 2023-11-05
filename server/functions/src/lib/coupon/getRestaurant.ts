import * as admin from "firebase-admin";

export const getRestaurant = async ({
  moveTime,
  genre,
}: {
  moveTime: number;
  genre: number;
}) => {
  const restaurantRef = await admin.firestore().collection("restaurant");

  const distance = (() => {
    if (moveTime <= 10) {
      return 1;
    } else {
      return 2;
    }
  })();

  const restaurantCandidate = await restaurantRef
    .where("distance", "==", distance)
    .where("genre", "==", genre)
    .limit(1)
    .get();

  var restaurantData: string = "";
  restaurantCandidate.forEach((restaurant) => {
    restaurantData = JSON.stringify(restaurant.data());
  });

  return JSON.parse(restaurantData);
};
