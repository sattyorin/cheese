import * as admin from "firebase-admin";

export const getSentoCoupon = async (rank: number) => {
  const couponRef = await admin.firestore().collection("coupon");

  const couponCandidate = await couponRef
    .where("genre", "==", 1)
    .where("rank", "<=", rank)
    .limit(1)
    .get();

  if (couponCandidate.empty) {
    return "{}";
  }

  var couponData: string = "";
  couponCandidate.forEach((coupon) => {
    couponData = JSON.stringify(coupon.data());
  });

  return JSON.parse(couponData);
};
