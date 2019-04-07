import Package from '../elements/product/Package';
import HotelResponse from '../HotelResponse';
import _get from 'lodash/get';

export default class PackageOfferResponse extends HotelResponse {
    get offers() {
        return this.product ? this.product.offers : [];
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            hotels() {
                const rawHotels = _get(this.rawResponse, 'Hotel', []);
                this.hotels = rawHotels.map(hotel => Package.fromRawHotel(hotel));

                return this.hotels;
            }
        });
    }

    static fromObject(obj) {
        let response = Object.assign(new PackageOfferResponse(), obj);
        response.Hotels = response.Hotels ? response.Hotels.map(hotel => Package.fromObject(hotel)) : [];
        return response;
    }
};
