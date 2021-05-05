import axios from "axios";

export const getPostcodeData = async (postcode: string) => {
  const { data } = await axios.get("https://api.postcodes.io/postcodes", {
    params: { q: postcode, limit: 1 },
  });
  const postcodeData = data.result?.[0];
  if (!postcodeData) {
    throw new Error(`Invalid postcode ${postcode}`);
  }
  return postcodeData;
};
