import BaseElement from './BaseElement';
import _get from 'lodash/get';

export default class Room extends BaseElement {
    constructor() {
        super();
        this['Code'];
        this['OpCode'];
        this['RoomKey'];
        this['Attributes'];
        this['Views'];
        this['BookingCode'];
        this['BookingCodeTOMA'];
        this['MaxChildAge'];
        this['ExtraBeds'];
        this['OnRequestBookable'];
        this['PricesByPaxAvailable'];
        this['PriceCalculated'];
        this['PriceByUnit'];
        this['SoldOut'];
        this['Allotment'];
        this['AllotmentIndex'];
        this['BoardCode'];
        this['BoardDescription'];
        this['BoardKey'];
        this['BoardOpCode'];
        this['Description'];
        this['Extras'];
        this['Alternatives'];
        this['PersonAssignments'];
        this['Price'];
    }

    set code(code) {
        this['Code'] = code;
    }

    get code() {
        return this['Code'];
    }

    set opCode(opCode) {
        this['OpCode'] = opCode;
    }

    get opCode() {
        return this['OpCode'];
    }

    set roomKey(roomKey) {
        this['RoomKey'] = roomKey;
    }

    get roomKey() {
        return this['RoomKey'];
    }

    set attributes(attributes) {
        this['Attributes'] = attributes;
    }

    get attributes() {
        return this['Attributes'];
    }

    set views(views) {
        this['Views'] = views;
    }

    get views() {
        return this['Views'];
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

    set onRequestBookable(onRequestBookable) {
        this['OnRequestBookable'] = onRequestBookable;
    }

    get onRequestBookable() {
        return this['OnRequestBookable'];
    }

    set pricesByPaxAvailable(pricesByPaxAvailable) {
        this['PricesByPaxAvailable'] = pricesByPaxAvailable;
    }

    get pricesByPaxAvailable() {
        return this['PricesByPaxAvailable'];
    }

    set priceCalculated(priceCalculated) {
        this['PriceCalculated'] = priceCalculated;
    }

    get pricesCalculated() {
        return this['PriceCalculated'];
    }

    set priceByUnit(priceByUnit) {
        this['PriceByUnit'] = priceByUnit;
    }

    get priceByUnit() {
        return this['PriceByUnit'];
    }

    set soldOut(soldOut) {
        this['SoldOut'] = soldOut;
    }

    get soldOut() {
        return this['SoldOut'];
    }

    set allotment(allotment) {
        this['Allotment'] = allotment;
    }

    get allotment() {
        return this['Allotment'];
    }

    set allotmentIndex(allotmentIndex) {
        this['AllotmentIndex'] = allotmentIndex;
    }

    get allotmentIndex() {
        return this['AllotmentIndex'];
    }

    set boardCode(boardCode) {
        this['BoardCode'] = boardCode;
    }

    get boardCode() {
        return this['BoardCode'];
    }

    get boardCodeString() {
        return this['BoardCode'] instanceof Array && this['BoardCode'].length > 0 ? this['BoardCode'][0] : this['BoardCode'];
    }

    set boardDescription(boardDescription) {
        this['BoardDescription'] = boardDescription;
    }

    get boardDescription() {
        return this['BoardDescription'];
    }

    set boardKey(boardKey) {
        this['BoardKey'] = boardKey;
    }

    get boardKey() {
        return this['BoardKey'];
    }

    set boardOpCode(boardOpCode) {
        this['BoardOpCode'] = boardOpCode;
    }

    get boardOpCode() {
        return this['BoardOpCode'];
    }

    set extras(extras) {
        this['Extras'] = extras;
    }

    get extras() {
        return this['Extras'];
    }

    set description(description) {
        this['Description'] = description;
    }

    get description() {
        return this['Description'];
    }

    set alternatives(alternatives) {
        this['Alternatives'] = alternatives;
    }

    get alternatives() {
        return this['Alternatives'];
    }

    set personAssignments(personAssignments) {
        this['PersonAssignments'] = personAssignments;
    }

    get personAssignments() {
        return this['PersonAssignments'];
    }

    set price(price) {
        this['Price'] = price;
    }

    get price() {
        return this['Price'];
    }

    rawGetters() {
        const rawGet = _get.bind(null, this.rawRoom);
        return {
            code() {
                this.code = rawGet('Code');
                return this.code;
            },
            opCode() {
                this.opCode = this.rawRoom['OpCode'];
                return this.opCode;
            },
            roomKey() {
                this.roomKey = this.rawRoom['RoomKey'];
                return this.roomKey;
            },
            attributes() {
                this.attributes = rawGet('Attributes');
                return this.attributes;
            },
            views() {
                this.views = rawGet('Views');
                return this.views;
            },
            bookingCode() {
                this.bookingCode = this.rawRoom['BookingCode'];
                return this.bookingCode;
            },
            bookingCodeTOMA() {
                this.bookingCodeTOMA = this.rawRoom['BookingCodeTOMA'];
                return this.bookingCodeTOMA;
            },
            maxChildAge() {
                this.maxChildAge = this.rawRoom['MaxChildAge'];
                return this.maxChildAge;
            },
            extraBeds() {
                this.extraBeds = this.rawRoom['ExtraBeds'];
                return this.extraBeds;
            },
            onRequestBookable() {
                this.onRequestBookable = this.rawRoom['OnRequestBookable'];
                return this.onRequestBookable;
            },
            pricesByPaxAvailable() {
                this.pricesByPaxAvailable = this.rawRoom['PricesByPaxAvailable'];
                return this.pricesByPaxAvailable;
            },
            priceCalculated() {
                this.priceCalculated = this.rawRoom['PriceCalculated'];
                return this.priceCalculated;
            },
            priceByUnit() {
                this.priceByUnit = this.rawRoom['PriceByUnit'];
                return this.priceByUnit;
            },
            soldOut() {
                this.soldOut = this.rawRoom['SoldOut'];
                return this.soldOut;
            },
            allotment() {
                this.allotment = this.rawRoom['Allotment'];
                return this.allotment;
            },
            allotmentIndex() {
                this.allotmentIndex = this.rawRoom['AllotmentIndex'];
                return this.allotmentIndex;
            },
            boardCode() {
                this.boardCode = rawGet('Board.Code[0]');
                return this.boardCode;
            },
            boardDescription() {
                this.boardDescription = rawGet('Board.value');
                return this.boardDescription;
            },
            boardKey() {
                this.boardKey = rawGet('Board.BoardKey');
                return this.boardKey;
            },
            boardOpCode() {
                this.boardOpCode = rawGet('Board.OpCode');
                return this.boardOpCode;
            },
            description() {
                this.description = this.rawRoom['Description'];
                return this.description;
            },
            extras() {
                const rawExtras = rawGet('Extras.Extra');
                this.extras = rawExtras
                    ? rawExtras.map(extra => {
                        return {
                            included: extra['Included'],
                            type: extra['Type']
                        };
                    })
                    : undefined;
                return this.extras;
            },
            personAssignments() {
                this.personAssignments = this.rawRoom.PersonAssignments.PersonAssignment.map(assignment => {
                    return this.travellers.travellerByRefId(assignment['RefId']);
                });
                return this.personAssignments;
            },
            price() {
                this.price = rawGet('Price.Amount');
                return this.price;
            },
            pricesByPax() {
                const rawPrices = rawGet('Price.PriceByPax');
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

    static fromRawRoom(rawRoom) {
        return this.fromRawElement(rawRoom, 'rawRoom');
    }
};
