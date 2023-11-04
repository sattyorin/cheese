import * as admin from "firebase-admin";

export const getSento = async ({
  moveTime,
  sauna,
  tennen,
}: {
  moveTime: number;
  sauna: number;
  tennen: number;
}) => {
  const sentoRef = await admin.firestore().collection("sento");

  const distance = (() => {
    if (moveTime <= 5) {
      return 1;
    } else if (moveTime <= 10) {
      return 2;
    } else {
      return 3;
    }
  })();

  const sentoCandidate = await sentoRef
    .where("distance", "==", distance)
    .where("sauna", "==", sauna === 1)
    .where("tennen", "==", tennen === 1)
    .limit(1)
    .get();

  var sentoData: string = "";
  sentoCandidate.forEach((sento) => {
    sentoData = JSON.stringify(sento.data());
  });

  return JSON.parse(sentoData);
};
