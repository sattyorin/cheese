import * as admin from "firebase-admin";

export const findTravelById = async (userId: string) => {
  const ref = await admin.firestore().collection("album");

  const albumSnapShot = await ref.where("userId", "==", userId).get();

  var travelData;
  albumSnapShot.forEach((travel) => {
    travelData = travel.data();
  });

  return JSON.parse(
    JSON.stringify({
      ...(travelData as unknown as object),
      likes: ["user0", "user100"],
    })
  );
};
