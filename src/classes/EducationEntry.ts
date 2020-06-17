import { Entry } from './Entry';
import { Component } from 'vue';

import EducationEntryComponent from './EntiresComponents/Education/EducationEntry.vue';

export class EducationEntry extends Entry {

    private _component = EducationEntryComponent;

    private _specialization: string;
    private _start: Date | null;
    private _end: Date | null;
    

    constructor(name: string, specialization: string, start: Date, end: Date | null) {
        super(name);
        this._specialization = specialization;
        this._start = start;
        this._end = end;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    specialization: this._specialization,
                    start: this._start,
                    end: this._end
                }
            }
        })
    }
} 