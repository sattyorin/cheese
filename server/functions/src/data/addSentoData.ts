import * as admin from "firebase-admin";

export class Sento {
  constructor(
    name: string,
    imageUrl: string[],
    latitude: number,
    longitude: number,
    distance: number,
    tennen: boolean,
    sauna: boolean
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.latitude = latitude;
    this.longitude = longitude;
    this.distance = distance;
    this.tennen = tennen;
    this.sauna = sauna;
  }

  name: string;
  imageUrl: string[];
  latitude: number;
  longitude: number;
  distance: number;
  tennen: boolean;
  sauna: boolean;
}

const sentos: Sento[] = [
  new Sento(
    "ゆ〜シティー蒲田",
    [
      "https://images.app.goo.gl/ckBEGcznG6G9vG5w5",
      "https://images.app.goo.gl/2oNdFdAGoEV4KfHb6",
      "https://images.app.goo.gl/zwddxhp2jkUDpovD9",
    ],
    35.565088,
    139.7154401,
    1,
    true,
    true
  ),
  new Sento(
    "蒲田福の湯",
    [
      "https://images.app.goo.gl/2oNdFdAGoEV4KfHb6",
      "https://images.app.goo.gl/N3e6FdtYB3pb7zny6",
      "https://images.app.goo.gl/KMEfsVUjCJB7XuuTA",
    ],
    35.565088,
    139.7154401,
    1,
    true,
    true
  ),
  new Sento(
    "改正湯",
    [
      "https://images.app.goo.gl/v2XTKBvhg7wr6dCv5",
      "https://images.app.goo.gl/Pz7NSpUDh1vtYJ1J8",
      "https://images.app.goo.gl/pmF6tG16ACrxqj3H8",
    ],
    35.5670578,
    139.7115647,
    1,
    true,
    false
  ),
  new Sento(
    "草津湯",
    [
      "https://images.app.goo.gl/hjjLd5Qyw4LpsBBQ6",
      "https://images.app.goo.gl/pRURgCYRE2XurdXL8",
      "https://images.app.goo.gl/RaEASXFUpFkjnngs9",
    ],
    35.5652867,
    139.3950095,
    2,
    false,
    true
  ),
  new Sento(
    "はすぬま温泉",
    [
      "https://images.app.goo.gl/LcVDBvjjpXvtUUDq6",
      "https://images.app.goo.gl/73P6rZjqX1rJbm8j8",
      "https://images.app.goo.gl/yz4Jzzq7kRRqCwX9A",
    ],
    35.565432,
    139.7060371,
    2,
    true,
    true
  ),
  new Sento(
    "寿湯",
    [
      "https://images.app.goo.gl/fTTL1t4vdvrUPoxV7",
      "https://images.app.goo.gl/cyEN84EVksCDiB9UA",
      "https://images.app.goo.gl/LhjsogAb6wDZrwZq7",
    ],
    35.5640643,
    139.7215602,
    2,
    false,
    true
  ),
  new Sento(
    "天神湯",
    [
      "https://images.app.goo.gl/TBKh4QnTyJxweByG9",
      "https://images.app.goo.gl/J3Kzi8C3fwVUGb2x7",
      "https://images.app.goo.gl/d4egxEk2xhFNzpEd7",
    ],
    35.5593839,
    139.7245765,
    3,
    false,
    true
  ),
  new Sento(
    "新田浴場",
    [
      "https://images.app.goo.gl/M5RWYAdAZZjSVqgJA",
      "https://images.app.goo.gl/8JWXezzY34qX6zSp6",
      "https://images.app.goo.gl/T29daaVwsn6uYQ6A8",
    ],
    35.5640643,
    139.688853,
    3,
    false,
    true
  ),
  new Sento(
    "天然温泉平和島",
    [
      "https://images.app.goo.gl/axjFBCdMRJZQ1sLKA",
      "https://images.app.goo.gl/3zM5ukmARkQGY63v6",
      "https://images.app.goo.gl/A4m9e7JRzA7Rdup57",
    ],
    35.5847386,
    139.7382317,
    3,
    true,
    true
  ),
];

export const addSentoData = async () => {
  const db = admin.firestore();

  const ref = await db.collection("sento");

  for (const sento of sentos) {
    await ref.add(JSON.parse(JSON.stringify(sento)));
  }
};
