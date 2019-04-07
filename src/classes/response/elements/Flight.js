import FlightSegment from './FlightSegment';
import _get from 'lodash/get';

export default class Flight extends FlightSegment {
    constructor() {
        super();
        this['FlightCode'];
        this['FlightLabel'];
        this['FlightKey'];
        this['FlightId'];
        this['Priority'];
        this['Provider'];
        this['TariffClass'];
        this['SoldOut'];
        this['LocalSupplier'];
        this['StopOver'];
        this['Segments'];
    }

    set flightCode(flightCode) {
        this['FlightCode'] = flightCode;
    }

    get flightCode() {
        return this['FlightCode'];
    }

    set flightLabel(flightLabel) {
        this['FlightLabel'] = flightLabel;
    }

    get flightLabel() {
        return this['FlightLabel'];
    }

    set flightKey(flightKey) {
        this['FlightKey'] = flightKey;
    }

    get flightKey() {
        return this['FlightKey'];
    }

    set flightId(flightId) {
        this['FlightId'] = flightId;
    }

    get flightId() {
        return this['FlightId'];
    }

    set priority(priority) {
        this['Priority'] = priority;
    }

    get priority() {
        return this['Priority'];
    }

    set provider(provider) {
        this['Provider'] = provider;
    }

    get provider() {
        return this['Provider'];
    }

    set tariffClass(tariffClass) {
        this['TariffClass'] = tariffClass;
    }

    get tariffClass() {
        return this['TariffClass'];
    }

    set soldOut(soldOut) {
        this['SoldOut'] = soldOut;
    }

    get soldOut() {
        return this['SoldOut'];
    }

    set localSupplier(localSupplier) {
        this['LocalSupplier'] = localSupplier;
    }

    get localSuppler() {
        return this['LocalSupplier'];
    }

    set stopOver(stopOver) {
        this['StopOver'] = stopOver;
    }

    get stopOver() {
        return this['StopOver'];
    }

    get hasStopOver() {
        return this.stopOver > 0;
    }

    set segments(segments) {
        this['Segments'] = segments;
    }

    get segments() {
        return this['Segments'];
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            flightCode() {
                this.flightCode = this.rawFlight['FlightCode'];
                return this.flightCode;
            },
            flightLabel() {
                this.flightLabel = this.rawFlight['FlightLabel'];
                return this.flightLabel;
            },
            flightKey() {
                this.flightKey = this.rawFlight['FlightKey'];
                return this.flightKey;
            },
            flightId() {
                this.flightId = this.rawFlight['FlightId'];
                return this.flightId;
            },
            priority() {
                this.priority = this.rawFlight['Priority'];
                return this.priority;
            },
            provider() {
                this.provider = this.rawFlight['Provider'];
                return this.provider;
            },
            tariffClass() {
                this.tariffClass = this.rawFlight['TariffClass'];
                return this.tariffClass;
            },
            soldOut() {
                this.soldOut = this.rawFlight['SoldOut'];
                return this.soldOut;
            },
            localSupplier() {
                this.localSupplier = this.rawFlight['LocalSupplier'];
                return this.localSupplier;
            },
            airlineName() {
                this.airlineName = _get(this.rawFlight, 'Airline.value');
                return this.airlineName;
            },
            airlineCode() {
                this.airlineCode = _get(this.rawFlight, 'Airline.Code');
                return this.airlineCode;
            },
            stopOver() {
                this.stopOver = this.rawFlight['StopOver'];
            },
            segments() {
                const rawSegments = _get(this.rawFlight, 'FlightSegments.FlightSegment', []);
                this.segments = rawSegments.length > 0
                    ? rawSegments.map(segment => FlightSegment.fromRawFlight(segment))
                    : undefined;
                return this.segments;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.segments) {
            this.segments.forEach(segment => segment.parseRawResponse());
        }
    }

    static fromObject(obj) {
        let response = super.fromObject(obj);
        if (response.Segments && response.Segments instanceof Array) {
            response.Segments = response.Segments.map(segment => FlightSegment.fromObject(segment));
        }
        return response;
    }
};
