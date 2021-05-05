import { State } from "../state";
import { getPostcodeData } from "../util/postcodes";

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
