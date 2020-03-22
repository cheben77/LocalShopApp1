export class UseCase {
    private _idUseCase: number;
    private _name: string;
    private _description: string;

    constructor(name? , description?) {
        this._name = name;
        this._description = description;
    }

    // Get and Set of name
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    // Get and Set of description
    get description() {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
}
