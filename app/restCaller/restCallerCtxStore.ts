import * as b from 'bobril';
import { IData, IContributor } from './restCallerTypes';
import { sendRequest } from '../common/restUtils';

export class RestCallerCtxStore extends b.BobrilCtx<IData> {
    private _contributors: IContributor[] = []; 
    private _url: string = "https://api.github.com/repos/BartosStore/HeatingProject/contributors";

    constructor(data: IData) {
        super(data);
        let result: Promise<IContributor[]> = sendRequest('GET', this._url);
        result.then(
            (result: IContributor[]) => 
                this._contributors = result
        )
        result.catch((reason: any) => console.log("Request error: ", reason))
    }
    
    contributorLogin = (): string => {
        return this._contributors[0] !== undefined ? this._contributors[0].login : "-";
    }

    contributorUrl = (): string => {
        return this._contributors[0] !== undefined ? this._contributors[0].url : "-";
    }

    contributors = (): IContributor[] => {
        return this._contributors;
    }
}
