import { Size } from "@/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/sizes";
const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(API_URL);

  return res.json();
};

export default getSizes;
