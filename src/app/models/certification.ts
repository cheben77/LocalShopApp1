import { Files } from './files';
import { Skill } from './skill';

export class Certification {
    private _state: number;
    private _date: Date;
    private _files: Files[];
    private _skills: Skill[];

    constructor(state?, date?) {
        this._state = state;
        this._date = date;
        this._files = new Array<Files>();
        this._skills = new Array<Skill>();
    }

    get skills() {
        return this._skills;
    }

    get files() {
        return this._files;
    }

    // Get and Set of state
    get state() {
        return this._state;
    }
    set state(value: number) {
        this._state = value;
    }

    // Get and Set of dtate
    get date() {
        return this._date;
    }
    set date(value: Date) {
        this._date = value;
    }

    /**
     * Add a skill to certification demand
     *
     * @param skill value of skill selected to add
     * @memberOf Certification
     */
    addSkill(skill: Skill) {
        const pos: number = this._skills.findIndex((currentSkill: Skill) => {
            return skill.id === currentSkill.id;
        });
        if (pos === -1) {
            this._skills.push(skill);
        }
    }

    /**
     * Remove a skill to certification demand
     *
     * @param skill value of skill selected to remove
     * @memberOf Certification
     */
    removeSkill(skill: Skill) {
        const pos: number = this._skills.findIndex((currentSkill: Skill) => {
            return skill.id === currentSkill.id;
        });
        if (pos !== -1) {
            this._skills.splice(pos, 1);
        }
    }

    /**
     * Add a file to certification demand
     *
     * @param file value of file selected to add
     * @memberOf Certification
     */
    addFile(file: Files) {
        if (!this._files.find(item => item.url === file.url)) {
            this._files.push(file);
        }
    }

    /**
     * Remove a file to certification demand
     *
     * @param position value of file selected to remove
     * @memberOf Certification
     */
    removeFile(position) {
        this._files.splice(position, 1);
      }


}
