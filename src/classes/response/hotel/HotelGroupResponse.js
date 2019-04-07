import GroupResponse from '../GroupResponse';
import HotelGroup from '../elements/group/HotelGroup';

export default class HotelGroupResponse extends GroupResponse {
    rawGetters() {
        return Object.assign(super.rawGetters(), {
            group() {
                this.group = this.rawResponse.ProductGroups ? HotelGroup.fromRawGroup(this.rawResponse.ProductGroups) : undefined;
                return this.group;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        this.group.parseRawResponse();
    }

    static fromObject(obj) {
        let response = Object.assign(new HotelGroupResponse(), obj);
        response.Group = response.Group ? HotelGroup.fromObject(response.Group) : undefined;
        return response;
    }
};
