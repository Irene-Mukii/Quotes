export class Quote {
    showElaboration!: boolean;
    constructor(public id: number, public name: string, public elaboration: string){
        this.showElaboration=false;
    }
}
