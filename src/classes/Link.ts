import Sources, { sources } from './Sources';
import { Component } from 'vue';

export class Link {
    public readonly link: string;
    public readonly icon: Sources;

    constructor(link: string, icon: Sources) {
        this.link = link;
        this.icon = icon;
    }

    public get component(): Component {
        return sources[this.icon].icon;
    }
}