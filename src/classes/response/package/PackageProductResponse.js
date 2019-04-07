import HotelResponse from '../HotelResponse';
import Package from '../elements/product/Package';
import _get from 'lodash/get';
export default class PackageProductResponse extends HotelResponse {
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
        let response = Object.assign(new PackageProductResponse(), obj);
        response.Hotels = response.Hotels ? response.Hotels.map(hotel => Package.fromObject(hotel)) : [];
        return response;
    }
};
