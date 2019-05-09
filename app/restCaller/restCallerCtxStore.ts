import * as b from 'bobril';
import { IData } from './restCaller';

export class RestCallerCtxStore extends b.BobrilCtx<IData> {
    private _pageText: string = "Simple empty page.";
    private _url: string = "https://api.github.com/repos/BartosStore/HeatingProject/contributors";

    constructor(data: IData) {
        super(data);
    }
    
    pageText = (): string => {
        return this._pageText;
    }
}