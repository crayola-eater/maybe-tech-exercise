export const patterns = [
  /(?<cmd>quit)/,
  /(?<cmd>alive)/,
  /(?<cmd>set home) (?<postcode>.+)/,
  /(?<cmd>find distance) (?<distance>)/,
  /(?<cmd>find directions from) (?<a>.+) to (?<b>.+)/,
  /(?<cmd>set distance to) (?<units>miles|km|radians)/,
];
