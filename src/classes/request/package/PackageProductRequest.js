import PackageRequest from '../PackageRequest';
import PagingMixin from './../mixins/Paging';

export default class PackageProductRequest extends PagingMixin(PackageRequest) {
    constructor() {
        super();
        this['ShowOfferPerTourOperator'] = undefined;
        this['ShowMetas'] = undefined;
        this['NoMerge'] = undefined;
    }

    get path() {
        return 'packageproduct';
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
