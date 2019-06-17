import * as b from 'bobril'
import { IData, IContributor, Issue } from './restCallerTypes'
import { sendRequest } from '../common/restUtils'

/**
 * == RestCaller ==
 * rest api caller with simple data handling;
 * update of page is ensured via b.invalidate()
 */
export class RestCallerCtxStore extends b.Component<IData> {
    private _repository: string = ''
    private _contributors: IContributor[] = []
    private _heatingProjectUrl: string =
        'https://api.github.com/repos/BartosStore/HeatingProject/contributors'
    private _eulerDojoUrl: string =
        'https://api.github.com/repos/vsobotka/euler-dojo/contributors'

    private _issues: Issue[] = [
        {title: "Incorrect padding", description: "There is incorrect padding in login form."},
        {title: "Wrong number of decimal places", description: "Wrong calculation of heat temperature for boiler."}
    ];
    private _defaultTitle: string = "";
    private _defaultDescription: string = ""

    constructor(data: IData) {
        super(data)
        this.loadHeatingProjectData()
    }

    repository = (): string => {
        return this._repository
    }

    contributors = (): IContributor[] => {
        return this._contributors
    }

    issues = (): Issue[] => {
        return this._issues;
    }

    defaultTitle = (): string => {
        return this._defaultTitle;
    }

    defaultDescription = (): string => {
        return this._defaultDescription;
    }

    setDefaultTitle = (title: string): void => {
        this._defaultTitle = title;
        b.invalidate(this);
    }

    setDefaultDescription = (description: string): void => {
        this._defaultDescription = description;
        b.invalidate(this);
    }

    loadHeatingProjectData = () => {
        this._repository = 'Heating Project'
        this._loadRepositoryData(this._heatingProjectUrl)
        b.invalidate()
    }

    loadEulerDojoData = () => {
        this._repository = 'Euler Dojo'
        this._loadRepositoryData(this._eulerDojoUrl)
    }

    addIssue = () => {
        this._issues.push({title: this._defaultTitle, description: this._defaultDescription});
        this._defaultTitle = "";
        this._defaultDescription = "";
    }

    private _loadRepositoryData = (url: string) => {
        let result: Promise<IContributor[]> = sendRequest('GET', url)
        result.then((result: IContributor[]) => {
            this._contributors = result
            b.invalidate(this)
        })
        result.catch((reason: any) => console.log('Request error: ', reason))
    }
}
