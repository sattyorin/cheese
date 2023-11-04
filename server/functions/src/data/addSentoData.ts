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
      "https://img.sauna-ikitai.com/sauna/2086_20171202_195435_9DZwIEV53o_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2086_20171202_214409_goIAzgvWmb_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2086_20221126_063854_uoACq2ty80_large.jpg",
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
      "https://onsen.nifty.com/cms_image/img_index/onsen/spot/70/onsen016770/%5b1.jpg",
      "https://onsen.nifty.com/cms_image/img_index/onsen/spot/70/onsen016770/%5b2.jpg",
      "https://onsen.nifty.com/cms_image/img_index/onsen/spot/70/onsen016770/%5b3.jpg",
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
      "https://www.1010.or.jp/wp/wp-content/uploads/2015/10/2_0052.jpg",
      "https://www.1010.or.jp/wp/wp-content/uploads/2015/10/4_0037.jpg",
      "https://www.1010.or.jp/wp/wp-content/uploads/2015/10/9_0145-680x453.jpg",
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
      "https://img.sauna-ikitai.com/sauna/2085_20180204_162922_ydy5EejqYH_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2085_20210612_165205_AqynbmJZo0_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2085_20230406_175011_3TqXgviWhm_large.jpg",
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
      "https://img.sauna-ikitai.com/sauna/2084_20200914_093333_3ltptwdCDk_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2084_20171216_154700_Mr8olXFeMf_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2084_20171216_154704_qKmhEXFFja_large.jpg",
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
      "https://img.sauna-ikitai.com/sauna/6344_20190824_085152_NjA9hNfOGt_large.jpg",
      "https://img.sauna-ikitai.com/sauna/6344_20190824_085154_yk5i4ViFNj_large.jpg",
      "https://img.sauna-ikitai.com/sauna/6344_20190824_085155_a8KhNy905E_large.jpg",
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
      "https://onsen.nifty.com/cms_image/img_index/onsen/spot/44/onsen007544/onsen007544_1.jpg",
      "https://onsen.nifty.com/cms_image/img_index/onsen/spot/44/onsen007544/onsen007544_2.jpg",
      "https://onsen.nifty.com/kk_image/view/onsen/onsen-detail/onsen007544/0000091966.jpg",
    ],
    35.5593839,
    139.7245765,
    3,
    false,
    true
  ),
  new Sento(
    "都湯",
    [
      "https://img.sauna-ikitai.com/sauna/2079_20190511_002606_USUjr5BqY0_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2079_20190511_002607_jgYbhgXmkO_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2079_20220120_121313_EFHjDuSG03_large.jpg",
    ],
    35.5719913,
    139.6804287,
    3,
    false,
    true
  ),
  new Sento(
    "天然温泉平和島",
    [
      "https://img.sauna-ikitai.com/sauna/2054_20190402_181619_OlO3w02fHr_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2054_20200131_084853_moqIeFldLD_large.jpg",
      "https://img.sauna-ikitai.com/sauna/2054_20220807_203433_4ayii0q7fO_large.jpg",
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
