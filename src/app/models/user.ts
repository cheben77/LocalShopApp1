import { UserCredential } from './user-credential';
import { University } from './university';
import { Skill } from './skill';
import { Badge } from './badge';
import { Certification } from './certification';

export class User {
    public idUser: number;
    public firstName: string;
    public lastName: string;
    public city: string;
    public auth: UserCredential;
    public isNew: boolean;
    public hasNewBadge: boolean;
    public universities: University[] = new Array<University>();
    public badges: Badge[] = new Array<Badge>();
    public skills: Skill[] = new Array<Skill>();
    public certifications: Certification[] = new Array<Certification>();

    // jim addition
    public email: any;
    public password: any;

    constructor(firstName?, lastName?, city?, auth?, isNew?, hasNewBadge?, email?, password?) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.auth = auth;
        this.isNew = isNew;
        this.hasNewBadge = hasNewBadge;
        this.email = email;
        this.password = password;
    }
}
