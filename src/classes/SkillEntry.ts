import { Entry } from './Entry';
import { Component } from 'vue';

import SkillEntryComponent from './EntiresComponents/Skill/SkillEntry.vue';

export class SkillEntry extends Entry {

    private _component = SkillEntryComponent;

    private _description: string;
    

    constructor(name: string, description: string) {
        super(name);
        this._description = description;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    description: this._description
                }
            }
        })
    }
} 