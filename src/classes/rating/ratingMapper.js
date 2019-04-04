import ratingMapping from './ratingMapping';
import uniq from 'lodash/uniq';

const getRatingIndex = (ratingProvider, identifier) => {
    return ratingMapping[ratingProvider][identifier] ? ratingMapping[ratingProvider][identifier] : false;
};

const getRating = (ratingProvider, identifier, ratings) => {
    const index = getRatingIndex(ratingProvider, identifier);
    return index && ratings[index] ? ratings[index] : undefined;
};

const getRatingNames = () => {
    let names = [];
    for (const provider in ratingMapping) {
        names.push(...Object.keys(ratingMapping[provider]));
    }
    return uniq(names);
};

const getAvailableRatingNames = (ratingProvider, ratings) => {
    let ratingNames = [];
    for (const key in ratingMapping[ratingProvider]) {
        if (ratings[ratingMapping[ratingProvider][key]]) {
            ratingNames.push(key);
        }
    }
    return ratingNames;
};

export {
    getRatingIndex,
    getRating,
    getRatingNames,
    getAvailableRatingNames
};
