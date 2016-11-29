import { Hero } from "./Hero"

export class World {

    worldContents : Hero[] = [];

    public AddControllable(hero: Hero) {
        this.worldContents.push(hero);
        console.log(`Initialized ${hero.name} in World.`);
        
    }
    public RemoveControllable(hero: Hero) {
        this.worldContents.slice(this.worldContents.indexOf(hero), 1);
        console.log(`Trashed ${hero.name} from World.`);
    }
}