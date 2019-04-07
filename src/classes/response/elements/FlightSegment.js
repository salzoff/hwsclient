import BaseElement from './BaseElement';
import moment from 'moment';
import _get from 'lodash/get';
export default class FlightSegment extends BaseElement {
    constructor() {
        super();
        this['DepartureDateTime'];
        this['ArrivalDateTime'];
        this['Offset'];
        this['FlightNumber'];
        this['BookingClass'];
        this['OperatingCarrier'];
        this['Distance'];
        this['Duration'];
        this['AirlineCode'];
        this['AirlineName'];
        this['FlightClass'];
        this['DepartureAirportCode'];
        this['DepartureAirportName'];
        this['ArrivalAirportCode'];
        this['ArrivalAirportName'];
    }

    set departureDateTime(departureDateTime) {
        this['DepartureDateTime'] = departureDateTime;
    }

    get departureDateTime() {
        return this['DepartureDateTime'] ? moment(this['DepartureDateTime']) : this['DepartureDateTime'];
    }

    set arrivalDateTime(arrivalDateTime) {
        this['ArrivalDateTime'] = arrivalDateTime;
    }

    get arrivalDateTime() {
        return this['ArrivalDateTime'] ? moment(this['ArrivalDateTime']) : this['ArrivalDateTime'];
    }

    set offset(offset) {
        this['Offset'] = offset;
    }

    get offset() {
        return this['Offset'];
    }

    set flightNumber(flightNumber) {
        this['FlightNumber'] = flightNumber;
    }

    get flightNumber() {
        return this['FlightNumber'];
    }

    set bookingClass(bookingClass) {
        this['BookingClass'] = bookingClass;
    }

    get bookingClass() {
        return this['BookingClass'];
    }

    set operatingCarrier(operatingCarrier) {
        this['OperatingCarrier'] = operatingCarrier;
    }

    get operatingCarrier() {
        return this['OperatingCarrier'];
    }

    set distance(distance) {
        this['Distance'] = distance;
    }

    get distance() {
        return this['Distance'];
    }

    set duration(duration) {
        this['Duration'] = duration;
    }

    get duration() {
        return this['Duration'];
    }

    get durationParsed() {
        return {
            days: Math.floor(this.duration / (24 * 60)),
            hours: Math.floor((this.duration % (24 * 60)) / 60),
            minutes: Math.floor((this.duration % (24 * 60)) % 60)
        };
    }

    set airlineCode(airlineCode) {
        this['AirlineCode'] = airlineCode;
    }

    get airlineCode() {
        return this['AirlineCode'];
    }

    set airlineName(airlineName) {
        this['AirlineName'] = airlineName;
    }

    get airlineName() {
        return this['AirlineName'];
    }

    set flightClass(flightClass) {
        this['FlightClass'] = flightClass;
    }

    get flightClass() {
        return this['FlightClass'];
    }

    set departureAirportName(departureAirportName) {
        this['DepartureAirportName'] = departureAirportName;
    }

    get departureAirportName() {
        return this['DepartureAirportName'];
    }

    set departureAirportCode(departureAirportCode) {
        this['DepartureAirportCode'] = departureAirportCode;
    }

    get departureAirportCode() {
        return this['DepartureAirportCode'];
    }

    set arrivalAirportName(arrivalAirportName) {
        this['ArrivalAirportName'] = arrivalAirportName;
    }

    get arrivalAirportName() {
        return this['ArrivalAirportName'];
    }

    set arrivalAirportCode(arrivalAirportCode) {
        this['ArrivalAirportCode'] = arrivalAirportCode;
    }

    get arrivalAirportCode() {
        return this['ArrivalAirportCode'];
    }

    /*
      Calculate difference between flight duration taken from offer and between departure time and arrival time
      in minutes in order to know the timezone shift. Necessary for calculating the duration of flights from the
      BHub replacing the flight from the Hub in case of a flight change.
   */
    get timezoneOffset() {
        const arrivalDateTime = this.arrivalDateTime;
        const departureDateTime = this.departureDateTime;
        const localDuration = moment.duration(arrivalDateTime.diff(departureDateTime)).asMinutes();
        return localDuration - this.duration;
    }

    rawGetters() {
        return {
            departureDateTime() {
                this.departureDateTime = this.rawFlight['DepartureDateTime'];
                return this.departureDateTime;
            },
            arrivalDateTime() {
                this.arrivalDateTime = this.rawFlight['ArrivalDateTime'];
                return this.arrivalDateTime;
            },
            offset() {
                this.offset = this.rawFlight['Offset'];
                return this.offset;
            },
            bookingClass() {
                this.bookingClass = this.rawFlight['BookingClass'];
                return this.bookingClass;
            },
            operatingCarrier() {
                this.operatingCarrier = this.rawFlight['OperatingCarrier'];
                return this.operatingCarrier;
            },
            distance() {
                this.distance = this.rawFlight['Distance'];
                return this.distance;
            },
            duration() {
                this.duration = this.rawFlight['Duration'];
                return this.duration;
            },
            airlineName() {
                this.airlineName = this.rawFlight['AirlineName'];
                return this.airlineName;
            },
            airlineCode() {
                this.airlineCode = this.rawFlight['Airline'];
                return this.airlineCode;
            },
            flightClass() {
                this.flightClass = this.rawFlight['Class'];
                return this.flightClass;
            },
            flightNumber() {
                this.flightNumber = this.rawFlight['FlightNumber'];
                return this.flightNumber;
            },
            departureAirportName() {
                this.departureAirportName = _get(this.rawFlight, 'DepartureAirport.value');
                return this.departureAirportName;
            },
            departureAirportCode() {
                this.departureAirportCode = _get(this.rawFlight, 'DepartureAirport.Code');
                return this.departureAirportCode;
            },
            arrivalAirportName() {
                this.arrivalAirportName = _get(this.rawFlight, 'ArrivalAirport.value');
                return this.arrivalAirportName;
            },
            arrivalAirportCode() {
                this.arrivalAirportCode = _get(this.rawFlight, 'ArrivalAirport.Code');
                return this.arrivalAirportCode;
            },
            price() {
                this.price = this.rawFlight.Price ? parseFloat(this.rawFlight.Price['Amount']) : undefined;
                return this.price;
            },
            pricesByPax() {
                const rawPrices = _get(this.rawFlight, 'Price.PriceByPax', []);
                this.pricesByPax = rawPrices
                    ? rawPrices.map(price => {
                        return {
                            refId: price['RefId'],
                            fullPricePayer: price['FullPricePayer'],
                            amount: price['Amount']
                        };
                    })
                    : undefined;
                return this.pricesByPax;
            }
        };
    }

    static fromRawFlight(rawFlight) {
        return this.fromRawElement(rawFlight, 'rawFlight');
    }
};
