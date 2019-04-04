import PackageRequest from '../PackageRequest';
import PagingMixin from './../mixins/Paging';

export default class PackageOfferRequest extends PagingMixin(PackageRequest) {
    get path() {
        return 'packageoffer';
    }
};
