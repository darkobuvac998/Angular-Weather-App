export class QueryParameters{
    public q: string;
    public days: string;
    constructor(q: string, days: string){
        this.q = q;
        this.days = days;
    }
}