import HotelRequest from './HotelRequest';
import Flight from './elements/Flight';

export default class PackageRequest extends HotelRequest {
    constructor() {
        super();
        this['FlightDetail'] = undefined;
        this['ShowSegments'] = undefined;
        this['RemoveAirlineFromFlightNumber'] = undefined;
        this['Flight'] = undefined;
    }

    set flightDetail(flightDetail) {
        this['FlightDetail'] = flightDetail;
    }

    get flightDetail() {
        return this['FlightDetail'];
    }

    set showSegments(showSegments) {
        this['ShowSegments'] = showSegments;
    }

    get showSegments() {
        return this['ShowSegments'];
    }

    set flight(flight) {
        this['Flight'] = flight;
    }

    get flight() {
        return this['Flight'];
    }

    set removeAirlineFromFlightNumber(removeAirlineFromFlightNumber) {
        this['RemoveAirlineFromFlightNumber'] = removeAirlineFromFlightNumber;
    }

    get removeAirlineFromFlightNumber() {
        return this['RemoveAirlineFromFlightNumber'];
    }

    addFlight(params) {
        this['Flight'] = Flight.fromParams(params);
    }

    addElements(params) {
        super.addElements(params);
        this.addFlight(params);
    }
};
