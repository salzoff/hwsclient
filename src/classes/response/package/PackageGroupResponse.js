import GroupResponse from '../GroupResponse';
import PackageGroup from '../elements/group/PackageGroup';

export default class PackageGroupResponse extends GroupResponse {
    rawGetters() {
        return Object.assign(super.rawGetters(), {
            group() {
                this.group = this.rawResponse.ProductGroups ? PackageGroup.fromRawGroup(this.rawResponse.ProductGroups) : undefined;
                return this.group;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        this.group.parseRawResponse();
    }

    static fromObject(obj) {
        let response = Object.assign(new PackageGroupResponse(), obj);
        response.Group = response.Group ? PackageGroup.fromObject(response.Group) : undefined;
        return response;
    }
};
