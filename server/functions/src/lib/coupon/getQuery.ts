import { Request } from "firebase-functions/v2/https";

export interface TravelQuery {
  moveTime: number;
  genre: number;
  sauna: number;
  tennen: number;
  rank: number;
}

export const getTravelQuery = (request: Request): TravelQuery => {
  const moveTime = parseInt(request.query["moveTime"] as string);
  const genre = parseInt(request.query["genre"] as string);
  const sauna = parseInt(request.query["sauna"] as string);
  const tennen = parseInt(request.query["tennen"] as string);
  const rank = parseInt(request.query["rank"] as string);

  return {
    moveTime,
    genre,
    sauna,
    tennen,
    rank,
  };
};
