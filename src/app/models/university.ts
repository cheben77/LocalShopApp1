import { Device } from './device';

export class University {
    id: number;
    name: string;
    icon: string;
    country: string;
    localisation: {x: string, y: string};
    devices: Device[];

}


