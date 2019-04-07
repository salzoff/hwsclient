import BaseElement from '../BaseElement';
import HotelOffer from '../offer/HotelOffer';
import { getRating, getAvailableRatingNames } from '../../../rating/ratingMapper';
import _get from 'lodash/get';

export default class Hotel extends BaseElement {
    constructor() {
        super();
        this['Name'];
        this['Category'];
        this['HotelAttributeCodeList'];
        this['Chain'];
        this['TypeCodeList'];
        this['HotelCodes'];
        this['HotelNames'];
        this['RecommendationId'];
        this['Recommendations'];
        this['RatingsId'];
        this['RatingsProvider'];
        this['Ratings'];
        this['Qualifiers'];
        this['CountryCode'];
        this['CountryName'];
        this['RegionCode'];
        this['RegionName'];
        this['CityCode'];
        this['CityName'];
        this['AvgAirTemp'];
        this['AvgWaterTemp'];
        this['TemperatureUnit'];
        this['Street'];
        this['PostalCode'];
        this['Latitude'];
        this['Longitude'];
        this['GiataId'];
        this['OpicId'];
        this['IffId'];
        this['DrvId'];
        this['HotelId'];
        this['Offers'];
    }

    set name(name) {
        this['Name'] = name;
    }

    get name() {
        return this['Name'];
    }

    set category(category) {
        this['Category'] = category;
    }

    get category() {
        return this['Category'];
    }

    set hotelAttributeCodeList(hotelAttributeCodeList) {
        this['HotelAttributeCodeList'] = hotelAttributeCodeList;
    }

    get hotelAttributeCodeList() {
        return this['HotelAttributeCodeList'];
    }

    set chain(chain) {
        this['Chain'] = chain;
    }

    get chain() {
        return this['Chain'];
    }

    set typeCodeList(typeCodeList) {
        this['TypeCodeList'] = typeCodeList;
    }

    get typeCodeList() {
        return this['TypeCodeList'];
    }

    set hotelCodes(hotelCodes) {
        this['HotelCodes'] = hotelCodes;
    }

    get hotelCodes() {
        return this['HotelCodes'];
    }

    set hotelNames(hotelNames) {
        this['HotelNames'] = hotelNames;
    }

    get hotelNames() {
        return this['HotelNames'];
    }

    set recommendationId(recommendationId) {
        this['RecommendationId'] = recommendationId;
    }

    get recommendationId() {
        return this['RecommendationId'];
    }

    set recommendations(recommendations) {
        this['Recommendations'] = recommendations;
    }

    get recommendations() {
        return this['Recommendations'];
    }

    set ratingsId(ratingsId) {
        this['RatingsId'] = ratingsId;
    }

    get ratingsId() {
        return this['RatingsId'];
    }

    set ratingsProvider(ratingsProvider) {
        this['RatingsProvider'] = ratingsProvider;
    }

    get ratingsProvider() {
        return this['RatingsProvider'];
    }

    set ratings(ratings) {
        this['Ratings'] = ratings;
    }

    get ratings() {
        return this['Ratings'];
    }

    set qualifiers(qualifiers) {
        this['Qualifiers'] = qualifiers;
    }

    get qualifiers() {
        return this['Qualifiers'];
    }

    set countryCode(countryCode) {
        this['CountryCode'] = countryCode;
    }

    get countryCode() {
        return this['CountryCode'];
    }

    set countryName(countryName) {
        this['CountryName'] = countryName;
    }

    get countryName() {
        return this['CountryName'];
    }

    set regionCode(regionCode) {
        this['RegionCode'] = regionCode;
    }

    get regionCode() {
        return this['RegionCode'];
    }

    set regionName(regionName) {
        this['RegionName'] = regionName;
    }

    get regionName() {
        return this['RegionName'];
    }

    set cityCode(cityCode) {
        this['CityCode'] = cityCode;
    }

    get cityCode() {
        return this['CityCode'];
    }

    set cityName(cityName) {
        this['CityName'] = cityName;
    }

    get cityName() {
        return this['CityName'];
    }

    set avgAirTemp(avgAirTemp) {
        this['AvgAirTemp'] = avgAirTemp;
    }

    get avgAirTemp() {
        return this['AvgAirTemp'];
    }

