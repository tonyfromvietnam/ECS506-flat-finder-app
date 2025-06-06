/* tslint:disable */
/* eslint-disable */
/**
 * Flat Finder REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Accommodation } from './Accommodation';
import {
    AccommodationFromJSON,
    AccommodationFromJSONTyped,
    AccommodationToJSON,
} from './Accommodation';

/**
 * 
 * @export
 * @interface AccommodationDetails
 */
export interface AccommodationDetails {
    /**
     * Does the listing exist in the user's favourites
     * @type {boolean}
     * @memberof AccommodationDetails
     */
    isFavourite: boolean;
    /**
     * 
     * @type {Accommodation}
     * @memberof AccommodationDetails
     */
    accommodation: Accommodation;
}

/**
 * Check if a given object implements the AccommodationDetails interface.
 */
export function instanceOfAccommodationDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "isFavourite" in value;
    isInstance = isInstance && "accommodation" in value;

    return isInstance;
}

export function AccommodationDetailsFromJSON(json: any): AccommodationDetails {
    return AccommodationDetailsFromJSONTyped(json, false);
}

export function AccommodationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccommodationDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFavourite': json['isFavourite'],
        'accommodation': AccommodationFromJSON(json['accommodation']),
    };
}

export function AccommodationDetailsToJSON(value?: AccommodationDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isFavourite': value.isFavourite,
        'accommodation': AccommodationToJSON(value.accommodation),
    };
}

