import { createProxy } from '../ResponseProxy';

export default class BaseResponse {
    constructor() {
        this['Success'] = null;
        this['Lang'] = null;
    }

    set success(success) {
        this['Success'] = success;
    }

    get success() {
        return this['Success'];
    }

    set lang(lang) {
        this['Lang'] = lang;
    }

    get lang() {
        return this['Lang'];
    }

    rawGetters() {
        return {
            success() {
                this.success = this.rawResponse['Success'];
                return this.success;
            },
            lang() {
                this.lang = this.rawResponse['Lang'];
                return this.lang;
            }
        };
    }

    getProxy() {
        return createProxy(this, {
            get(target, name) {
                if (target[name] === null && target.rawGetters()[name]) {
                    return target.rawGetters()[name].call(target);
                }
                return target[name];
            }
        });
    }

    parseRawResponse() {
        const rawGetters = this.rawGetters();
        for (const name in rawGetters) {
            rawGetters[name].call(this);
        }
    }

    getPropertyNameList() {
        let props = [];
        let proto = Object.getPrototypeOf(this);
        while (proto !== null) {
            props.push(...Object.getOwnPropertyNames(proto));
            proto = Object.getPrototypeOf(proto);
        }

        return props;
    }

    static fromRawResponse(rawResponse) {
        let response = new this();
        Object.defineProperty(response, 'rawResponse', {
            get() {
                return rawResponse;
            }
        });
        if (response.rawGetters()['travellers']) {
            response.rawGetters()['travellers'].call(response);
        }
        response.parseRawResponse();

        return response;
    }
};
