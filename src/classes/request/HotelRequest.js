import ProductRequest from './ProductRequest';
import Hotel from './elements/Hotel';

export default class HotelRequest extends ProductRequest {
    constructor() {
        super();
        this['HotelDetail'] = undefined;
        this['ShowAllotment'] = undefined;
        this['ShowRatings'] = undefined;
        this['NearestAirportCodeList'] = undefined;
        this['Hotel'] = undefined;
    }

    set hotelDetail(hotelDetail) {
        this['HotelDetail'] = hotelDetail;
    }

    get hotelDetail() {
        return this['HotelDetail'];
    }

    set showAllotment(showAllotment) {
        this['ShowAllotment'] = showAllotment;
    }

    get showAllotment() {
        return this['ShowAllotment'];
    }

    set showRatings(showRatings) {
        this['ShowRatings'] = showRatings;
    }

    get showRatings() {
        return this['ShowRatings'];
    }

    set nearestAirportCodeList(nearestAirportCodeList) {
        if (typeof nearestAirportCodeList === 'string') {
            this['NearestAirportCodeList'] = nearestAirportCodeList.split(' ');
            return;
        }
        this['NearestAirportCodeList'] = nearestAirportCodeList;
    }

    get nearestAirportCodeList() {
        return this['NearestAirportCodeList'];
    }

    set hotel(hotel) {
        this['Hotel'] = hotel;
    }

    get hotel() {
        return this['Hotel'];
    }

    addHotel(params) {
        this['Hotel'] = Hotel.fromParams(params);
    }

    addElements(params) {
        super.addElements(params);
        this.addHotel(params);
    }
};
