import {
    FormDataRequest,
    PackageGroupRequest,
    HotelGroupRequest,
    PackageProductRequest,
    HotelProductRequest,
    PackageOfferRequest,
    HotelOfferRequest,
    PackageVariantRequest,
    HotelVariantRequest,
    PackageFlightAlternativeRequest
} from '../classes/request';
import {
    FormDataResponse,
    PackageGroupResponse,
    HotelGroupResponse,
    PackageProductResponse,
    HotelProductResponse,
    PackageOfferResponse,
    HotelOfferResponse
} from '../classes/response';

const requestClasses = {
    package: {
        group: PackageGroupRequest,
        product: PackageProductRequest,
        offer: PackageOfferRequest,
        variant: PackageVariantRequest,
        flightalternatives: PackageFlightAlternativeRequest
    },
    hotel: {
        group: HotelGroupRequest,
        product: HotelProductRequest,
        offer: HotelOfferRequest,
        variant: HotelVariantRequest
    }
};

const responseClasses = {
    package: {
        group: PackageGroupResponse,
        product: PackageProductResponse,
        offer: PackageOfferResponse,
        variant: PackageOfferResponse,
        flightalternatives: PackageOfferResponse
    },
    hotel: {
        group: HotelGroupResponse,
        product: HotelProductResponse,
        offer: HotelOfferResponse,
        variant: HotelOfferResponse
    }
};

export default class HwsClient {
    constructor(config) {
        this.url = config.url;
        this.defaultAuthKey = config.defaultAuthKey;
        this.http = config.http;
    }

    requestFormData(params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = FormDataRequest.fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return FormDataResponse.fromRawResponse(response.data);
        });
    }

    requestGroups(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'group').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return this.getResponseClass(requesttype, 'group').fromRawResponse(response.data);
        });
    }

    requestProducts(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'product').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return this.getResponseClass(requesttype, 'product').fromRawResponse(response.data);
        });
    }

    requestOffers(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'offer').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return this.getResponseClass(requesttype, 'offer').fromRawResponse(response.data);
        });
    }

    requestVariants(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'variant').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return response.data;
        });
    }

    getRequestClass(requesttype, request) {
        return requestClasses[requesttype][request];
    }

    getResponseClass(requesttype, request) {
        return responseClasses[requesttype][request];
    }
};
