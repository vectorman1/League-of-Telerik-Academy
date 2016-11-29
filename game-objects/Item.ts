import { Ability } from "./Ability"
import { Hero } from "./Hero"

export class Item {
    
    constructor(public name: string, public holder: Hero, public ability?: Ability) {}
    
    public Cast(source: Hero) {
        console.log(`${source.name} casts ${this.name}!`);
    }
}
