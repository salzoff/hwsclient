let PagingMixin = (superclass) => class extends superclass {
    constructor() {
        super();
        this['ShowingResultsFrom'] = undefined;
        this['ResultsPerPage'] = undefined;
        this['ResultsTotal'] = undefined;
        this['SortingOrder'] = undefined;
        this['SecondarySortingOrder'] = undefined;
    }

    set showingResultsFrom(showResultsFrom) {
        this['ShowingResultsFrom'] = showResultsFrom;
    }

    get showingResultsFrom() {
        return this['ShowingResultsFrom'];
    }

    set resultsPerPage(resultsPerPage) {
        this['ResultsPerPage'] = resultsPerPage;
    }

    get resultsPerPage() {
        return this['ResultsPerPage'];
    }

    set resultsTotal(resultsTotal) {
        this['ResultsTotal'] = resultsTotal;
    }

    get resultsTotal() {
        return this['ResultsTotal'];
    }

    set sortingOrder(sortingOrder) {
        this['SortingOrder'] = sortingOrder;
    }

    get sortingOrder() {
        return this['SortingOrder'];
    }

    set secondarySortingOrder(secondarySortingOrder) {
        this['SecondarySortingOrder'] = secondarySortingOrder;
    }

    get secondarySortingOrder() {
        return this['SecondarySortingOrder'];
    }
};

export default PagingMixin;
