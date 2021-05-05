"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patterns = void 0;
exports.patterns = [
    /^(?<cmd>quit)$/i,
    /^(?<cmd>alive)$/i,
    /^(?<cmd>set home) (?<postcode>.+)$/i,
    /^(?<cmd>find distance) (?<postcode>.+)$/i,
    /^(?<cmd>find directions) from (?<from>.+) to (?<to>.+)$/i,
    /^(?<cmd>set distance to) (?<units>miles|km|radians)$/i,
];
