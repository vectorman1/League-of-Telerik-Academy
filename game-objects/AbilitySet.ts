import { Ability } from "./Ability"

export class AbilitySet {
    private _AbilityQ : Ability;
    public get AbilityQ() : Ability {
        return this._AbilityQ;
    }
    public set AbilityQ(v : Ability) {
        this._AbilityQ = v;
    }
    
    private _AbilityW : Ability;
    public get AbilityW() : Ability {
        return this._AbilityW;
    }
    public set AbilityW(v : Ability) {
        this._AbilityW = v;
    }
    
    private _AbilityE : Ability;
    public get AbilityE() : Ability {
        return this._AbilityE;
    }
    public set AbilityE(v : Ability) {
        this._AbilityE = v;
    }
    
    private _AbilityR : Ability;
    public get AbilityR() : Ability {
        return this._AbilityR;
    }
    public set AbilityR(v : Ability) {
        this._AbilityR = v;
    } 
    constructor(abilityQ: Ability, abilityW: Ability, abilityE: Ability, abilityR: Ability) {
        this._AbilityQ = abilityQ;
        this._AbilityW = abilityW;
        this._AbilityE = abilityE;
        this._AbilityR = abilityR; 
    }
}