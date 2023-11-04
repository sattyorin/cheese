import * as admin from "firebase-admin";

export const getRestaurantCoupon = async (rank: number) => {
  const couponRef = await admin.firestore().collection("coupon");

  const couponCandidate = await couponRef
    .where("genre", "==", 0)
    .where("rank", "<=", rank)
    .orderBy("rank", "desc")
    .limit(1)
    .get();

  var couponData: string = "";
  couponCandidate.forEach((coupon) => {
    couponData = JSON.stringify(coupon.data());
  });

  return JSON.parse(couponData);
};
