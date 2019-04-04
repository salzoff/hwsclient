import HotelRequest from '../HotelRequest';
import PagingMixin from './../mixins/Paging';

export default class HotelOfferRequest extends PagingMixin(HotelRequest) {
    get path() {
        return 'hoteloffer';
    }
};
