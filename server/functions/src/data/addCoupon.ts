import * as admin from "firebase-admin";

export class Coupon {
  constructor(title: string, rank: number, genre: number) {
    this.title = title;
    this.rank = rank;
    this.genre = genre;
  }

  title: string;
  rank: number;
  genre: number;
}

const coupons: Coupon[] = [
  new Coupon("お会計100円引き", 1, 0),
  new Coupon("お会計200円引き", 2, 0),
  new Coupon("ドリンク一杯無料", 3, 0),
  new Coupon("プレンゼントメニュー1品無料", 4, 0),
  new Coupon("秘密のスペシャリテ", 5, 0),
  new Coupon("ドリンク無料", 3, 1),
];

export const addCouponData = async () => {
  const db = admin.firestore();

  const ref = await db.collection("coupon");

  for (const coupon of coupons) {
    await ref.add(JSON.parse(JSON.stringify(coupon)));
  }
};
