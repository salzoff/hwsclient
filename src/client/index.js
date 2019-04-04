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
import axios from 'axios';

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

export default class HwsClient {
    constructor(config) {
        console.log(config);
        this.url = config.url;
        this.defaultAuthKey = config.defaultAuthKey;
        this.http = axios.create({
            baseURL: config.url
        });
    }

    requestFormData(params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = FormDataRequest.fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return response.data;
        });
    }

    requestGroups(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'group').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return response.data;
        });
    }

    requestProducts(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'product').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return response.data;
        });
    }

    requestOffers(requesttype, params) {
        if (!params.authKey) {
            params.authKey = this.defaultAuthKey;
        }
        const request = this.getRequestClass(requesttype, 'offer').fromParams(params);
        return this.http.post(request.path, request).then(response => {
            return response.data;
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
};
