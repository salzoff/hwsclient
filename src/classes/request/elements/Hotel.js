import BaseElement from './BaseElement';
import Room from './Room';
import Recommendations from './Recommendations';
import Ratings from './Ratings';
import AttributeLogicExpression from '../../helper/AttributeLogicalExpression';

export default class Hotel extends BaseElement {
    constructor() {
        super();
        this['Category'] = undefined;
        this['ProductCode'] = undefined;
        this['BookingCode'] = undefined;
        this['Provider'] = undefined;
        this['Name'] = undefined;
        this['Chain'] = undefined;
        this['GlobalTypeList'] = undefined;
        this['HotelAttributeCodeList'] = undefined;
        this['References'] = {};
        this['Recommendations'] = {};
        this['Ratings'] = {};
        this['Rooms'] = {};
    }

    set category(category) {
        this['Category'] = category;
    }

    get category() {
        return this['Category'];
    }

    set productCode(productCode) {
        if (typeof productCode === 'string') {
            this['ProductCode'] = productCode.split(' ');
            return;
        }
        this['ProductCode'] = productCode;
    }

    get productCode() {
        return this['ProductCode'];
    }

    set bookingCode(bookingCode) {
        if (typeof bookingCode === 'string') {
            this['BookingCode'] = bookingCode.split(' ');
            return;
        }
        this['BookingCode'] = bookingCode;
    }

    get bookingCode() {
        return this['BookingCode'];
    }

    set hotelProvider(provider) {
        if (typeof provider === 'string') {
            this['Provider'] = provider.split(' ');
            return;
        }
        this['Provider'] = provider;
    }

    get hotelProvider() {
        return this['Provider'];
    }

    set hotelName(hotelName) {
        this['Name'] = hotelName;
    }

    get hotelName() {
        return this['Name'];
    }

    set hotelChain(hotelChain) {
        this['Chain'] = hotelChain;
    }

    get hotelChain() {
        return this['Chain'];
    }

    set globalTypeList(globalTypeList) {
        this['GlobalTypeList'] = this['GlobalTypeList'] ? this['GlobalTypeList'] : {};
        if (typeof globalTypeList === 'string') {
            this['GlobalTypeList']['value'] = globalTypeList.split(' ');
            return;
        }
        if (globalTypeList instanceof Array) {
            this['GlobalTypeList']['value'] = globalTypeList;
            return;
        }
        const logicalExpression = AttributeLogicExpression.fromPartsObject(globalTypeList);
        this['GlobalTypeList'] = logicalExpression ? logicalExpression.getLogicalExpressionObject() : globalTypeList;
    }

    get globalTypeList() {
        return this['GlobalTypeList'] && this['GlobalTypeList']['value'] ? this['GlobalTypeList']['value'] : this['GlobalTypeList'];
    }

    set hotelAttributeCodeList(hotelAttributeCodeList) {
        if (typeof hotelAttributeCodeList === 'string') {
            this['HotelAttributeCodeList'] = {
                'FQN': 'true',
                'value': hotelAttributeCodeList.split(' ')
            };
            return;
        }
        if (hotelAttributeCodeList instanceof Array) {
            this['HotelAttributeCodeList'] = {
                'FQN': 'true',
                'value': hotelAttributeCodeList
            };
            return;
        }
        if (hotelAttributeCodeList instanceof Object) {
            this['HotelAttributeCodeList'] = hotelAttributeCodeList;
        }
    }

    get hotelAttributeCodeList() {
        return this['HotelAttributeCodeList'];
    }

    set giataId(giataId) {
        if (typeof giataId === 'string') {
            this['References']['GiataCode'] = giataId.split(' ');
            return;
        }
        if (typeof giataId === 'number') {
            this['References']['GiataCode'] = [giataId];
            return;
        }
        this['References']['GiataCode'] = giataId;
    }

    get giataId() {
        return this['References']['GiataCode'];
    }

    set hotelId(hotelId) {
        if (typeof hotelId === 'string') {
            this['References']['HotelID'] = hotelId.split(' ');
            return;
        }
        if (typeof hotelId === 'number') {
            this['References']['HotelID'] = [hotelId];
            return;
        }
        this['References']['HotelID'] = hotelId;
    }

    get hotelId() {
        return this['References']['HotelID'];
    }

    set rooms(rooms) {
        this['Rooms'] = rooms;
    }

    get rooms() {
        return this['Rooms'];
    }

    addRooms(params) {
        this['Rooms']['Room'] = this['Rooms']['Room'] instanceof Array ? this['Rooms']['Room'] : [];
        this['Rooms']['Room'].push(Room.fromParams(params));
    }

    set recommendations(recommendations) {
        this['Recommendations'] = recommendations;
    }

    get recommendations() {
        return this['Recommendations'];
    }

    addRecommendations(params) {
        this['Recommendations'] = Recommendations.fromParams(params);
    }

    set ratings(ratings) {
        this['Ratings'] = ratings;
    }

    get ratings() {
        return this['Ratings'];
    }

    addRatings(params) {
        this['Ratings'] = Ratings.fromParams(params);
    }

    static fromParams(params) {
        let element = new Hotel();
        const props = Object.getOwnPropertyNames(Hotel.prototype);
        props.forEach(key => {
            if (params[key] && typeof key !== 'function') {
                element[key] = params[key];
            }
        });

        element.addRooms(params);
        element.addRecommendations(params);
        element.addRatings(params);

        return element;
    }
};
