import { Entry } from './Entry';
import { Component, VueConstructor } from 'vue';

import OrderedSection from '@/components/OrderedSection.vue';

export class Section {
    public readonly name: string;
    private _sectionComponent = OrderedSection;
    
    public readonly entries: Array<Entry> = [];

    constructor(name: string, sectionComponent?: VueConstructor) {
        this.name = name;
        if (sectionComponent !== undefined)
            this._sectionComponent = sectionComponent;
    }

    public get entriesComponents(): Array<Component> {
        return this.entries.map(entry => entry.component);
    }

    public get component(): Component {
        return this._sectionComponent.extend({
            data: () => {
                return {
                    name: this.name
                }
            }
        });
    }
}