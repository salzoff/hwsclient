export default class AttributeLogicalExpression {
    constructor() {
        this['Parts'] = null;
    }

    get parts() {
        return this['Parts'];
    }

    set parts(parts) {
        if (AttributeLogicalExpression.checkParts(parts)) {
            this['Parts'] = parts instanceof Array ? parts : Object.values(parts);
        }
    }

    static checkParts(parts) {
        for (let part of parts) {
            if (
                !part.codes ||
                !(part.codes instanceof Array) ||
                !part.operator ||
                typeof part.operator !== 'string'
            ) {
                return false;
            }
        }
        return true;
    }

    getLogicalExpressionObject() {
        if (!AttributeLogicalExpression.checkParts(this.parts)) {
            return false;
        }
        const logicalExpression = this.getLogicalExpression();
        if (logicalExpression.length === 0 || logicalExpression[0].length === 0) {
            return {};
        }
        return {
            Operator: 'logicalExpression',
            value: this.getLogicalExpression()
        };
    }

    getLogicalExpression() {
        return this.parts
            .filter(part => part.codes.length > 0)
            .map(part => {
                const operator = part.operator === 'or' ? '|' : '+';
                return ['(', part.codes.join(` ${operator} `), ')'].join(' ');
            }).join(' + ').split(' ');
    }

    static fromPartsObject(partsObject) {
        const parts = Object.values(partsObject);
        if (AttributeLogicalExpression.checkParts(parts)) {
            let obj = new AttributeLogicalExpression();
            obj['Parts'] = parts;
            return obj;
        }
        return false;
    }
};
