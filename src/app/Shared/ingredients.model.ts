import { DecimalPipe } from "@angular/common";

export class Ingredients {
    name: string;
    amount:number;

    constructor(name: string, amount: number){
   this.name = name;
   this.amount = amount;
    }
}
