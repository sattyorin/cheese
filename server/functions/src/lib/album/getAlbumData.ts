import * as admin from "firebase-admin";

export const getAlbumData = async () => {
  const db = admin.firestore();

  const ref = await db.collection("album");

  const albumSnapShot = await ref.get();

  var albumData: any[] = [];
  albumSnapShot.forEach((album) => {
    albumData.push(JSON.parse(JSON.stringify(album.data())));
  });

  return JSON.parse(JSON.stringify(albumData));
};
