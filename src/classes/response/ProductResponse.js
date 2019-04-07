import BaseResponse from './BaseResponse';
import Travellers from './elements/Travellers';
import _get from 'lodash/get';

export default class ProductResponse extends BaseResponse {
    constructor() {
        super();
        this['ResultsTotal'];
        this['ShowingResultsFrom'];
        this['ResultsPerPage'];
        this['Currency'];
        this['Travellers'];
        this['Metas'];
    }

    set resultsTotal(resultsTotal) {
        this['ResultsTotal'] = resultsTotal;
    }

    get resultsTotal() {
        return this['ResultsTotal'];
    }

    set showingResultsFrom(showingResultsFrom) {
        this['ShowingResultsFrom'] = showingResultsFrom;
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

    set currency(currency) {
        this['Currency'] = currency;
    }

    get currency() {
        return this['Currency'];
    }

    set travellers(travellers) {
        this['Travellers'] = travellers;
    }

    get travellers() {
        if (this['Travellers'] && !(this['Travellers'] instanceof Travellers)) {
            this['Travellers'] = new Travellers(...this['Travellers']);
        }
        return this['Travellers'];
    }

    set metas(metas) {
        this['Metas'] = metas;
    }

    get metas() {
        return this['Metas'];
    }

    metaByName(name) {
        const meta = this.metas ? this.metas.find(meta => meta.name === name) : undefined;
        return meta ? meta.value : undefined;
    }

    rawGetters() {
        return Object.assign(super.rawGetters(), {
            resultsTotal() {
                this.resultsTotal = parseInt(this.rawResponse['ResultsTotal'], 10);
                return this.resultsTotal;
            },
            showingResultsFrom() {
                this.showingResultsFrom = parseInt(this.rawResponse['ShowingResultsFrom'], 10);
                return this.showingResultsFrom;
            },
            resultsPerPage() {
                this.resultsPerPage = parseInt(this.rawResponse['ResultsPerPage'], 10);
                return this.resultsPerPage;
            },
            currency() {
                this.currency = this.rawResponse['Currency'];
                return this.currency;
            },
            travellers() {
                this.travellers = this.rawResponse.Travellers ? Travellers.fromRawResponse(this.rawResponse) : undefined;
                return this.travellers;
            },
            metas() {
                const rawMetas = _get(this.rawResponse, 'Metas.Meta', []);
                this.metas = rawMetas.length > 0
                    ? rawMetas.map(meta => {
                        return {
                            name: meta['Name'],
                            value: meta['value']
                        };
                    })
                    : undefined;
                return this.metas;
            }
        });
    }
};
