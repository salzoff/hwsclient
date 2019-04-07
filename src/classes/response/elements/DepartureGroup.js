import BaseElement from './BaseElement';

export default class DepartureGroup extends BaseElement {
    constructor() {
        super();
        this['Id'];
        this['Name'];
        this['DepartureAirports'];
        this['DepartureGroups'];
    }

    set id(id) {
        this['Id'] = id;
    }

    get id() {
        return this['Id'];
    }

    set name(name) {
        this['Name'] = name;
    }

    get name() {
        return this['Name'];
    }

    set departureAirports(departureAirports) {
        this['DepartureAirports'] = departureAirports;
    }

    get departureAirports() {
        return this['DepartureAirports'];
    }

    set departureGroups(departureGroups) {
        this['DepartureGroups'] = departureGroups;
    }

    get departureGroups() {
        return this['DepartureGroups'];
    }

    parseRawResponse() {
        super.parseRawResponse();
        if (this.departureGroups) {
            this.departureGroups.forEach(departureGroup => departureGroup.parseRawResponse());
        }
    }

    rawGetters() {
        return {
            id() {
                this.id = this.rawGroup['Id'];
                return this.id;
            },
            name() {
                this.name = this.rawGroup['Name'];
                return this.name;
            },
            departureAirports() {
                this.departureAirports = this.rawGroup['DepartureAirports'];
                return this.departureAirports;
            },
            departureGroups() {
                const rawGroups = this.rawGroup.DepartureGroup;
                this.departureGroups = rawGroups
                    ? rawGroups.map(group => DepartureGroup.fromRawGroup(group))
                    : undefined;
                return this.departureGroups;
            }
        };
    }

    static fromRawGroup(rawGroup) {
        return this.fromRawElement(rawGroup, 'rawGroup');
    }

    static fromObject(obj) {
        let response = Object.assign(new DepartureGroup(), obj);
        response.DepartureGroups = response.DepartureGroups ? response.DepartureGroups.map(group => DepartureGroup.fromObject(group)) : undefined;
        return response;
    }
};
