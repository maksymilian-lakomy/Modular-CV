import { Entry } from './Entry';
import { Component } from 'vue';

import SocialEntryComponent from './EntiresComponents/Social/SocialEntry.vue';
import { Link } from './Link';

export class SocialEntry extends Entry {

    private _component = SocialEntryComponent;

    private _links: Array<Link>;

    constructor(name: string, links: Array<Link>) {
        super(name);
        this._links = links;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    links: this._links
                }
            }
        })
    }
} 