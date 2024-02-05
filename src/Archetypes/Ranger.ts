import { EnergyType } from "../Energy";
import Archetype from "./Archetype";

class Ranger extends Archetype{
    private static instances = 0;
    private _energyType: EnergyType = 'stamina';

    constructor(name: string) {
        super(name);
        
        Ranger.instances += 1
    }

    get energyType(): EnergyType {
        return this._energyType;
    }

    static createdArchetypeInstances(): number {
        return this.instances
    }
}

export default Ranger