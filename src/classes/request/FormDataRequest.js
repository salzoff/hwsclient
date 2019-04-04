import BaseRequest from './BaseRequest';

export default class FormDataRequest extends BaseRequest {
    constructor() {
        super();
        this['MsgType'] = undefined;
        this['RequestType'] = undefined;
        this['Currency'] = undefined;
        this['DepartureTreeID'] = undefined;
    }

    get path() {
        return 'formdata';
    }

    set msgType(msgType) {
        this['MsgType'] = msgType;
    }

    get msgType() {
        return this['MsgType'];
    }

    set requestType(requestType) {
        this['RequestType'] = requestType;
    }

    get requestType() {
        return this['RequestType'];
    }

    set currency(currency) {
        this['Currency'] = currency;
    }

    get currency() {
        return this['Currency'];
    }

    set departureTreeID(departureTreeID) {
        this['DepartureTreeID'] = departureTreeID;
    }

    get departureTreeID() {
        return this['DepartureTreeID'];
    }
};
