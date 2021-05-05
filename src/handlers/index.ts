import { State } from "../state";
import {
  getPostcodeData,
  getDistanceBetweenPostcodes,
} from "../util/postcodes";

export type HandlerArgs = {
  [P: string]: any;
};

export type HandlerReturn<T = {} & { message: string }> = Promise<T>;

export type Handler = (args: HandlerArgs) => HandlerReturn;
export type HandlerWithState = (
  args: HandlerArgs,
  state: State
) => HandlerReturn;

export const alive: Handler = async () => {
  return {
    message: "Hi! I’m still here!",
  };
};

export const setHome: HandlerWithState = async ({ postcode }, state) => {
  const postcodeData = await getPostcodeData(postcode);
  state.location = postcodeData;

  return {
    message: `Home location set to ${postcodeData.nuts}`,
  };
};

export const findDistance: HandlerWithState = async ({ postcode }, state) => {
  if (!state?.location?.postcode) {
    throw new Error(
      `Failed to find distance as there is no existing location. Did you forget to call: set home <post_code>?`
    );
  }
  const [from, to] = [state.location.postcode, postcode];
  const distance = await getDistanceBetweenPostcodes(from, to);

  return {
    message: `Location is ${distance} from home`,
  };
};

export const findDirections: Handler = async ({ from, to }) => {
  // INCOMPLETE
  return {
    message: "",
  };
};
