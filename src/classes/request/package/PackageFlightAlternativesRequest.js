import PackageRequest from '../PackageRequest';
import PagingMixin from './../mixins/Paging';

export default class PackageFlightAlternativesRequest extends PagingMixin(PackageRequest) {
    constructor() {
        super();
        this['NoMerge'] = undefined;
    }

    get path() {
        return 'packageflightalternatives';
    }

    set noMerge(noMerge) {
        this['NoMerge'] = noMerge;
    }

    get noMerge() {
        return this['NoMerge'];
    }
};
