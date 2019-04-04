import HotelRequest from '../HotelRequest';
import PagingMixin from './../mixins/Paging';

export default class HotelProductRequest extends PagingMixin(HotelRequest) {
    constructor() {
        super();
        this['ShowOfferPerTourOperator'] = undefined;
        this['ShowMetas'] = undefined;
        this['NoMerge'] = undefined;
    }

    get path() {
        return 'hotelproduct';
    }

    set showOfferPerTourOperator(showOfferPerTourOperator) {
        this['ShowOfferPerTourOperator'] = showOfferPerTourOperator;
    }

    get showOfferPerTourOperator() {
        return this['ShowOfferPerTourOperator'];
    }

    set showMetas(showMetas) {
        this['ShowMetas'] = showMetas;
    }

    get showMetas() {
        return this['ShowMetas'];
    }

    set noMerge(noMerge) {
        this['NoMerge'] = noMerge;
    }

    get noMerge() {
        return this['NoMerge'];
    }
};
