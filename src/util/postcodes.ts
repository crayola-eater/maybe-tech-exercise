import axios from "axios";
import { Client, UnitSystem } from "@googlemaps/google-maps-services-js";
import { GOOGLE_MAPS_API_KEY } from "../config";

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

export const getDistanceBetweenPostcodes = async (from: string, to: string) => {
  const maps = new Client();

  const { data } = await maps.distancematrix({
    params: {
      origins: [from],
      destinations: [to],
      key: GOOGLE_MAPS_API_KEY,
      units: UnitSystem.metric,
    },
  });

  // See: https://developers.google.com/maps/documentation/distance-matrix/overview#directions-response-elements
  const distance = data.rows[0]?.elements?.[0]?.distance?.value;

  if (undefined === distance) {
    throw new Error(`Failed to find distance between ${from} and ${to}`);
  }

  return distance;
};
