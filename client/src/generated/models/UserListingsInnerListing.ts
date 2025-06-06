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
import type { AccommodationSummary } from './AccommodationSummary';
import {
    AccommodationSummaryFromJSON,
    AccommodationSummaryFromJSONTyped,
    AccommodationSummaryToJSON,
} from './AccommodationSummary';
import type { SeekingSummary } from './SeekingSummary';
import {
    SeekingSummaryFromJSON,
    SeekingSummaryFromJSONTyped,
    SeekingSummaryToJSON,
} from './SeekingSummary';

/**
 * 
 * @export
 * @interface UserListingsInnerListing
 */
export interface UserListingsInnerListing {
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    shortDescription: string;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    thumbnailUrl: string;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    accommodationType: string;
    /**
     * 
     * @type {number}
     * @memberof UserListingsInnerListing
     */
    numberOfRooms: number;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    source: string;
    /**
     * 
     * @type {number}
     * @memberof UserListingsInnerListing
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof UserListingsInnerListing
     */
    postCode: string;
}

/**
 * Check if a given object implements the UserListingsInnerListing interface.
 */
export function instanceOfUserListingsInnerListing(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "shortDescription" in value;
    isInstance = isInstance && "thumbnailUrl" in value;
    isInstance = isInstance && "accommodationType" in value;
    isInstance = isInstance && "numberOfRooms" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "postCode" in value;

    return isInstance;
}

export function UserListingsInnerListingFromJSON(json: any): UserListingsInnerListing {
    return UserListingsInnerListingFromJSONTyped(json, false);
}

export function UserListingsInnerListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserListingsInnerListing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'shortDescription': json['shortDescription'],
        'thumbnailUrl': json['thumbnailUrl'],
        'accommodationType': json['accommodationType'],
        'numberOfRooms': json['numberOfRooms'],
        'source': json['source'],
        'price': json['price'],
        'postCode': json['postCode'],
    };
}

export function UserListingsInnerListingToJSON(value?: UserListingsInnerListing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'shortDescription': value.shortDescription,
        'thumbnailUrl': value.thumbnailUrl,
        'accommodationType': value.accommodationType,
        'numberOfRooms': value.numberOfRooms,
        'source': value.source,
        'price': value.price,
        'postCode': value.postCode,
    };
}

