import * as b from 'bobril';
import { IData, IContributor } from './restCallerMobXTypes';
import { sendRequest } from '../common/restUtils';

/**
 * == RestCaller ==
 * rest api caller with improved data handling;
 * update of page is ensured via MobX
 */
export class RestCallerCtxStore extends b.BobrilCtx<IData> {
    private _repository: string = "";
    private _contributors: IContributor[] = []; 
    private _heatingProjectUrl: string = "https://api.github.com/repos/BartosStore/HeatingProject/contributors";
    private _eulerDojoUrl: string = "https://api.github.com/repos/vsobotka/euler-dojo/contributors";

    constructor(data: IData) {
        super(data);
        this.loadHeatingProjectData();
    }
    
    repository = (): string => {
        return this._repository;
    }

    contributors = (): IContributor[] => {
        return this._contributors;
    }

    loadHeatingProjectData = () => {
        this._repository = "Heating Project";
        this._loadRepositoryData(this._heatingProjectUrl);
    }

    loadEulerDojoData = () => {
        this._repository = "Euler Dojo";
        this._loadRepositoryData(this._eulerDojoUrl);
    }

    private _loadRepositoryData = (url: string) => {
        let result: Promise<IContributor[]> = sendRequest('GET', url);
        result.then(
            (result: IContributor[]) =>  {
                this._contributors = result
            }
        )
        result.catch((reason: any) => console.log("Request error: ", reason))
    }
}
