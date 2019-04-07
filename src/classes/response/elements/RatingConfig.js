import BaseElement from './BaseElement';

export default class RatingConfig extends BaseElement {
    constructor() {
        super();
        this['Provider'];
        this['Ratings'];
    }

    set provider(provider) {
        this['Provider'] = provider;
    }

    get provider() {
        return this['Provider'];
    }

    set ratings(ratings) {
        this['Ratings'] = ratings;
    }

    get ratings() {
        return this['Ratings'];
    }

    rawGetters() {
        return {
            provider() {
                this.provider = this.rawConfig.Provider;
                return this.provider;
            },
            ratings() {
                this.ratings = this.rawConfig.Rating;
                return this.ratings;
            }
        };
    }

    static fromRawConfig(rawConfig) {
        return this.fromRawElement(rawConfig, 'rawConfig');
    }

    static fromObject(obj) {
        return Object.assign(new RatingConfig(), obj);
    }
};
