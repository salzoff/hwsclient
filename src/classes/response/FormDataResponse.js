import BaseResponse from './BaseResponse';
import Group from './elements/group/Group';
import DepartureGroup from './elements/DepartureGroup';
import RatingConfig from './elements/RatingConfig';
import moment from 'moment';
import _get from 'lodash/get';
import _hasIn from 'lodash/hasIn';

export default class FormDataResponse extends BaseResponse {
    constructor() {
        super();
        this['ArrivalAirports'];
        this['DepartureAirports'];
        this['DepartureGroup'];
        this['Group'];
        this['TourOperators'];
        this['Seasons'];
        this['DataPools'];
        this['CountryCodes'];
        this['Regions'];
        this['Locations'];
        this['ProductCodes'];
        this['BookingCodes'];
        this['RoomCodes'];
        this['BoardCodes'];
        this['LOS'];
        this['RoomKeys'];
        this['BoardKeys'];
        this['RoomAttributes'];
        this['RoomViews'];
        this['HotelAttributes'];
        this['AccommodationTypes'];
        this['Extras'];
        this['GlobalTypeList'];
        this['Chains'];
        this['HotelIdLists'];
        this['Currencies'];
        this['ArrivalDateMin'];
        this['ArrivalDateMax'];
        this['DepartureDateMin'];
        this['DepartureDateMax'];
        this['PrimaryIdType'];
        this['RatingConfigs'];
        this['TravelTypes'];
    }

    set departureAirports(departureAirpors) {
        this['DepartureAirports'] = departureAirpors;
    }

    get departureAirports() {
        return this['DepartureAirports'];
    }

    set arrivalAirports(arrivalAirports) {
        this['ArrivalAirports'] = arrivalAirports;
    }

    get arrivalAirports() {
        return this['ArrivalAirports'];
    }

    set departureGroup(departureGroup) {
        this['DepartureGroup'] = departureGroup;
    }

    get departureGroup() {
        return this['DepartureGroup'];
    }

    get departureGroups() {
        if (!this.departureGroup) {
            this.rawGetters()['departureGroup'].call(this);
        }
        return this.departureGroup.departureGroups;
    }

    set group(group) {
        this['Group'] = group;
    }

    get group() {
        return this['Group'];
    }

    get groups() {
        if (!this.group) {
            this.rawGetters()['group'].call(this);
        }
        return this.group.groups;
    }

    set tourOperators(tourOperators) {
        this['TourOperators'] = tourOperators;
    }

    get tourOperators() {
        return this['TourOperators'];
    }

    set seasons(seasons) {
        this['Seasons'] = seasons;
    }

    get seasons() {
        return this['Seasons'];
    }

    set dataPools(dataPools) {
        this['DataPools'] = dataPools;
    }

    get dataPools() {
        return this['DataPools'];
    }

    set countryCodes(countryCodes) {
        this['CountryCodes'] = countryCodes;
    }

    get countryCodes() {
        return this['CountryCodes'];
    }

    set regions(regions) {
        this['Regions'] = regions;
    }

    get regions() {
        return this['Regions'];
    }

    set locations(locations) {
        this['Locations'] = locations;
    }

    get locations() {
        return this['Locations'];
    }

    set productCodes(productCodes) {
        this['ProductCodes'] = productCodes;
    }

    get productCodes() {
        return this['ProductCodes'];
    }

    set bookingCodes(bookingCodes) {
        this['BookingCodes'] = bookingCodes;
    }

    get bookingCodes() {
        return this['BookingCodes'];
    }

    set roomCodes(roomCodes) {
        this['RoomCodes'] = roomCodes;
    }

    get roomCodes() {
        return this['RoomCodes'];
    }

    set boardCodes(boardCodes) {
        this['BoardCodes'] = boardCodes;
    }

    get boardCodes() {
        return this['BoardCodes'];
    }

    set los(LOS) {
        this['LOS'] = LOS;
    }

    get los() {
        return this['LOS'];
    }

    set roomKeys(roomKeys) {
        this['RoomKeys'] = roomKeys;
    }

    get roomKeys() {
        return this['RoomKeys'];
    }

    set boardKeys(boardKeys) {
        this['BoardKeys'] = boardKeys;
    }

    get boardKeys() {
        return this['BoardKeys'];
    }

    set roomAttributes(roomAttributes) {
        this['RoomAttributes'] = roomAttributes;
    }

    get roomAttributes() {
        return this['RoomAttributes'];
    }

    set roomViews(roomViews) {
        this['RoomViews'] = roomViews;
    }

