import PackageRequest from '../PackageRequest';

export default class PackageVariantRequest extends PackageRequest {
    constructor() {
        super();
        this['Variant'] = undefined;
    }

    get path() {
        return 'packagevariant';
    }

    set variant(variant) {
        if (variant instanceof Array) {
            this['Variant'] = variant.join(' ');
            return;
        }
        this['Variant'] = variant;
    }

    get variant() {
        return this['Variant'];
    }
};
