import BaseResponse from './BaseResponse';
import KeyWordGroup from './elements/KeyWordGroup';
import _get from 'lodash/get';
export default class KeyWordResponse extends BaseResponse {
    constructor() {
        super();
        this['Source'];
        this['KeyWordGroups'];
    }

    set source(source) {
        this['Source'] = source;
    }

    get source() {
        return this['Source'];
    }

    set keyWordGroups(keyWordGroups) {
        this['KeyWordGroups'] = keyWordGroups;
    }

    get keyWordGroups() {
        return this['KeyWordGroups'];
    }

    parseRawResponse() {
        super.parseRawResponse();
        this.keyWordGroups.forEach(keyWordGroup => keyWordGroup.parseRawResponse());
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            source() {
                this.source = this.rawResponse['Source'];
            },
            keyWordGroups() {
                const rawKeyWordGroups = _get(this.rawResponse, 'KeyWordGroups.KeyWordGroup', []);
                this.keyWordGroups = rawKeyWordGroups.map(keyWordGroup => KeyWordGroup.fromRawGroup(keyWordGroup));
                return this.keyWordGroups;
            }
        });
    }

    static fromObject(obj) {
        let response = Object.assign(new KeyWordResponse(), obj);
        response.KeyWordGroups = response.KeyWordGroups ? response.KeyWordGroups.map(keyWordGroup => KeyWordGroup.fromObject(keyWordGroup)) : [];
        return response;
    }
};
