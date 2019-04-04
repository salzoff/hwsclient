import BaseElement from './BaseElement';
import Travellers from './Travellers';

export default class Room extends BaseElement {
    constructor() {
        super();
        this['BookingCodeList'] = undefined;
        this['BoardCodeList'] = undefined;
        this['CodeList'] = undefined;
        this['AttributeCodeList'] = undefined;
        this['ViewCodeList'] = undefined;
        this['PersonAssignments'] = {};
    }

    set roomBookingCodeList(roomBookingCodeList) {
        if (typeof roomBookingCodeList === 'string') {
            this['BookingCodeList'] = roomBookingCodeList.split(' ');
            return;
        }
        this['BookingCodeList'] = roomBookingCodeList;
    }

    get roomBookingCodeList() {
        return this['BookingCodeList'];
    }

    set boardCodeList(boardCodeList) {
        if (typeof boardCodeList === 'string') {
            this['BoardCodeList'] = boardCodeList.split(' ');
            return;
        }
        this['BoardCodeList'] = boardCodeList;
    }

    get boardCodeList() {
        return this['BoardCodeList'];
    }

    set roomCodeList(roomCodeList) {
        this['CodeList'] = this['CodeList'] ? this['CodeList'] : {};
        if (typeof roomCodeList === 'string') {
            this['CodeList']['value'] = roomCodeList.split(' ');
            return;
        }
        if (roomCodeList instanceof Array) {
            this['CodeList']['value'] = roomCodeList;
            return;
        }
        this['CodeList'] = roomCodeList;
    }

    get roomCodeList() {
        return this['CodeList'] && this['CodeList']['value'] ? this['CodeList']['value'] : this['CodeList'];
    }

    set roomAttributeCodeList(roomAttributeCodeList) {
        this['AttributeCodeList'] = this['AttributeCodeList'] ? this['AttributeCodeList'] : {};
        if (typeof roomAttributeCodeList === 'string') {
            this['AttributeCodeList']['value'] = roomAttributeCodeList.split(' ');
            return;
        }
        if (roomAttributeCodeList instanceof Array) {
            this['AttributeCodeList']['value'] = roomAttributeCodeList;
            return;
        }
        this['AttributeCodeList'] = roomAttributeCodeList;
    }

    get roomAttributeCodeList() {
        return this['AttributeCodeList'] && this['AttributeCodeList']['value'] ? this['AttributeCodeList']['value'] : this['AttributeCodeList'];
    }

    set viewCodeList(viewCodeList) {
        this['ViewCodeList'] = this['ViewCodeList'] ? this['ViewCodeList'] : {};
        if (typeof viewCodeList === 'string') {
            this['ViewCodeList']['value'] = viewCodeList.split(' ');
            return;
        }
        if (viewCodeList instanceof Array) {
            this['ViewCodeList']['value'] = viewCodeList;
            return;
        }
        this['ViewCodeList'] = viewCodeList;
    }

    get viewCodeList() {
        return this['ViewCodeList'] && this['ViewCodeList']['value'] ? this['ViewCodeList']['value'] : this['ViewCodeList'];
    }

    set personAssignments(personAssignments) {
        this['PersonAssignments'] = personAssignments;
    }

    get personAssignments() {
        return this['PersonAssignments'];
    }

    addPersonAssignments(values) {
        if (values instanceof Travellers) {
            this['PersonAssignments']['PersonAssignment'] = [
                ...(values.adult.map(entry => ({ 'RefId': entry['RefId'] }))),
                ...((values.child instanceof Array)
                    ? values.child.map(entry => ({ 'RefId': entry['RefId'] }))
                    : [])
            ];
            return;
        }
        // Parameters
        this['PersonAssignments']['PersonAssignment'] = [
            ...(values.adult.map((entry, index) => ({ 'RefId': (index + 1) }))),
            ...((values.child instanceof Array)
                ? values.child.map((entry, index) => ({ 'RefId': (values.adult.length + 1 + index) }))
                : [])
        ];
    }

    static fromParams(params) {
        let element = new Room();
        const props = Object.getOwnPropertyNames(Room.prototype);
        props.forEach(key => {
            if (params[key] && typeof key !== 'function') {
                element[key] = params[key];
            }
        });
        element.addPersonAssignments(params);

        return element;
    }
};
