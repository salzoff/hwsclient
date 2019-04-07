import BaseElement from '../BaseElement';
import _get from 'lodash/get';

export default class Group extends BaseElement {
    constructor() {
        super();
        this['Name'];
        this['Id'];
        this['CountProductsInGroup'];
        this['CountUniqueProductsInGroup'];
        this['IsLeaf'];
        this['Groups'];
    }

    set name(name) {
        this['Name'] = name;
    }

    get name() {
        return this['Name'];
    }

    set id(id) {
        this['Id'] = id;
    }

    get id() {
        return this['Id'];
    }

    set countProductsInGroup(countProductsInGroup) {
        this['CountProductsInGroup'] = countProductsInGroup;
    }

    get countProductsInGroup() {
        return this['CountProductsInGroup'];
    }

    set countUniqueProductsInGroup(countUniqueProductsInGroup) {
        this['CountUniqueProductsInGroup'] = countUniqueProductsInGroup;
    }

    get countUniqueProductsInGroup() {
        return this['CountUniqueProductsInGroup'];
    }

    set isLeaf(isLeaf) {
        this['IsLeaf'] = isLeaf;
    }

    get isLeaf() {
        return this['IsLeaf'];
    }

    set groups(groups) {
        this['Groups'] = groups;
        if (this['Groups'] instanceof Array) {
            this['Groups'].forEach(group => {
                group.travellers = this.travellers;
            });
        }
    }

    get groups() {
        return this['Groups'];
    }

    parseRawResponse() {
        super.parseRawResponse();
        this.hotel.parseRawResponse();
        if (this.groups) {
            this.groups.forEach(group => group.parseRawResponse());
        }
    }

    rawGetters() {
        return {
            name() {
                this.name = this.rawGroup['Name'];
                return this.name;
            },
            id() {
                this.id = this.rawGroup['Id'];
                return this.id;
            },
            countProductsInGroup() {
                this.countProductsInGroup = this.rawGroup['CountProductsInGroup'];
                return this.countProductsInGroup;
            },
            countUniqueProductsInGroup() {
                this.countUniqueProductsInGroup = this.rawGroup['CountUniqueProductsInGroup'];
                return this.countUniqueProductsInGroup;
            },
            isLeaf() {
                this.isLeaf = this.rawGroup['IsLeaf'];
                return this.isLeaf;
            },
            groups() {
                const rawGroups = _get(this.rawGroup, 'Group', []);
                if (rawGroups.length === 0) {
                    this.groups = undefined;
                    return this.groups;
                }
                this.groups = rawGroups.map(rawGroup => {
                    let group = Group.fromRawGroup(rawGroup);
                    Object.defineProperty(group, 'parent', {
                        get() {
                            return this;
                        }
                    });
                    return group;
                });
                return this.groups;
            }
        };
    }

    static fromRawGroup(rawGroup) {
        return this.fromRawElement(rawGroup, 'rawGroup');
    }

    static fromObject(obj) {
        let group = Object.assign(new this(), obj);
        group.Groups = group.Groups
            ? group.Groups.map(objectGroup => {
                let subgroup = Group.fromObject(objectGroup);
                Object.defineProperty(subgroup, 'parent', {
                    get() {
                        return group;
                    }
                });
                return subgroup;
            })
            : undefined;
        return group;
    }
};
