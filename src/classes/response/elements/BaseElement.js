export default class BaseElement {
    parseRawResponse() {
        const rawGetters = this.rawGetters();
        for (const name in rawGetters) {
            rawGetters[name].call(this);
        }
    }

    static fromObject(obj) {
        return Object.assign(new this(), obj);
    }

    static fromRawElement(rawElement, propertyName) {
        let element = new this();
        Object.defineProperty(element, propertyName, {
            get() {
                return rawElement;
            }
        });
        // element.parseRawResponse();

        return element;
    }
};