    set avgWaterTemp(avgWaterTemp) {
        this['AvgWaterTemp'] = avgWaterTemp;
    }

    get avgWaterTemp() {
        return this['AvgWaterTemp'];
    }

    set temperatureUnit(temperatureUnit) {
        this['TemperatureUnit'] = temperatureUnit;
    }

    get temperatureUnit() {
        return this['TemperatureUnit'];
    }

    set street(street) {
        this['Street'] = street;
    }

    get street() {
        return this['Street'];
    }

    set postalCode(postalCode) {
        this['PostalCode'] = postalCode;
    }

    get postalCode() {
        return this['PostalCode'];
    }

    set latitude(latitude) {
        this['Latitude'] = latitude;
    }

    get latitude() {
        return this['Latitude'];
    }

    set longitude(longitude) {
        this['Longitude'] = longitude;
    }

    get longitude() {
        return this['Longitude'];
    }

    set giataId(giataId) {
        this['GiataId'] = giataId;
    }

    get giataId() {
        return this['GiataId'];
    }

    set opicId(opicId) {
        this['OpicId'] = opicId;
    }

    get opicId() {
        return this['OpicId'];
    }

    set iffId(iffId) {
        this['IffId'] = iffId;
    }

    get iffId() {
        return this['IffId'];
    }

    set drvId(drvId) {
        this['DrvId'] = drvId;
    }

    get drvId() {
        return this['DrvId'];
    }

    set hotelId(hotelId) {
        this['HotelId'] = hotelId;
    }

    get hotelId() {
        return this['HotelId'];
    }

    set offers(offers) {
        this['Offers'] = offers;
        this['Offers'].forEach(offer => {
            offer.travellers = this.travellers;
        });
    }

    get offers() {
        return this['Offers'];
    }

    get offer() {
        if (this.offers === null) {
            this.rawGetters().offers.call(this);
        }
        return this.offers instanceof Array && this.offers.length > 0 ? this.offers[0] : undefined;
    }

    avgAirTempString() {
        return this.avgAirTemp ? `${this.avgAirTemp} °${this.temperatureUnit.toUpperCase()}` : false;
    }

    avgWaterTempString() {
        return this.avgWaterTemp ? `${this.avgWaterTemp} °${this.temperatureUnit.toUpperCase()}` : false;
    }

    locationString(delimiter = '|') {
        return `${this.countryName ? this.countryName + ' ' + delimiter : ''} ${this.regionName ? this.regionName + ' ' + delimiter : ''} ${this.cityName ? this.cityName : ''}`;
    }

    ratingValue(index) {
        return this.ratings && this.ratings[index] ? this.ratings[index].value : undefined;
    }

    ratingByIdentifier(identifier) {
        return this.ratings
            ? getRating(this.ratingsProvider, identifier, this.ratings)
            : undefined;
    }

    ratingValueByIdentifier(identifier) {
        const rating = this.ratingByIdentifier(identifier);
        return rating ? rating.value : undefined;
    }

    availableRatingNames() {
        return getAvailableRatingNames(this.ratingsProvider, this.ratings);
    }

