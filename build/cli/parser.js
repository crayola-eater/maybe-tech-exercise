"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const parse = (patterns, raw) => {
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
exports.parse = parse;
