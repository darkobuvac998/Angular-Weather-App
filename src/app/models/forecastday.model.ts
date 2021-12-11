import { Astro } from "./astro.model";
import { Day } from "./day.model";
import { Hour } from "./hour.model";

export class Forecastday {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
}
