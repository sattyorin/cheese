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
      "https://san-tatsu.jp/assets/uploads/2020/08/07092816/b8dee31f8ace94f9597bab0b3bda8591-750x500.jpg",
      "https://shochu-hiball.jp/shitamachi/column/monogatari/image/article16_img1.jpg",
      "https://c-r.gnst.jp/mecicolle/photo/report/5b/f8/11444/11444_report_1_2.jpg",
    ],
    35.563548,
    139.7130231,
    1,
    1
  ),
  new Restaurant(
    "豚番長 京急蒲田店",
    [
      "https://imgfp.hotp.jp/IMGH/88/36/P037608836/P037608836_480.jpg",
      "https://images.miil.me/j/030823c2-2e66-11ec-bd3e-06f1f1f9355e.orig.jpg",
      "https://images.miil.me/j/4b07ce68-a41c-11eb-a9b6-06f1f1f9355e.orig.jpg",
    ],
    35.5616154,
    139.7077354,
    2,
    1
  ),
  new Restaurant(
    "トンマーゾ",
    [
      "https://aqi.iccj.or.jp/wp-content/uploads/2019/08/DSC_0022.jpg",
      "https://aqi.iccj.or.jp/wp-content/uploads/2019/08/640x640_rect_103132931.jpg",
      "https://1000bero.net/wp-content/uploads/2023/03/IMG_7761-1360x1020.jpg",
    ],
    35.563537,
    139.7128767,
    1,
    2
  ),
  new Restaurant(
    "ピザランド",
    [
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/32517824.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/30591947.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/27915102.jpg",
    ],
    35.562,
    139.7100107,
    2,
    2
  ),
  new Restaurant(
    "你好 恵馨閣",
    [
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/33013670.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/32457452.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/31443464.jpg",
    ],
    35.5629749,
    139.711337,
    1,
    4
  ),
  new Restaurant(
    "金春新館",
    [
      "https://www.hotpepper.jp/IMGH/71/87/P020257187/P020257187_480.jpg",
      "https://www.hotpepper.jp/IMGH/90/54/P022699054/P022699054_480.jpg",
      "https://www.hotpepper.jp/IMGH/70/03/P025767003/P025767003_480.jpg",
    ],
    35.5619727,
    139.7100965,
    2,
    4
  ),
  new Restaurant(
    "アジアン大衆酒場 ワルンバリ",
    [
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/31859415.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/21099776.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/21099780.jpg",
    ],
    35.5619616,
    139.7112708,
    1,
    3
  ),
  new Restaurant(
    "ベトナムレストラン ティティ",
    [
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/33010073.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/33010076.jpg",
      "https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/l/01/27992891.jpg",
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
