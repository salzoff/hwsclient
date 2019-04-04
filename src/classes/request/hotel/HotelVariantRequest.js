import HotelRequest from '../HotelRequest';

export default class HotelVariantRequest extends HotelRequest {
    constructor() {
        super();
        this['Variant'] = undefined;
    }

    get path() {
        return 'hotelvariant';
    }

    set variant(variant) {
        if (variant instanceof Array) {
            this['Variant'] = variant.join(' ');
            return;
        }
        this['Variant'] = variant;
    }

    get variant() {
        return this['Variant'];
    }
};
