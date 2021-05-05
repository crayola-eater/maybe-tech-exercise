export type HandlerArgs = {
  [P: string]: any;
};

export type Handler = (
  args: HandlerArgs
) => {
  message: string;
};

export const alive: Handler = () => {
  return {
    message: "Hi! I’m still here!",
  };
};
