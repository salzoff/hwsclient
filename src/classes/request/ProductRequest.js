import BaseRequest from './BaseRequest';
import TravelPeriod from './elements/TravelPeriod';
import Location from './elements/Location';
import Travellers from './elements/Travellers';

export default class ProductRequest extends BaseRequest {
    constructor() {
        super();
        this['Currency'] = undefined;
        this['TravelType'] = undefined;
        this['ProgramType'] = undefined;
        this['DistributionChannel'] = undefined;
        this['DistributionChannelExclusive'] = undefined;
        this['OnRequestBookable'] = undefined;
        this['TransferIncluded'] = undefined;
        this['PricesByPax'] = undefined;
        this['PriceType'] = undefined;
        this['DetailLevel'] = undefined;
        this['ShowAsLocalTime'] = undefined;
        this['ShowQualifiers'] = undefined;
        this['ShowSoldOut'] = undefined;
        this['ShowExtendedGeoInformation'] = undefined;
        this['DisableBitmaskFallback'] = undefined;
        this['MinPrice'] = undefined;
        this['MaxPrice'] = undefined;
        this['GroupIdList'] = undefined;
        this['TourOperatorCodeList'] = undefined;
        this['TravelPeriod'] = undefined;
        this['Location'] = undefined;
        this['Travellers'] = undefined;
    }

    set currency(currency) {
        this['Currency'] = currency;
    }

    get currency() {
        return this['Currency'];
    }

    set travelType(travelType) {
        if (typeof travelType === 'string') {
            this['TravelType'] = travelType.split(' ');
            return;
        }
        this['TravelType'] = travelType;
    }

    get travelType() {
        return this['TravelType'];
    }

    set programType(programType) {
        if (typeof programType === 'string') {
            this['ProgramType'] = programType.split(' ');
            return;
        }
        this['ProgramType'] = programType;
    }

    set distributionChannel(distributionChannel) {
        this['DistributionChannel'] = distributionChannel;
    }

    get distributionChannel() {
        return this['DistributionChannel'];
    }

    set distributionChannelExclusive(distributionChannelExclusive) {
        this['DistributionChannelExclusive'] = distributionChannelExclusive;
    }

    get distributionChannelExclusive() {
        return this['DistributionChannelExclusive'];
    }

    set onRequestBookable(onRequestBookable) {
        this['OnRequestBookable'] = onRequestBookable;
    }

    get onRequestBookable() {
        return this['OnRequestBookable'];
    }

    set transferIncluded(transferIncluded) {
        this['TransferIncluded'] = transferIncluded;
    }

    get transferIncluded() {
        return this['TransferIncluded'];
    }

    set pricesByPax(pricesByPax) {
        this['PricesByPax'] = pricesByPax;
    }

    get pricesByPax() {
        return this['PricesByPax'];
    }

    set priceType(priceType) {
        this['PriceType'] = priceType;
    }

    get priceType() {
        return this['PriceType'];
    }

    set detailLevel(detailLevel) {
        this['DetailLevel'] = detailLevel;
    }

    get detailLevel() {
        return this['DetailLevel'];
    }

    set showAsLocalTime(showAsLocalTime) {
        this['ShowAsLocalTime'] = showAsLocalTime;
    }

    get showAsLocalTime() {
        return this['ShowAsLocalTime'];
    }

    set showQualifiers(showQualifiers) {
        this['ShowQualifiers'] = showQualifiers;
    }

    get showQualifiers() {
        return this['ShowQualifiers'];
    }

    set showSoldOut(showSoldOut) {
        this['ShowSoldOut'] = showSoldOut;
    }

    get showSoldOut() {
        return this['ShowSoldOut'];
    }

    set showExtendedGeoInformation(showExtendedGeoInformation) {
        this['ShowExtendedGeoInformation'] = showExtendedGeoInformation;
    }

    get showExtendedGeoInformation() {
        return this['ShowExtendedGeoInformation'];
    }

    set disableBitmaskFallback(disableBitmaskFallback) {
        this['DisableBitmaskFallback'] = disableBitmaskFallback;
    }

    get disableBitmaskFallback() {
        return this['DisableBitmaskFallback'];
    }

    set minPrice(minPrice) {
        this['MinPrice'] = minPrice;
    }

    get minPrice() {
        return this['MinPrice'];
    }

    set maxPrice(maxPrice) {
        this['MaxPrice'] = maxPrice;
    }

    get maxPrice() {
        return this['MaxPrice'];
    }

    set tourOperatorCodeList(tourOperatorCodeList) {
        if (typeof tourOperatorCodeList === 'string') {
            this['TourOperatorCodeList'] = tourOperatorCodeList.split(' ');
            return;
        }
        this['TourOperatorCodeList'] = tourOperatorCodeList;
    }

    get tourOperatorCodeList() {
        return this['TourOperatorCodeList'];
    }

    set groupIdList(groupIdList) {
        if (groupIdList instanceof String) {
            this['GroupIdList'] = groupIdList.split(' ');
            return;
        }
        this['GroupIdList'] = groupIdList;
    }

    get groupIdList() {
        return this['GroupIdList'];
    }

    set travelPeriod(travelPeriod) {
        this['TravelPeriod'] = travelPeriod;
    }

    get travelPeriod() {
        return this['TravelPeriod'];
    }

    set location(location) {
        this['Location'] = location;
    }

    get location() {
        return this['Location'];
    }

    set travellers(travellers) {
        this['Travellers'] = travellers;
    }

    get travellers() {
        return this['Travellers'];
    }

    addTravelPeriod(params) {
        this.travelPeriod = TravelPeriod.fromParams(params);
    }

    addTravellers(params) {
        this.travellers = Travellers.fromParams(params);
    }

    addLocation(params) {
        this.location = Location.fromParams(params);
    }

    addElements(params) {
        this.addTravelPeriod(params);
        this.addTravellers(params);
        this.addLocation(params);
    }
};
