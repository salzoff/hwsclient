import ProductResponse from './ProductResponse';
import _get from 'lodash/get';
export default class GroupResponse extends ProductResponse {
    constructor() {
        super();
        this['Group'];
    }

    set group(group) {
        this['Group'] = group;
        if (group) {
            this['Group'].travellers = this.travellers;
        }
    }

    get group() {
        return this['Group'];
    }

    get groups() {
        if (this.group === null) {
            this.rawGetters()['group'].call(this);
        }
        return _get(this, 'group.groups', []);
    }
};
