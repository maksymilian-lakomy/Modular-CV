import { Entry } from './Entry';
import { Component } from 'vue';

import SocialEntryComponent from './EntiresComponents/Social/SocialEntry.vue';
import { Link } from './Link';

export class SocialEntry extends Entry {

    private _component = SocialEntryComponent;

    private _link: Link;
    

    constructor(name: string, link: Link) {
        super(name);
        this._link = link;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    link: this._link
                }
            }
        })
    }
} 