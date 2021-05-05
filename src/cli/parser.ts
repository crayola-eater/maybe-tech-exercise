export const parse = (patterns: RegExp[], raw: string) => {
  for (const pattern of patterns) {
    const { cmd: command, ...args } = raw.match(pattern)?.groups ?? {};

    if (command) {
      return {
        command: command.toLowerCase(),
        args,
      };
    }
  }
};
