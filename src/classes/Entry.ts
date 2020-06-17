import { Component } from 'vue';

export abstract class Entry {
    public readonly name: string;
    public abstract get component(): Component;

    constructor(name: string) {
        this.name = name;
    }
}