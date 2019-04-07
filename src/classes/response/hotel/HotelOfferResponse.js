import Hotel from '../elements/product/Hotel';
import HotelResponse from '../HotelResponse';
import _get from 'lodash/get';
export default class HotelOfferResponse extends HotelResponse {
    get offers() {
        return this.product ? this.product.offers : [];
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

    static fromObject(obj) {
        let response = Object.assign(new HotelOfferResponse(), obj);
        response.Hotels = response.Hotels ? response.Hotels.map(hotel => Hotel.fromObject(hotel)) : [];
        return response;
    }
};
