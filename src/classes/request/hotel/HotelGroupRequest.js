import HotelRequest from '../HotelRequest';
import PagingMixin from '../mixins/Paging';

export default class HotelGroupRequest extends PagingMixin(HotelRequest) {
    constructor() {
        super();
        this['ShowProductCount'] = undefined;
        this['ShowOfferPerTourOperator'] = undefined;
        this['ShowMetas'] = undefined;
        this['DirectChildren'] = undefined;
        this['LimitDepth'] = undefined;
    }

    get path() {
        return 'hotelgroup';
    }

    set showProductCount(showProductCount) {
        this['ShowProductCount'] = showProductCount;
    }

    get showProductCount() {
        return this['ShowProductCount'];
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

    set directChildren(directChildren) {
        this['DirectChildren'] = directChildren;
    }

    get directChildren() {
        return this['DirectChildren'];
    }

    set limitDepth(limitDepth) {
        this['LimitDepth'] = limitDepth;
    }

    get limitDepth() {
        return this['LimitDepth'];
    }
};
