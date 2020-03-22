export class Files {
    private _name: string;
    private _url: string;

    constructor(name?, url?) {
        this._name = name;
        this._url = url;
    }

     // Get and Set of name
     get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    // Get and Set of url
    get url() {
        return this._url;
    }
    set url(value: string) {
        this._url = value;
    }
}
