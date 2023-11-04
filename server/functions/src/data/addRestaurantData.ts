import * as admin from "firebase-admin";

class Restaurant {
  constructor(
    name: string,
    imageUrl: string[],
    latitude: number,
    longitude: number,
    distance: number,
    genre: number
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.latitude = latitude;
    this.longitude = longitude;
    this.distance = distance;
    this.genre = genre;
  }

  name: string;
  imageUrl: string[];
  latitude: number;
  longitude: number;
  distance: number;
  genre: number;
}

const restaurants: Restaurant[] = [
  new Restaurant(
    "鳥万",
    [
      "https://images.app.goo.gl/wPrD7JfkLVvDXA3f7",
      "https://images.app.goo.gl/D6tpCFndXCmUVxKF8",
      "https://images.app.goo.gl/EadfwC96rL2keizH7",
    ],
    35.563548,
    139.7130231,
    1,
    1
  ),
  new Restaurant(
    "豚番長 京急蒲田店",
    [
      "https://images.app.goo.gl/4GkTgnPj7PACwrQx8",
      "https://images.app.goo.gl/sSPxiVdJAUUCV4E5A",
      "https://images.app.goo.gl/jh9xnQyLHUWHiSL19",
    ],
    35.5616154,
    139.7077354,
    2,
    1
  ),
  new Restaurant(
    "トンマーゾ",
    [
      "https://images.app.goo.gl/YFdTAzkeFn6w9gsLA",
      "https://images.app.goo.gl/LgBznQq8K4J6xgUU8",
      "https://images.app.goo.gl/dHN6RQMcyfUWKdaz5",
    ],
    35.563537,
    139.7128767,
    1,
    2
  ),
  new Restaurant(
    "ピザランド",
    [
      "https://images.app.goo.gl/FkDKZD7HgSTojZJVA",
      "https://images.app.goo.gl/BtDgaNu8k5fVhsSr7",
      "https://images.app.goo.gl/hngXaUTT7AqBDXFc9",
    ],
    35.562,
    139.7100107,
    2,
    2
  ),
  new Restaurant(
    "你好 恵馨閣",
    [
      "https://images.app.goo.gl/oj9sV8EKXVtqjTsG8",
      "https://images.app.goo.gl/XHu7gVd3LHcavRzh9",
      "https://images.app.goo.gl/VtKuVJFMDCnSwoB68",
    ],
    35.5629749,
    139.711337,
    1,
    4
  ),
  new Restaurant(
    "金春新館",
    [
      "https://images.app.goo.gl/TxsU2ySrKxMeJ3ED9",
      "https://images.app.goo.gl/51kexi39XDpwZgQy5",
      "https://images.app.goo.gl/vco9Jut2ZvVTz33g6",
    ],
    35.5619727,
    139.7100965,
    2,
    4
  ),
  new Restaurant(
    "アジアン大衆酒場 ワルンバリ",
    [
      "https://images.app.goo.gl/JjYkrCCREGzB2k9k7",
      "https://images.app.goo.gl/yLwFihrryExmG5BZ7",
      "https://images.app.goo.gl/PxwxKsVgZ94oSt7x7",
    ],
    35.5619616,
    139.7112708,
    1,
    3
  ),
  new Restaurant(
    "ベトナムレストラン ティティ",
    [
      "https://images.app.goo.gl/LJAyq1Zm5gbzkxvD6",
      "https://images.app.goo.gl/NsVPqfhMiyisK6gr9",
      "https://images.app.goo.gl/WzhqoDRJPg6DxmsM8",
    ],
    35.5624677,
    139.7176205,
    2,
    3
  ),
];

export const addRestaurantData = async () => {
  const db = admin.firestore();

  const ref = await db.collection("restaurant");

  for (const restaurant of restaurants) {
    await ref.add(JSON.parse(JSON.stringify(restaurant)));
  }
};
