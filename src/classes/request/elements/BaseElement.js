export default class BaseElement {
    static fromParams(params) {
        let element = new this();
        const props = Object.getOwnPropertyNames(this.prototype);
        props.forEach(key => {
            if (params[key] && typeof key !== 'function') {
                element[key] = params[key];
            }
        });
        return element;
    }
};
