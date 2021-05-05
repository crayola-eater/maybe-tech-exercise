import { State } from "../state";

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
