import { Entry } from './Entry';
import { Component } from 'vue';

import DefaultEntryComponent from './EntiresComponents/Default/DefaultEntry.vue';

export class DefaultEntry extends Entry {

    private _component = DefaultEntryComponent;

    private _description: string;

    constructor(name: string, description: string) {
        super(name);
        this._description = description;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    description: this._description
                }
            }
        })
    }
} 