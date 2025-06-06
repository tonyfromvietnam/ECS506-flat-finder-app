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
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
} from './Location';

/**
 * 
 * @export
 * @interface SeekingForm
 */
export interface SeekingForm {
    /**
     * 
     * @type {string}
     * @memberof SeekingForm
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof SeekingForm
     */
    description: string;
    /**
     * 
     * @type {Array<Blob>}
     * @memberof SeekingForm
     */
    photos?: Array<Blob>;
    /**
     * 
     * @type {Location}
     * @memberof SeekingForm
     */
    preferredLocation: Location;
}

/**
 * Check if a given object implements the SeekingForm interface.
 */
export function instanceOfSeekingForm(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "preferredLocation" in value;

    return isInstance;
}

export function SeekingFormFromJSON(json: any): SeekingForm {
    return SeekingFormFromJSONTyped(json, false);
}

export function SeekingFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeekingForm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'description': json['description'],
        'photos': !exists(json, 'photos') ? undefined : json['photos'],
        'preferredLocation': LocationFromJSON(json['preferredLocation']),
    };
}

export function SeekingFormToJSON(value?: SeekingForm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'photos': value.photos,
        'preferredLocation': LocationToJSON(value.preferredLocation),
    };
}

