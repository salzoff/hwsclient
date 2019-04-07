import PackageOfferResponse from './PackageOfferResponse';
import Package from '../elements/product/Package';

export default class PackageFlightAlternativesResponse extends PackageOfferResponse {
    static fromObject(obj) {
        let response = Object.assign(new PackageFlightAlternativesResponse(), obj);
        response.Hotels = response.Hotels ? response.Hotels.map(hotel => Package.fromObject(hotel)) : [];
        return response;
    }
};
