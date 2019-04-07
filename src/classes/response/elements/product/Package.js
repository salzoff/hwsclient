import Hotel from './Hotel';
import PackageOffer from '../offer/PackageOffer';
import _get from 'lodash/get';
export default class Package extends Hotel {
    constructor() {
        super();
        this['Offers'];
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            offers() {
                const rawOffers = _get(this.rawHotel, 'Offers.Offer', []);
                this.offers = rawOffers.map(offer => PackageOffer.fromRawOffer(offer));
                return this.offers;
            }
        });
    }

    static fromObject(obj) {
        let response = Object.assign(new Package(), obj);
        response.Offers = response.Offers ? response.Offers.map(offer => PackageOffer.fromObject(offer)) : [];
        return response;
    }
};
