export class Validation {
    valid: boolean;
    number: number;
    local_format: number;
    international_format: string;
    country_prefix: string;
    country_code: string;
    country_name: string;
    location: string;
    carrier: string;
    line_type: string;

    constructor(Json: any){
        this.valid = Json.valid;
        this.number = Json.number;
        this.local_format = Json.local_format;
        this.international_format = Json.international_format;
        this.country_prefix = Json.country_prefix;
        this.country_code = Json.country_code;
        this.country_name = Json.country_name;
        this.location = (Json.location == "") ? "Not available" : Json.location;
        this.carrier = (Json.carrier == "") ? "Not available" : Json.carrier;
        this.line_type = (Json.line_type == "") ? "Not available" : Json.line_type;
    }
}

