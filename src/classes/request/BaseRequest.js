export default class BaseRequest {
    constructor() {
        this['AuthKey'] = undefined;
        this['Lang'] = undefined;
        this['TreeID'] = undefined;
        Object.defineProperty(this, 'hubVersion', {
            get: () => BaseRequest.hubVersion
        });
    }

    static setHubVersion(hubVersion) {
        BaseRequest.hubVersion = hubVersion;
    }

    set authKey(authKey) {
        this['AuthKey'] = authKey;
    }

    get authKey() {
        return this['Authkey'];
    }

    set lang(lang) {
        this['Lang'] = lang;
    }

    get lang() {
        return this['Lang'];
    }

    set treeId(treeId) {
        this['TreeID'] = treeId;
    }

    get treeId() {
        return this['TreeID'];
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

    static fromParams(params) {
        let request = new this();
        const props = request.getPropertyNameList();
        props.forEach(key => {
            if (this.isValidKeyForRequest(key, params, request)) {
                request[key] = params[key];
            }
        });
        if (request.addElements) {
            request.addElements(params);
        }

        return request;
    }

    /**
     * Checks if a key is valid to add to the request object. A key is valid, if it is
     * - not undefined in params
     * - value not null in params
     * - value not an empty string in params
     * - key not a function in request
     * - value not an object in request
     * @param {String} key
     * @param {Object} params
     * @param {Object} request
     * @return {Boolean}
     */
    static isValidKeyForRequest(key, params, request) {
        return typeof params[key] !== 'undefined' &&
            params[key] !== null && params[key] !== '' &&
            typeof request[key] !== 'function' &&
            typeof request[key] !== 'object';
    }
};
