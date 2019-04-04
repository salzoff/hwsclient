import BaseRequest from './BaseRequest';
export default class KeyWordRequest extends BaseRequest {
    constructor() {
        super();
        this['ResultsPerGroup'] = undefined;
        this['RequestType'] = undefined;
        this['AuthKeyFilter'] = undefined;
        this['KeyWord'] = undefined;
    }

    get path() {
        return 'keyword';
    }

    set resultsPerGroup(resultsPerGroup) {
        this['ResultsPerGroup'] = resultsPerGroup;
    }

    get resultsPerGroup() {
        return this['ResultsPerGroup'];
    }

    set requestType(requestType) {
        this['RequestType'] = requestType;
    }

    get requestType() {
        return this['RequestType'];
    }

    set authKeyFilter(authKeyFilter) {
        this['AuthKeyFilter'] = authKeyFilter;
    }

    get authKeyFilter() {
        return this['AuthKeyFilter'];
    }

    set keyWord(keyWord) {
        this['KeyWord'] = keyWord;
    }

    get keyword() {
        return this['KeyWord'];
    }

    addKeyWord(params) {
        this.keyWord = {
            'Include': typeof params['keyWordInclude'] === 'string' ? params['keyWordInclude'].split(' ') : params['keyWordInclude'],
            'value': params['keyWord']
        };
    }

    static fromParams(params) {
        let request = new this();
        const props = request.getPropertyNameList();
        props.forEach(key => {
            if (params[key] && typeof key !== 'function' && typeof request[key] !== 'object') {
                request[key] = params[key];
            }
        });
        request.addKeyWord(params);

        return request;
    }
};
