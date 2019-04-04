import BaseElement from './BaseElement';

export default class Location extends BaseElement {
    constructor() {
        super();
        this['AvgAirTempMin'] = undefined;
        this['AvgAirTempMax'] = undefined;
        this['AvgWaterTempMin'] = undefined;
        this['AvgWaterTempMax'] = undefined;
        this['CountryCodeList'] = undefined;
        this['Region'] = undefined;
        this['City'] = undefined;
        this['GeoCircle'] = undefined;
        this['GeoPolygon'] = undefined;
    }

    set avgAirTempMin(avgAirTempMin) {
        this['AvgAirTempMin'] = avgAirTempMin;
    }

    get avgAirTempMin() {
        return this['AvgAirTempMin'];
    }

    set avgAirTempMax(avgAirTempMax) {
        this['AvgAirTempMax'] = avgAirTempMax;
    }

    get avgAirTempMax() {
        return this['AvgAirTempMax'];
    }

    set avgWaterTempMin(avgWaterTempMin) {
        this['AvgWaterTempMin'] = avgWaterTempMin;
    }

    get avgWaterTempMin() {
        return this['AvgWaterTempMin'];
    }

    set avgWaterTempMax(avgWaterTempMax) {
        this['AvgWaterTempMax'] = avgWaterTempMax;
    }

    get avgWaterTempMax() {
        return this['AvgWaterTempMax'];
    }

    set countryCodeList(countryCodeList) {
        if (typeof countryCodeList === 'string') {
            this['CountryCodeList'] = countryCodeList.split(' ');
            return;
        }
        this['CountryCodeList'] = countryCodeList;
    }

    get countryCodeList() {
        return this['CountryCodeList'];
    }

    set regionCodeList(regionCodeList) {
        this.region = { codes: regionCodeList };
    }

    get regionCodeList() {
        return this['Region']['CodeList'] ? this['Region']['CodeList'] : null;
    }

    set region(region) {
        this['Region'] = this['Region'] ? this['Region'] : {};
        if (typeof region === 'string') {
            this['Region']['value'] = region;
            return;
        }
        if (region instanceof Array) {
            this['Region']['value'] = region.map(entry => entry.replace(' ', '+')).join(' ');
            return;
        }
        if (region instanceof Object) {
            this['Region'] = {};
            if (typeof region['names'] !== 'undefined') {
                if (typeof region['names'] === 'string') {
                    this['Region']['value'] = region['names'];
                }
                if (region['names'] instanceof Array) {
                    this['Region']['value'] = region['names'].map(entry => entry.replace(' ', '+')).join(' ');
                }
            }
        }
        if (typeof region['codes'] === 'string') {
            this['Region']['CodeList'] = region['codes'].split(' ');
        } else if (region['codes'] instanceof Array) {
            this['Region']['CodeList'] = region['codes'];
        }
    }

    get region() {
        return this['Region'];
    }

    set cityCodeList(cityCodeList) {
        this.city = { codes: cityCodeList };
    }

    get cityCodeList() {
        return this['City'] && this['City']['CodeList'] ? this['City']['CodeList'] : null;
    }

    set city(city) {
        this['City'] = this['City'] ? this['City'] : {};
        if (typeof city === 'string') {
            this['City']['value'] = city;
            return;
        }
        if (city instanceof Array) {
            this['City']['value'] = city.map(entry => entry.replace(' ', '+')).join(' ');
            return;
        }
        if (city instanceof Object) {
            if (typeof city['names'] !== 'undefined') {
                if (typeof city['names'] === 'string') {
                    this['City']['value'] = city['names'];
                }
                if (city['names'] instanceof Array) {
                    this['City']['value'] = city['names'].map(entry => entry.replace(' ', '+')).join(' ');
                }
            }
        }
        if (typeof city['codes'] === 'string') {
            this['City']['CodeList'] = city['codes'].split(' ');
        } else if (city['codes'] instanceof Array) {
            this['City']['CodeList'] = city['codes'];
        }
    }

    get geoCircle() {
        return this['GeoCircle'];
    }

    set geoCircle(geoCircle) {
        if (geoCircle instanceof Object) {
            geoCircle = {
                'Center': {
                    'Longitude': geoCircle.center.lng || geoCircle.center.longitude,
                    'Latitude': geoCircle.center.lat || geoCircle.center.latitude,
                },
                'Radius': geoCircle.radius
            };
        }

        this['GeoCircle'] = geoCircle;
    }

    get geoPolygon() {
        return this['GeoPolygon'];
    }

    set geoPolygon(geoPolygon) {
        if (geoPolygon instanceof Array) {
            geoPolygon = {
                Point: geoPolygon.map((item, index) => {
                    return {
                        'Longitude': item.lng || item.longitude,
                        'Latitude': item.lat || item.latitude,
                        'Index': index
                    };
                })
            };
        }

        this['GeoPolygon'] = geoPolygon;
    }

    get city() {
        return this['City'];
    }
};
