import Offer from './Offer';
import Room from '../Room';
import moment from 'moment';

export default class HotelOffer extends Offer {
    constructor() {
        super();
        this['ProductCode'];
        this['BookingCode'];
        this['BookingCodeTOMA'];
        this['HotelKey'];
        this['MaxChildAge'];
        this['ExtraBeds'];
        this['LengthOfStay'];
        this['ArrivalDate'];
        this['NearestAirportDLC'];
        this['Provider'];
        this['Rooms'];
    }

    set productCode(productCode) {
        this['ProductCode'] = productCode;
    }

    get productCode() {
        return this['ProductCode'];
    }

    set bookingCode(bookingCode) {
        this['BookingCode'] = bookingCode;
    }

    get bookingCode() {
        return this['BookingCode'];
    }

    set bookingCodeTOMA(bookingCodeTOMA) {
        this['BookingCodeTOMA'] = bookingCodeTOMA;
    }

    get bookingCodeTOMA() {
        return this['BookingCodeTOMA'];
    }

    set hotelKey(hotelKey) {
        this['HotelKey'] = hotelKey;
    }

    get hotelKey() {
        return this['HotelKey'];
    }

    set maxChildAge(maxChildAge) {
        this['MaxChildAge'] = maxChildAge;
    }

    get maxChildAge() {
        return this['MaxChildAge'];
    }

    set extraBeds(extraBeds) {
        this['ExtraBeds'] = extraBeds;
    }

    get extraBeds() {
        return this['ExtraBeds'];
    }

    set lengthOfStay(lengthOfStay) {
        this['LengthOfStay'] = lengthOfStay;
    }

    get lengthOfStay() {
        return this['LengthOfStay'];
    }

    set arrivalDate(arrivalDate) {
        this['ArrivalDate'] = arrivalDate;
    }

    get arrivalDate() {
        return this['ArrivalDate'] ? moment(this['ArrivalDate']) : this['ArrivalDate'];
    }

    set nearestAirportDLC(nearestAirportDLC) {
        this['NearestAirportDLC'] = nearestAirportDLC;
    }

    get nearestAirportDLC() {
        return this['NearestAirportDLC'];
    }

    set provider(provider) {
        this['Provider'] = provider;
    }

    get provider() {
        return this['Provider'];
    }

    set rooms(rooms) {
        this['Rooms'] = rooms;
        this['Rooms'].forEach(room => {
            room.travellers = this.travellers;
        });
    }

    get rooms() {
        return this['Rooms'];
    }

    get room() {
        if (this.rooms === null) {
            this.rawGetters().rooms.call(this);
        }
        return this.rooms instanceof Array && this.rooms.length > 0 ? this.rooms[0] : undefined;
    }

    get startDate() {
        if (this.arrivalDate === null) {
            return this.rawGetters()['arrivalDate'].call(this);
        }
        return moment(this.arrivalDate);
    }

    get endDate() {
        return moment(this.arrivalDate).add(this.duration, 'days');
    }

    get duration() {
        if (this.lengthOfStay === null) {
            return this.rawGetters()['lengthOfStay'].call(this);
        }
        return parseInt(this.lengthOfStay, 10);
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.rooms) {
            this.rooms.forEach(room => room.parseRawResponse());
        }
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            productCode() {
                this.productCode = this.rawOffer['ProductCode'];
                return this.productCode;
            },
            bookingCode() {
                this.bookingCode = this.rawOffer['BookingCode'];
                return this.bookingCode;
            },
            bookingCodeTOMA() {
                this.bookingCodeTOMA = this.rawOffer['BookingCodeTOMA'];
                return this.bookingCodeTOMA;
            },
            hotelKey() {
                this.hotelKey = this.rawOffer['HotelKey'];
                return this.hotelKey;
            },
            maxChildAge() {
                this.maxChildAge = this.rawOffer['MaxChildAge'];
                return this.maxChildAge;
            },
            extraBeds() {
                this.extraBeds = this.rawOffer['ExtraBeds'];
                return this.extraBeds;
            },
            lengthOfStay() {
                this.lengthOfStay = this.rawOffer['LengthOfStay'];
                return this.lengthOfStay;
            },
            arrivalDate() {
                this.arrivalDate = this.rawOffer['ArrivalDate'];
                return this.arrivalDate;
            },
            nearestAirportDLC() {
                this.nearestAirportDLC = this.rawOffer['NearestAirportDLC'];
                return this.nearestAirportDLC;
            },

            provider() {
                this.provider = this.rawOffer['Provider'];
                return this.provider;
            },

            rooms() {
                const rawRooms = this.rawOffer.Rooms.Room;
                this.rooms = rawRooms.map(room => Room.fromRawRoom(room));
                return this.rooms;
            }
        });
    }

    static fromObject(obj) {
        let response = super.fromObject(obj);
        response.Rooms = response.Rooms ? response.Rooms.map(room => Room.fromObject(room)) : [];
        return response;
    }
};
