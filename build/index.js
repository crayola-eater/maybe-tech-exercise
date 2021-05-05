"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
const parser_1 = require("./cli/parser");
const handlers = __importStar(require("./handlers"));
const patterns_1 = require("./cli/patterns");
const state_1 = require("./state");
async function main() {
    while (true) {
        const raw = await cli_1.getUserInput("Waiting for a command...\n");
        const { command, args } = parser_1.parse(patterns_1.patterns, raw) ?? {};
        if (!command || !args) {
            console.log(`Sorry, unknown command: ${raw}`);
            continue;
        }
        let result;
        try {
            if ("quit" === command) {
                break;
            }
            else if ("alive" === command) {
                result = await handlers.alive(args);
            }
            else if ("set home" === command) {
                result = await handlers.setHome(args, state_1.state);
            }
            else if ("find distance" === command) {
                result = await handlers.findDistance(args, state_1.state);
            }
            else if ("find directions" === command) {
                result = await handlers.findDirections(args);
            }
            else {
                console.warn(`No handler implemented for command: ${command}`);
                continue;
            }
        }
        catch (e) {
            console.error(e.message);
            continue;
        }
        console.log(result.message);
    }
    cli_1.closeReadline();
}
if (require.main === module) {
    main();
}
