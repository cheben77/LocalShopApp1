import { Skill } from './skill';
import { University } from './university';

export class Device {
    id: string;
    selected: boolean;
    name: string;
    skills: Skill[];
    description: string;
    recognitions: string[];
    efficiency: number;
    targetPopulation: string;
    pedagogicalFormat: string;
    languages: string[];
    active: boolean;
    parent: University;
}
