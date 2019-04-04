import BaseElement from './BaseElement';
import moment from 'moment';

export default class TravelPeriod extends BaseElement {
    constructor() {
        super();
        this['DepartureDate'] = undefined;
        this['DepartureMinTime'] = undefined;
        this['DepartureMaxTime'] = undefined;
        this['ReturnDate'] = undefined;
        this['ReturnMinTime'] = undefined;
        this['ReturnMaxTime'] = undefined;
        this['Duration'] = undefined;
        this['DepartureDayOfWeekBitMask'] = undefined;
        this['ReturnDayOfWeekBitMask'] = undefined;
    }

    set departureDate(departureDate) {
        this['DepartureDate'] = departureDate === '' ? '' : moment(departureDate).format('YYYY-MM-DD');
    }

    get departureDate() {
        return this['DepartureDate'];
    }

    set departureMinTime(time) {
        this['DepartureMinTime'] = time;
    }

    get departureMinTime() {
        return this['DepartureMinTime'];
    }

    set departureMaxTime(time) {
        this['DepartureMaxTime'] = time;
    }

    get departureMaxTime() {
        return this['DepartureMaxTime'];
    }

    set returnDate(returnDate) {
        this['ReturnDate'] = returnDate === '' ? '' : moment(returnDate).format('YYYY-MM-DD');
    }

    get returnDate() {
        return this['ReturnDate'];
    }

    set returnMinTime(time) {
        this['ReturnMinTime'] = time;
    }

    get returnMinTime() {
        return this['ReturnMinTime'];
    }

    set returnMaxTime(time) {
        this['ReturnMaxTime'] = time;
    }

    get returnMaxTime() {
        return this['ReturnMaxTime'];
    }

    set duration(duration) {
        if (!(duration instanceof Array)) {
            duration = [duration];
        }

        duration = duration.map(durItem => {
            return typeof durItem === 'number' ? `P${durItem}D` : durItem;
        });

        this['Duration'] = duration;
    }

    get duration() {
        return this['Duration'];
    }

    set departureDayOfWeekBitMask(departureDayOfWeekBitMask) {
        this['DepartureDayOfWeekBitMask'] = departureDayOfWeekBitMask;
    }

    get departureDayOfWeekBitMask() {
        return this['DepartureDayOfWeekBitMask'];
    }

    set returnDayOfWeekBitMask(returnDayOfWeekBitMask) {
        this['ReturnDayOfWeekBitMask'] = returnDayOfWeekBitMask;
    }

    get returnDayOfWeekBitMask() {
        return this['ReturnDayOfWeekBitMask'];
    }
};
