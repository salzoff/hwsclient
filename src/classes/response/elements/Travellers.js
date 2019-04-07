import _get from 'lodash/get';
export default class Travellers extends Array {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, 'adults', {
            get() {
                return this.filter(traveller => traveller.type === 'adult');
            }
        });
        Object.defineProperty(this, 'children', {
            get() {
                return this.filter(traveller => traveller.type === 'child');
            }
        });
        this.travellerByRefId = (refId) => {
            return this.find(traveller => traveller.refId === refId);
        };
    }

    toJSON() {
        return Array.prototype.slice.call(this);
    }

    static fromRawResponse(rawResponse) {
        let travellers = new Travellers();
        const adults = _get(rawResponse, 'Travellers.Adult', []);
        const children = _get(rawResponse, 'Travellers.Child', []);

        travellers.push(...adults.map(adult => {
            return {
                type: 'adult',
                age: adult['Age'],
                refId: adult['RefId']
            };
        }));

        travellers.push(...children.map(adult => {
            return {
                type: 'child',
                age: adult['Age'],
                refId: adult['RefId']
            };
        }));

        return travellers;
    }
};
