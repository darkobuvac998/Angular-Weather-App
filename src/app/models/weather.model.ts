import { Current } from "./current.model";
import { Forecast } from "./forecast.model";
import { Location } from "./location.model";

export class Weather {
    location?: Location;
    current?: Current;
    forecast?: Forecast;
}
