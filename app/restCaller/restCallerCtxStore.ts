import * as b from 'bobril';
import { IData, IContributor } from './restCallerTypes';
import { sendRequest } from '../common/restUtils';

export class RestCallerCtxStore extends b.BobrilCtx<IData> {
    private _contributors: IContributor[] = []; 
    private _url: string = "https://api.github.com/repos/BartosStore/HeatingProject/contributors";

    constructor(data: IData) {
        super(data);
        sendRequest(
            'GET', 
            this._url, 
            (contributors: IContributor[]) => {
                contributors.forEach((c, i) => {
                    this._contributors.push({
                        id: contributors[i].id,
                        login: contributors[i].login,
                        url: contributors[i].url,
                        type: contributors[i].type,
                        contributions: contributors[i].contributions
                    })
                });
            }
        );
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
