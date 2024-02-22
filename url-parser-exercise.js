class UrlParser {
    constructor(urlFormat) {
        this.urlFormat = urlFormat;
        this.urlVariablesParser = new UrlVariablesParser(urlFormat);
        this.queryStringVariablesParser = new QueryStringVariablesParser();
    }

    parseVariables(url) {
        const urlVariables = this.urlVariablesParser.parseVariables(url);
        const queryStringVariables = this.queryStringVariablesParser.parseVariables(url);
        return {...urlVariables, ...queryStringVariables};
    }
}


class UrlVariablesParser {
    constructor(urlFormat) {
        this.urlFormat = urlFormat;
    }

    parseVariables(url) {
        const variables = url.split('/');
        const variablesFormat = this.urlFormat.split('/');
        const urlFinalVariables = {};

        variablesFormat.forEach((element, index) => {
            if(element.startsWith(':')) {
                const key = element.slice(1);
                urlFinalVariables[key] = variables[index].split('?')[0];
            }
        });

        return urlFinalVariables;
    }
}

class QueryStringVariablesParser {
    parseVariables(url) {
        const qsFinalVariables  = {};
        const queryParamsString = url.split('?')[1];
        if (queryParamsString) {
            const queryParamsArray = queryParamsString.split('&');
            queryParamsArray.forEach(param => {
                const [key, value] = param.split('=');
                qsFinalVariables[key] = value;
            })
        }

        return qsFinalVariables;
    }
}



// TESTING CASES
const urlParser = new UrlParser('/:version/api/:collection/:id');
console.log(urlParser.parseVariables('/2/api/sarasa/4?test=abc&test2=xyz'));