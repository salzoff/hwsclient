import HotelGroup from './HotelGroup';
import Package from '../product/Package';

export default class PackageGroup extends HotelGroup {
    rawGetters() {
        return Object.assign(super.rawGetters(), {
            hotel() {
                this.hotel = Package.fromRawHotel(this.rawGroup.TopHotel);
                return this.hotel;
            }
        });
    }
};
