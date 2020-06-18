import Sources, { sources } from './Sources';
import { Component } from 'vue';

export class Link {
    public readonly text: string;
    public readonly link: string;
    public readonly icon: Sources;

    constructor(text: string, link: string, icon: Sources) {
        this.text = text;
        this.link = link;
        this.icon = icon;
    }

    public get name(): string {
        return sources[this.icon].name;
    }

    public get component(): Component {
        return sources[this.icon].icon;
    }
}