    get roomViews() {
        return this['RoomViews'];
    }

    set hotelAttributes(hotelAttributes) {
        this['HotelAttributes'] = hotelAttributes;
    }

    get hotelAttributes() {
        return this['HotelAttributes'];
    }

    set accommodationTypes(accommodationTypes) {
        this['AccommodationTypes'] = accommodationTypes;
    }

    get accommodationTypes() {
        return this['AccommodationTypes'];
    }

    set extras(extras) {
        this['Extras'] = extras;
    }

    get extras() {
        return this['Extras'];
    }

    set globalTypeList(globalTypeList) {
        this['GlobalTypeList'] = globalTypeList;
    }

    get globalTypeList() {
        return this['GlobalTypeList'];
    }

    set chains(chains) {
        this['Chains'] = chains;
    }

    get chains() {
        return this['Chains'];
    }

    set hotelIdLists(hotelIdLists) {
        this['HotelIdLists'] = hotelIdLists;
    }

    get hotelIdLists() {
        return this['HotelIdLists'];
    }

    set currencies(currencies) {
        this['Currencies'] = currencies;
    }

    get currencies() {
        return this['Currencies'];
    }

    set arrivalDateMin(arrivalDateMin) {
        this['ArrivalDateMin'] = arrivalDateMin;
    }

    get arrivalDateMin() {
        return this['ArrivalDateMin'] ? moment(this['ArrivalDateMin']) : this['ArrivalDateMin'];
    }

    set arrivalDateMax(arrivalDateMax) {
        this['ArrivalDateMax'] = arrivalDateMax;
    }

    get arrivalDateMax() {
        return this['ArrivalDateMax'] ? moment(this['ArrivalDateMax']) : this['ArrivalDateMax'];
    }

    set departureDateMin(departureDateMin) {
        this['DepartureDateMin'] = departureDateMin;
    }

    get departureDateMin() {
        return this['DepartureDateMin'] ? moment(this['DepartureDateMin']) : this['DepartureDateMin'];
    }

    set departureDateMax(departureDateMax) {
        this['DepartureDateMax'] = departureDateMax;
    }

    get departureDateMax() {
        return this['DepartureDateMax'] ? moment(this['DepartureDateMax']) : this['DepartureDateMax'];
    }

    set primaryIdType(primaryIdType) {
        this['PrimaryIdType'] = primaryIdType;
    }

    get primaryIdType() {
        return this['PrimaryIdType'];
    }

    set ratingConfigs(ratingConfigs) {
        this['RatingConfigs'] = ratingConfigs;
    }

    get ratingConfigs() {
        return this['RatingConfigs'];
    }

    get ratingConfig() {
        if (this.ratingConfigs === null) {
            this.rawGetters().ratingConfigs.call(this);
        }
        return this.ratingConfigs instanceof Array && this.ratingConfigs.length > 0 ? this.ratingConfigs[0] : undefined;
    }

    get ratingProvider() {
        const ratingConfig = this.ratingConfig;
        return ratingConfig && ratingConfig.provider ? ratingConfig.provider : undefined;
    }

    set travelTypes(travelTypes) {
        this['TravelTypes'] = travelTypes;
    }

    get travelTypes() {
        return this['TravelTypes'];
    }

