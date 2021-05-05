"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDirections = exports.findDistance = exports.setHome = exports.alive = void 0;
const postcodes_1 = require("../util/postcodes");
const alive = async () => {
    return {
        message: "Hi! I’m still here!",
    };
};
exports.alive = alive;
const setHome = async ({ postcode }, state) => {
    const postcodeData = await postcodes_1.getPostcodeData(postcode);
    state.location = postcodeData;
    return {
        message: `Home location set to ${postcodeData.nuts}`,
    };
};
exports.setHome = setHome;
const findDistance = async ({ postcode }, state) => {
    if (!state?.location?.postcode) {
        throw new Error(`Failed to find distance as there is no existing location. Did you forget to call: set home <post_code>?`);
    }
    const [from, to] = [state.location.postcode, postcode];
    const distance = await postcodes_1.getDistanceBetweenPostcodes(from, to);
    return {
        message: `Location is ${distance} from home`,
    };
};
exports.findDistance = findDistance;
const findDirections = async ({ from, to }) => {
    // INCOMPLETE
    return {
        message: "",
    };
};
exports.findDirections = findDirections;
