"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectionsToPostcode = exports.getDistanceBetweenPostcodes = exports.getPostcodeData = void 0;
const axios_1 = __importDefault(require("axios"));
const google_maps_services_js_1 = require("@googlemaps/google-maps-services-js");
const config_1 = require("../config");
const getPostcodeData = async (postcode) => {
    const { data } = await axios_1.default.get("https://api.postcodes.io/postcodes", {
        params: { q: postcode, limit: 1 },
    });
    const postcodeData = data.result?.[0];
    if (!postcodeData) {
        throw new Error(`Invalid postcode ${postcode}`);
    }
    return postcodeData;
};
exports.getPostcodeData = getPostcodeData;
const getDistanceBetweenPostcodes = async (from, to) => {
    const maps = new google_maps_services_js_1.Client();
    const { data } = await maps.distancematrix({
        params: {
            origins: [from],
            destinations: [to],
            key: config_1.GOOGLE_MAPS_API_KEY,
            units: google_maps_services_js_1.UnitSystem.metric,
        },
    });
    // See: https://developers.google.com/maps/documentation/distance-matrix/overview#directions-response-elements
    const distance = data.rows[0]?.elements?.[0]?.distance?.value;
    if (undefined === distance) {
        throw new Error(`Failed to find distance between ${from} and ${to}`);
    }
    return distance;
};
exports.getDistanceBetweenPostcodes = getDistanceBetweenPostcodes;
const getDirectionsToPostcode = async (from, to) => {
    // INCOMPLETE
    const maps = new google_maps_services_js_1.Client();
    const { data } = await maps.directions({
        params: {
            origin: from,
            destination: to,
            key: config_1.GOOGLE_MAPS_API_KEY,
            units: google_maps_services_js_1.UnitSystem.metric,
        },
    });
};
exports.getDirectionsToPostcode = getDirectionsToPostcode;
