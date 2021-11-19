export class ValidationError {
    code: number;
    type: string;
    info: string;
    constructor(Json: any){
        let re = /\_/gi;
        this.code = Json.code;
        this.type = (Json.type.charAt(0).toUpperCase()) + Json.type.replace(re, " ").slice(1);
        this.info = Json.info;
    }
}