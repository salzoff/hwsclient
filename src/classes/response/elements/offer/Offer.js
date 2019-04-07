import BaseElement from '../BaseElement';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';

export default class Offer extends BaseElement {
    constructor() {
        super();
        this['Price'];
        this['PricesByPax'];
        this['DiscountAmount'];
        this['OnRequestBookable'];
        this['Season'];
        this['TravelType'];
        this['ProgramType'];
        this['Allotment'];
        this['Brand'];
        this['SoldOut'];
        this['TourOperatorCode'];
        this['TourOperatorName'];
    }

    set price(price) {
        this['Price'] = price;
    }

    get price() {
        return this['Price'];
    }

    set pricesByPax(pricesByPax) {
        this['PricesByPax'] = pricesByPax;
    }

    get pricesByPax() {
        return this['PricesByPax'];
    }

    set discountAmount(discountAmount) {
        this['DiscountAmount'] = discountAmount;
    }

    get discountAmount() {
        return this['DiscountAmount'];
    }

    set onRequestBookable(onRequestBookable) {
        this['OnRequestBookable'] = onRequestBookable;
    }

    get onRequestBookable() {
        return this['OnRequestBookable'];
    }

    set season(season) {
        this['Season'] = season;
    }

    get season() {
        return this['Season'];
    }

    set travelType(travelType) {
        this['TravelType'] = travelType;
    }

    get travelType() {
        return this['TravelType'];
    }

    set programType(programType) {
        this['ProgramType'] = programType;
    }

    get programType() {
        return this['ProgramType'];
    }

    set allotment(allotment) {
        this['Allotment'] = allotment;
    }

    get allotment() {
        return this['Allotment'];
    }

    set brand(brand) {
        this['Brand'] = brand;
    }

    get brand() {
        return this['Brand'];
    }

    set soldOut(soldOut) {
        this['SoldOut'] = soldOut;
    }

    get soldOut() {
        return this['SoldOut'];
    }

    set tourOperatorName(tourOperatorName) {
        this['TourOperatorName'] = tourOperatorName;
    }

    get tourOperatorName() {
        return this['TourOperatorName'];
    }

    set tourOperatorCode(tourOperatorCode) {
        this['TourOperatorCode'] = tourOperatorCode;
    }

    get tourOperatorCode() {
        return this['TourOperatorCode'];
    }

    priceByRefId(refId) {
        return this.pricesByPax
            ? this.pricesByPax.filter(price => price.refId === refId)
            : false;
    }

    discountPrice() {
        return this.discountAmount ? this.price + this.discountAmount : undefined;
    }

    rawGetters() {
        const rawGet = _get.bind(null, this.rawOffer);
        return {
            price() {
                this.price = parseFloat(this.rawOffer.Price['Amount']);
                return this.price;
            },
            pricesByPax() {
                const rawPrices = rawGet('Price.PriceByPax', []);
                this.pricesByPax = rawPrices.length > 0
                    ? rawPrices.map(price => {
                        return {
                            refId: price['RefId'],
                            fullPricePayer: price['FullPricePayer'],
                            amount: parseFloat(price['Amount'])
                        };
                    })
                    : false;

                return this.pricesByPax;
            },
            discountAmount() {
                this.discountAmount = this.rawOffer.Price['DiscountAmount'] ? parseFloat(this.rawOffer.Price['DiscountAmount']) : undefined;
            },
            onRequestBookable() {
                this.onRequestBookable = this.rawOffer['OnRequestBookable'];
                return this.onRequestBookable;
            },
            season() {
                this.season = this.rawOffer['Season'];
                return this.season;
            },
            travelType() {
                this.travelType = this.rawOffer['TravelType'];
                return this.travelType;
            },
            programType() {
                this.programType = this.rawOffer['ProgramType'];
                return this.programType;
            },
            allotment() {
                this.allotment = this.rawOffer['Allotment'];
                return this.allotment;
            },
            brand() {
                this.brand = this.rawOffer['Brand'];
                return this.brand;
            },
            soldOut() {
                this.soldOut = this.rawOffer['SoldOut'];
                return this.soldOut;
            },
            tourOperatorName() {
                this.tourOperatorName = rawGet('TourOperator.value');
                return this.tourOperatorName;
            },
            tourOperatorCode() {
                this.tourOperatorCode = rawGet('TourOperator.Code');
                return this.tourOperatorCode;
            }
        };
    }

    static fromRawOffer(rawOffer) {
        return this.fromRawElement(rawOffer, 'rawOffer');
    }
};