    rawGetters() {
        const rawGet = _get.bind(null, this.rawHotel);
        return {
            name() {
                this.name = this.rawHotel['Name'];
            },
            category() {
                this.category = this.rawHotel['Category'];
            },
            hotelAttributeCodeList() {
                this.hotelAttributeCodeList = rawGet('HotelAttributeCodeList.value');
                return this.hotelAttributeCodeList;
            },
            chain() {
                this.chain = this.rawHotel.Chain;
                return this.chain;
            },
            typeCodeList() {
                this.typeCodeList = this.rawHotel.TypeCodeList && this.rawHotel.TypeCodeList.length > 0
                    ? this.rawHotel.TypeCodeList
                    : undefined;
                return this.typeCodeList;
            },
            hotelCodes() {
                const rawCodes = rawGet('HotelCodes.HotelCode');
                this.hotelCodes = rawCodes
                    ? rawCodes.map(code => {
                        return {
                            tourOpCode: code['TourOpCode'],
                            code: code['value']
                        };
                    })
                    : undefined;
                return this.hotelCodes;
            },
            hotelNames() {
                const rawNames = rawGet('HotelNames.HotelName');
                this.hotelNames = rawNames
                    ? rawNames.map(name => {
                        return {
                            tourOpCode: name['TourOpCode'],
                            productCode: name['ProductCode'],
                            name: name['value']
                        };
                    })
                    : undefined;
                return this.hotelNames;
            },
            recommendationId() {
                this.recommendationId = rawGet('Recommendation.Id');
                return this.recommendationId;
            },
            recommendations() {
                const rawRecommendations = rawGet('Recommendation.Recommendation');
                this.recommendations = rawRecommendations
                    ? rawRecommendations.reduce((recommendations, recommendation) => {
                        recommendations[recommendation['Name']] = recommendation['Value'];
                        return recommendations;
                    }, {})
                    : undefined;
            },
            ratingsId() {
                this.ratingsId = rawGet('Ratings.Id', null);
                return this.ratingsId;
            },
            ratingsProvider() {
                this.ratingsProvider = rawGet('Ratings.Provider');
                return this.ratingsProvider;
            },
            ratings() {
                const rawRatings = rawGet('Ratings.Rating');
                this.ratings = rawRatings
                    ? rawRatings.reduce((ratings, rating) => {
                        ratings[rating['Index']] = {
                            name: rating['Name'],
                            value: rating['Value']
                        };
                        return ratings;
                    }, {})
                    : undefined;
                return this.ratings;
            },
            qualifiers() {
                const rawQualifiers = rawGet('Qualifiers.Qualifier');
                this.qualifiers = rawQualifiers
                    ? rawQualifiers.map(qualifier => {
                        return {
                            name: qualifier['Name'],
                            value: qualifier['Value']
                        };
                    })
                    : undefined;
                return this.qualifiers;
            },
            countryCode() {
                this.countryCode = rawGet('Location.Country.Code');
                return this.countryCode;
            },
            countryName() {
                this.countryName = rawGet('Location.Country.value');
                return this.countryName;
            },
            regionCode() {
                this.regionCode = rawGet('Location.Region.Code');
                return this.regionCode;
            },
            regionName() {
                this.regionName = rawGet('Location.Region.value');
                return this.regionName;
            },
            cityCode() {
                this.cityCode = rawGet('Location.City.Code');
                return this.cityCode;
            },
            cityName() {
                this.cityName = rawGet('Location.City.value');
                return this.cityName;
            },
            avgAirTemp() {
                this.avgAirTemp = rawGet('Location.AvgAirTemp');
                return this.avgAirTemp;
            },
            avgWaterTemp() {
                this.avgWaterTemp = rawGet('Location.AvgWaterTemp');
                return this.avgWaterTemp;
            },
            temperatureUnit() {
                this.temperatureUnit = rawGet('Location.TemperatureUnit');
                return this.temperatureUnit;
            },
            street() {
                this.street = rawGet('Location.Address.Street');
                return this.street;
            },
            postalCode() {
                this.postalCode = rawGet('Location.Address.PostalCode');
                return this.postalCode;
            },
            latitude() {
                this.latitude = rawGet('Location.GeoCode.Latitude');
                return this.latitude;
            },
            longitude() {
                this.longitude = rawGet('Location.GeoCode.Longitude');
                return this.longitude;
            },
            giataId() {
                this.giataId = rawGet('References.GiataCode[0]');
                return this.giataId;
            },
            opicId() {
                this.opicId = rawGet('References.OpicCode[0]');
                return this.opicId;
            },
            iffId() {
                this.iffId = rawGet('References.IffCode[0]');
                return this.iffId;
            },
            drvId() {
                this.drvId = rawGet('References.DrvCode[0]');
                return this.drvId;
            },
            hotelId() {
                this.hotelId = rawGet('References.HotelID[0]');
                return this.hotelId;
            },
            offers() {
                const rawOffers = rawGet('Offers.Offer', []);
                this.offers = rawOffers.map(offer => HotelOffer.fromRawOffer(offer));
            }
        };
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.offers) {
            this.offers.forEach(offer => offer.parseRawResponse());
        }
    }

    static fromRawHotel(rawHotel) {
        return this.fromRawElement(rawHotel, 'rawHotel');
    }

    static fromObject(obj) {
        let response = super.fromObject(obj);
        response.Offers = response.Offers ? response.Offers.map(offer => HotelOffer.fromObject(offer)) : [];
        return response;
    }
};
