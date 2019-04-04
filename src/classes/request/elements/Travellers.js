import BaseElement from './BaseElement';

export default class Travellers extends BaseElement {
    constructor() {
        super();
        this['Adult'] = undefined;
        this['Child'] = undefined;
    }

    set adult(adult) {
        this['Adult'] = adult.map((entry, index) => {
            return {
                'Age': entry,
                'RefId': (index + 1)
            };
        });
    }

    get adult() {
        return this['Adult'];
    }

    set child(child) {
        this['Child'] = child.map((entry, index) => {
            return {
                'Age': entry,
                'RefId': (this.adult.length + index + 1)
            };
        });
    }

    get child() {
        return this['Child'];
    }
};
