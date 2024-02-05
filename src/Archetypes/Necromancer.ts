import { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Necromancer extends Archetype{
    private static instances = 0;
    private _energyType: EnergyType = 'mana';

    constructor(name: string) {
        super(name);
        
        Necromancer.instances += 1
    }

    get energyType(): EnergyType {
        return this._energyType;
    }

    static createdArchetypeInstances(): number {
        return this.instances
    }
}

export default Necromancer;