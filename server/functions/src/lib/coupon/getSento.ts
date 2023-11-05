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

  var sentoCandidate = await sentoRef.where("distance", "==", distance);

  if (sauna === 1) {
    sentoCandidate = await sentoCandidate.where("sauna", "==", true);
  }
  if (tennen === 1) {
    sentoCandidate = await sentoCandidate.where("tennen", "==", true);
  }

  const sentoFinalCandidate = await sentoCandidate.limit(1).get();

  var sentoData: string = "";
  sentoFinalCandidate.forEach((sento) => {
    sentoData = JSON.stringify(sento.data());
  });

  return JSON.parse(sentoData);
};
