import HotelResponse from '../HotelResponse';
import Hotel from '../elements/product/Hotel';
import _get from 'lodash/get';
export default class HotelProductResponse extends HotelResponse {
    rawGetters() {
        return Object.assign(super.rawGetters(), {
            hotels() {
                const rawHotels = _get(this.rawResponse, 'Hotel', []);
                this.hotels = rawHotels.map(hotel => {
                    var pack = Hotel.fromRawHotel(hotel);
                    pack.travellers = this.travellers;
                    return pack;
                });
                return this.hotels;
            }
        });
    }

    static fromObject(obj) {
        let response = Object.assign(new HotelProductResponse(), obj);
        response.Hotels = response.Hotels ? response.Hotels.map(hotel => Hotel.fromObject(hotel)) : [];
        return response;
    }
};
