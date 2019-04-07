import Group from './Group';
import Hotel from '../product/Hotel';
import _get from 'lodash/get';

export default class HotelGroup extends Group {
    constructor() {
        super();
        this['Hotel'];
    }

    set hotel(hotel) {
        this['Hotel'] = hotel;
        this['Hotel'].travellers = this.travellers;
    }

    get hotel() {
        return this['Hotel'];
    }

    get product() {
        if (this.hotel === null) {
            this.rawGetters()['hotel'].call(this);
        }
        return this.hotel;
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            groups() {
                const rawGroups = _get(this.rawGroup, 'ProductGroup', []);
                if (rawGroups.length === 0) {
                    this.groups = undefined;
                    return this.groups;
                }
                const me = this;
                this.groups = rawGroups.map(rawGroup => {
                    let group = this.constructor.fromRawGroup(rawGroup);
                    Object.defineProperty(group, 'parent', {
                        get() {
                            return me;
                        }
                    });
                    return group;
                });
                return this.groups;
            },
            hotel() {
                this.hotel = Hotel.fromRawHotel(this.rawGroup.TopHotel);
                return this.hotel;
            }
        });
    }
};