    rawGetters() {
        const rawGet = _get.bind(null, this.rawResponse);
        return Object.assign(super.rawGetters(), {
            departureAirports() {
                this.departureAirports = this.rawResponse.DepartureAirports;
                return this.departureAirports;
            },
            arrivalAirports() {
                this.arrivalAirports = this.rawResponse.ArrivalAirports;
                return this.arrivalAirports;
            },
            group() {
                this.group = this.rawResponse.Groups
                    ? Group.fromRawGroup(this.rawResponse.Groups)
                    : undefined;
                return this.group;
            },
            departureGroup() {
                this.departureGroup = this.rawResponse.DepartureGroups
                    ? DepartureGroup.fromRawGroup(this.rawResponse.DepartureGroups)
                    : undefined;
                return this.departureGroup;
            },
            tourOperators() {
                const rawTourOperators = rawGet('TourOperators.TourOperator');
                this.tourOperators = rawTourOperators
                    ? rawTourOperators.map(rawTourOperator => {
                        return {
                            name: rawTourOperator['value'],
                            code: rawTourOperator['Code'],
                            inventory: rawTourOperator['Inventory']
                        };
                    })
                    : undefined;
                return this.tourOperators;
            },
            seasons() {
                this.seasons = this.rawResponse.Seasons;
                return this.seasons;
            },
            dataPools() {
                this.dataPools = this.rawResponse.DataPools;
                return this.dataPools;
            },
            countryCodes() {
                this.countryCodes = this.rawResponse.CountryCodes;
                return this.countryCodes;
            },
            regions() {
                this.regions = this.rawResponse.Regions;
                return this.regions;
            },
            locations() {
                this.locations = this.rawResponse.Locations;
                return this.locations;
            },
            productCodes() {
                this.productCodes = this.rawResponse.ProductCodes;
                return this.productCodes;
            },
            bookingCodes() {
                this.bookingCodes = this.rawResponse.BookingCodes;
                return this.bookingCodes;
            },
            roomCodes() {
                this.roomCodes = this.rawResponse.GTRoomCodes;
                return this.roomCodes;
            },
            boardCodes() {
                this.boardCodes = this.rawResponse.GTBoardCodes;
                return this.boardCodes;
            },
            los() {
                this.los = this.rawResponse.LOS;
                return this.los;
            },
            roomKeys() {
                this.roomKeys = this.rawResponse.RoomKeys;
                return this.roomKeys;
            },
            boardKeys() {
                this.boardKeys = this.rawResponse.BoardKeys;
                return this.boardKeys;
            },
            roomAttributes() {
                this.roomAttributes = this.GTRoomAttributes;
                return this.roomAttributes;
            },
            roomViews() {
                this.roomViews = this.rawResponse.GTRoomViews;
                return this.roomViews;
            },
            hotelAttributes() {
                this.hotelAttributes = this.rawResponse.GTHotelAttributes;
                return this.hotelAttributes;
            },
            accommodationTypes() {
                this.accommodationTypes = this.rawResponse.GTAccommodationTypes;
                return this.accommodationTypes;
            },
            extras() {
                this.extras = rawGet('GTExtras.value');
                return this.extras;
            },
            globalTypeList() {
                this.globalTypeList = rawGet('GTList.value');
                return this.globalTypeList;
            },
            chains() {
                this.chains = rawGet('GTChains.value');
                return this.chains;
            },
            hotelIdLists() {
                const rawIds = rawGet('HotelIdLists.HotelIdList', []);
                this.hotelIdLists = rawIds
                    ? rawIds.reduce((results, idList) => {
                        results[idList['TourOperatorCode']] = idList['HotelIdList'];
                        return results;
                    }, {})
                    : undefined;
                return this.hotelIdLists;
            },
            currencies() {
                this.currencies = this.rawResponse.Currencies;
            },
            arrivalDateMin() {
                this.arrivalDateMin = rawGet('DateRange.ArrivalDateMin');
                return this.arrivalDateMin;
            },
            arrivalDateMax() {
                this.arrivalDateMax = rawGet('DateRange.ArrivalDateMax');
                return this.arrivalDateMax;
            },
            departureDateMin() {
                this.departureDateMin = rawGet('DateRange.DepartureDateMin');
                return this.departureDateMin;
            },
            departureDateMax() {
                this.departureDateMax = rawGet('DateRange.DepartureDateMax');
                return this.departureDateMax;
            },
            primaryIdType() {
                this.primaryIdType = rawGet('HotelIdLists.PrimaryIdType', 'GIATA');
                return this.primaryIdType;
            },
            ratingConfigs() {
                this.ratingConfigs = _hasIn(this.rawResponse, 'Ratings.RatingConfig')
                    ? this.rawResponse.Ratings.RatingConfig.map(ratingConfig => RatingConfig.fromRawConfig(ratingConfig))
                    : undefined;
                return this.ratingConfigs;
            },
            travelTypes() {
                this.travelTypes = this.rawResponse.TravelTypes;
                return this.travelTypes;
            }
        });
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.group) {
            this.group.parseRawResponse();
        }
        if (this.departureGroup) {
            this.departureGroup.parseRawResponse();
        }
        if (this.ratingConfigs) {
            this.ratingConfigs.forEach(ratingConfig => ratingConfig.parseRawResponse());
        }
    }

    static fromObject(obj) {
        let response = Object.assign(new FormDataResponse(), obj);
        response.Group = response.Group ? Group.fromObject(response.Group) : undefined;
        response.DepartureGroup = response.DepartureGroup ? DepartureGroup.fromObject(response.DepartureGroup) : undefined;
        response.RatingConfigs = response.Ratings && response.Ratings.RatingConfig
            ? response.Ratings.RatingConfig.map(ratingConfig => RatingConfig.fromObject(ratingConfig))
            : undefined;
        return response;
    }
};
