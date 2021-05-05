export type HandlerArgs = {
  [P: string]: any;
};

export type HandlerReturn = Promise<{
  message: string;
}>;

export type Handler = (args: HandlerArgs) => HandlerReturn;

export const alive: Handler = async () => {
  return {
    message: "Hi! I’m still here!",
  };
};
