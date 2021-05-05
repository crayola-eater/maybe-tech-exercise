import { getUserInput, closeReadline } from "./cli";
import { parse } from "./cli/parser";
import * as handlers from "./handlers";
import { patterns } from "./cli/patterns";
import { state } from "./state";

async function main() {
  while (true) {
    const raw = await getUserInput("Waiting for a command...\n");
    const { command, args } = parse(patterns, raw) ?? {};

    if (!command || !args) {
      console.log(`Sorry, unknown command: ${raw}`);
      continue;
    }

    let result;

    try {
      if ("quit" === command) {
        break;
      } else if ("alive" === command) {
        result = await handlers.alive(args);
      } else if ("set home" === command) {
        result = await handlers.setHome(args, state);
      } else if ("find distance" === command) {
        result = await handlers.findDistance(args, state);
      } else if ("find directions" === command) {
        result = await handlers.findDirections(args);
      } else {
        console.warn(`No handler implemented for command: ${command}`);
        continue;
      }
    } catch (e) {
      console.error(e.message);
      continue;
    }

    console.log(result.message);
  }

  closeReadline();
}

if (require.main === module) {
  main();
}
