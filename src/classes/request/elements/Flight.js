import BaseElement from './BaseElement';

export default class Flight extends BaseElement {
    constructor() {
        super();
        this['StopOver'] = undefined;
        this['Provider'] = undefined;
        this['Class'] = undefined;
        this['BookingClass'] = undefined;
        this['DepartureAirports'] = undefined;
        this['ArrivalAirports'] = undefined;
        this['Airlines'] = undefined;
    }

    set stopOver(stopOver) {
        this['StopOver'] = stopOver;
    }

    get stopOver() {
        return this['StopOver'];
    }

    set flightProvider(flightProvider) {
        if (typeof flightProvider === 'string') {
            this['Provider'] = flightProvider.split(' ');
            return;
        }
        this['Provider'] = flightProvider;
    }

    get flightProvider() {
        return this['FlightProvider'];
    }

    set flightClass(flightClass) {
        this['Class'] = flightClass;
    }

    get flightClass() {
        return this['Class'];
    }

    set flightBookingClass(flightBookingClass) {
        if (typeof flightBookingClass === 'string') {
            this['BookingClass'] = flightBookingClass.split(' ');
            return;
        }
        this['BookingClass'] = flightBookingClass;
    }

    get flightBookingClass() {
        return this['BookingClass'];
    }

    set departureAirports(departureAirports) {
        this['DepartureAirports'] = this['DepartureAirports'] ? this['DepartureAirports'] : {};
        if (typeof departureAirports === 'string') {
            this['DepartureAirports']['value'] = departureAirports.split(' ');
            return;
        }
        this['DepartureAirports']['value'] = departureAirports;
    }

    get departureAirports() {
        return this['DepartureAirports'] && this['DepartureAirports']['value'] ? this['DepartureAirports']['value'] : this['DepartureAirports'];
    }

    set arrivalAirports(arrivalAirports) {
        this['ArrivalAirports'] = this['ArrivalAirports'] ? this['ArrivalAirports'] : {};
        if (typeof arrivalAirports === 'string') {
            this['ArrivalAirports']['value'] = arrivalAirports.split(' ');
            return;
        }
        this['ArrivalAirports']['value'] = arrivalAirports;
    }

    get arrivalAirports() {
        return this['ArrivalAirports'] && this['ArrivalAirports']['value'] ? this['ArrivalAirports']['value'] : this['ArrivalAirports'];
    }

    set airlines(airlines) {
        this['Airlines'] = this['Airlines'] ? this['Airlines'] : {};
        if (typeof airlines === 'string') {
            this['Airlines']['value'] = airlines.split(' ');
            return;
        }
        this['Airlines']['value'] = airlines;
    }

    get airlines() {
        return this['Airlines'] && this['Airlines']['value'] ? this['Airlines']['value'] : this['Airlines'];
    }

    static fromParams(params) {
        let element = new Flight();
        const props = Object.getOwnPropertyNames(Flight.prototype);
        props.forEach(key => {
            if (params[key] && typeof key !== 'function') {
                element[key] = params[key];
            }
        });

        return element;
    }
};
