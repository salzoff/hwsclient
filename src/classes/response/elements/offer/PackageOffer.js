import HotelOffer from './HotelOffer';
import Flight from '../Flight';
import moment from 'moment';

export default class PackageOffer extends HotelOffer {
    constructor() {
        super();
        this['Departure'];
        this['Return'];
    }

    set departure(departure) {
        this['Departure'] = departure;
    }

    get departure() {
        return this['Departure'];
    }

    set returnFlight(returnFlight) {
        this['Return'] = returnFlight;
    }

    get returnFlight() {
        return this['Return'];
    }

    get startDate() {
        if (this.departure === null) {
            this.rawGetters()['departure'].call(this);
        }
        return this.departure && this.departure.departureDateTime ? moment(this.departure.departureDateTime) : undefined;
    }

    get endDate() {
        if (this.returnFlight === null) {
            this.rawGetters()['returnFlight'].call(this);
        }
        return this.returnFlight && this.returnFlight.departureDateTime ? moment(this.returnFlight.departureDateTime) : undefined;
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            departure() {
                this.departure = this.rawOffer.Departure ? Flight.fromRawFlight(this.rawOffer.Departure) : undefined;
                return this.departure;
            },
            returnFlight() {
                this.returnFlight = this.rawOffer.Return ? Flight.fromRawFlight(this.rawOffer.Return) : undefined;
                return this.returnFlight;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.departure) {
            this.departure.parseRawResponse();
        }
        if (this.returnFlight) {
            this.returnFlight.parseRawResponse();
        }
    }

    static fromObject(obj) {
        let response = super.fromObject(obj);
        response.Departure = Flight.fromObject(response.Departure);
        response.Return = Flight.fromObject(response.Return);
        return response;
    }
};
