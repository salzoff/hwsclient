import BaseElement from './BaseElement';

export default class Recommendations extends BaseElement {
    constructor() {
        super();
        this['Recommendation'] = [];
    }

    set ratingCount(ratingCount) {
        this.setElement('ratingCount', ratingCount);
    }

    get ratingCount() {
        return this['Recommendation'].find(entry => entry['Name'] === 'ratingCount');
    }

    set averageRatingTotal(averageRatingTotal) {
        this.setElement('averageRatingTotal', averageRatingTotal);
    }

    get averageRatingTotal() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingTotal');
    }

    set averageRatingHotel(averageRatingHotel) {
        this.setElement('averageRatingHotel', averageRatingHotel);
    }

    get averageRatingHotel() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingHotel');
    }

    set averageRatingLocation(averageRatingLocation) {
        this.setElement('averageRatingLocation', averageRatingLocation);
    }

    get averageRatingLocation() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingLocation');
    }

    set averageRatingService(averageRatingService) {
        this.setElement('averageRatingService', averageRatingService);
    }

    get averageRatingService() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingService');
    }

    set averageRatingCatering(averageRatingCatering) {
        this.setElement('averageRatingCatering', averageRatingCatering);
    }

    get averageRatingCatering() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingCatering');
    }

    set averageRatingSport(averageRatingSport) {
        this.setElement('averageRatingSport', averageRatingSport);
    }

    get averageRatingSport() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingSport');
    }

    set averageRatingRoom(averageRatingRoom) {
        this.setElement('averageRatingRoom', averageRatingRoom);
    }

    get averageRatingRoom() {
        return this['Recommendation'].find(entry => entry['Name'] === 'averageRatingRoom');
    }

    set overallAverageRating(overallAverageRating) {
        this.setElement('overallAverageRating', overallAverageRating);
    }

    get overallAverageRating() {
        return this['Recommendation'].find(entry => entry['Name'] === 'overallAverageRating');
    }

    set recommendationsTotal(recommendationsTotal) {
        this.setElement('recommendationsTotal', recommendationsTotal);
    }

    get recommendationsTotal() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsTotal');
    }

    set recommendationsSingle(recommendationsSingle) {
        this.setElement('recommendationsSingle', recommendationsSingle);
    }

    get recommendationsSingle() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsSingle');
    }

    set recommendationsFamily(recommendationsFamily) {
        this.setElement('recommendationsFamily', recommendationsFamily);
    }

    get recommendationsFamily() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsFamily');
    }

    set recommendationsCouples(recommendationsCouples) {
        this.setElement('recommendationsCouples', recommendationsCouples);
    }

    get recommendationsCouples() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsCouples');
    }

    set recommendationsFriends(recommendationsFriends) {
        this.setElement('recommendationsFriends', recommendationsFriends);
    }

    get recommendationsFriends() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsFriends');
    }

    set recommendationsBeachHoliday(recommendationsBeachHoliday) {
        this.setElement('recommendationsBeachHoliday', recommendationsBeachHoliday);
    }

    get recommendationsBeachHoliday() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsBeachHoliday');
    }

    set recommendationsBusinessTrip(recommendationsBusinessTrip) {
        this.setElement('recommendationsBusinessTrip', recommendationsBusinessTrip);
    }

    get recommendationsBusinessTrip() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsBusinessTrip');
    }

    set recommendationsCityBreak(recommendationsCityBreak) {
        this.setElement('recommendationsCityBreak', recommendationsCityBreak);
    }

    get recommendationsCityBreak() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsCityBreak');
    }

    set recommendationsWellness(recommendationsWellness) {
        this.setElement('recommendationsWellness', recommendationsWellness);
    }

    get recommendationsWellness() {
        return this['Recommendation'].find(entry => entry['Name'] === 'recommendationsWellness');
    }

    setElement(name, value) {
        let index = this['Recommendation'].findIndex(entry => entry['Name'] === name);
        index = index > -1 ? index : this['Recommendation'].length;
        if (value instanceof Object) {
            this['Recommendation'][index] = value;
        }
        this['Recommendation'][index] = {
            'Name': name,
            'Value': value,
            'Operator': 'ge'
        };
    }
};
