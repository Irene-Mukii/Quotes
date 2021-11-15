import { DatePipe } from "@angular/common";

export class Quote {
    showElaboration!: boolean;
    constructor(public id: number, public quote: string, public elaboration: string, public author: string, public contributor: string, public date: Date ){
        this.showElaboration=false;
    }
}
