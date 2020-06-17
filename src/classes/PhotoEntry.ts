import { Entry } from './Entry';
import { Component } from 'vue';

import PhotoEntryComponent from './EntiresComponents/Photo/PhotoEntry.vue';

export class PhotoEntry extends Entry {

    private _component = PhotoEntryComponent;

    private _image: string;

    constructor(name: string, image: string) {
        super(name);
        this._image = image;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    name: this.name,
                    image: this._image
                }
            }
        })
    }
} 