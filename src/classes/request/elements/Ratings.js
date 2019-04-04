import BaseElement from './BaseElement';
import { getRatingIndex, getRatingNames } from '../../rating/ratingMapper';

export default class Ratings extends BaseElement {
    constructor() {
        super();
        this['Provider'] = undefined;
        this['ExcludeUnrated'] = undefined;
        this['Rating'] = [];
        const ratingNames = getRatingNames();
        ratingNames.forEach(key => {
            Object.defineProperty(this, key, {
                get(name) {
                    return this.getElement(name);
                },
                set(value) {
                    return this.setElement(key, value);
                }
            });
        });
    }

    set provider(provider) {
        this['Provider'] = provider;
    }

    get provider() {
        return this['Provider'];
    }

    set excludeUnrated(excludeUnrated) {
        this['ExcludeUnrated'] = excludeUnrated;
    }

    get excludeUnrated() {
        return this['ExcludeUnrated'];
    }

    setElement(name, value) {
        const indexforName = getRatingIndex(this.provider, name);
        if (!indexforName) {
            return;
        }
        let index = this.Rating.findIndex(entry => entry.index === indexforName);
        index = index > -1 ? index : this.Rating.length;
        this.Rating[index] = {
            Operator: 'ge',
            Index: indexforName,
            Value: value
        };
    }

    getElement(name) {
        const indexforName = getRatingIndex(this.provider, name);
        if (!indexforName) {
            return undefined;
        }
        return this.Ratings.find(entry => entry.Index === indexforName);
    }

    static fromParams(params) {
        let element = new Ratings();
        if (!params.ratingsProvider) {
            return element;
        }
        element.provider = params.ratingsProvider;
        const props = Object.getOwnPropertyNames(Ratings.prototype);
        props.push(...getRatingNames());
        props.forEach(key => {
            if (params[key] && typeof key !== 'function') {
                element[key] = params[key];
            }
        });
        return element;
    }
};
