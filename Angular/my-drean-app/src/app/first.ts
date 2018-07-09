export class Family{
    hus: string;
    wife: string;
    greeting: string;
    constructor(hus: string, wife: string){
        this.hus = hus;
        this.wife = wife;
        this.greeting = 'A family is '
    }

    greet(){
        // return this.greeting + this.hus + ' and ' + this.wife;
        return `${this.greeting} ${this.hus} and ${this.wife}`
    }

}