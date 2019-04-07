import ProductResponse from './ProductResponse';
import Hotel from './elements/product/Hotel';
import _get from 'lodash/get';

export default class HotelResponse extends ProductResponse {
    constructor() {
        super();
        this['Hotels'];
    }

    set hotels(hotels) {
        this['Hotels'] = hotels;
        this['Hotels'].forEach(hotel => {
            hotel.travellers = this.travellers;
        });
    }

    get hotels() {
        return this['Hotels'];
    }

    get hotel() {
        if (this.hotels === null) {
            this.rawGetters().hotels.call(this);
        }
        return _get(this.hotels, '0');
    }

    get products() {
        if (this.hotels === null) {
            return this.rawGetters()['hotels'].call(this);
        }
        return this.hotels;
    }

    get product() {
        return this.products && this.products.length > 0 ? this.products[0] : undefined;
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            hotels() {
                const rawHotels = _get(this.rawResponse, 'Hotel', []);
                this.hotels = rawHotels.map(hotel => Hotel.fromRawHotel(hotel));
                return this.hotels;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        this.hotels.forEach(hotel => hotel.parseRawResponse());
    }
};
