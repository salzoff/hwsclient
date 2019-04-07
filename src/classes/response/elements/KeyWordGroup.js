import BaseElement from './BaseElement';
import _get from 'lodash/get';

export default class KeyWordGroup extends BaseElement {
    constructor() {
        super();
        this['Name'];
        this['KeyWords'];
    }

    set name(name) {
        this['Name'] = name;
    }

    get name() {
        return this['Name'];
    }

    set keyWords(keyWords) {
        this['KeyWords'] = keyWords;
    }

    get keyWords() {
        return this['KeyWords'];
    }

    rawGetters() {
        return {
            name() {
                this.name = this.rawGroup['Name'];
                return this.name;
            },
            keyWords() {
                const rawKeyWords = _get(this.rawGroup, 'KeyWord');
                this.keyWords = rawKeyWords.length > 0
                    ? rawKeyWords.map(keyWord => {
                        return {
                            id: keyWord['Id'],
                            name: keyWord['Name']
                        };
                    })
                    : undefined;
                return this.keyWords;
            }
        };
    }

    static fromRawGroup(rawGroup) {
        return this.fromRawElement(rawGroup, 'rawGroup');
    }
};
