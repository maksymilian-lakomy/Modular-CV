import { Entry } from './Entry';
import { Component } from 'vue';

import ProjectEntryComponent from './EntiresComponents/Project/ProjectEntry.vue';

import { Technology } from './Technology';
import { Link } from './Link';

export class ProjectEntry extends Entry {

    private _component = ProjectEntryComponent;

    private _stack: Array<Technology>;
    private _description: string;
    private _links: Array<Link>;

    constructor(name: string, stack: Array<Technology>, description: string, links: Array<Link> = []) {
        super(name);
        this._stack = stack;
        this._description = description;
        this._links = links;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    stack: this._stack,
                    description: this._description,
                    links: this._links
                }
            }
        })
    }
} 