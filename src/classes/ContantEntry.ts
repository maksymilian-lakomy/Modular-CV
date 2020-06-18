import { Entry } from './Entry';
import { Component } from 'vue';

import ContactEntryComponent from './EntiresComponents/Contact/ContactEntry.vue';

export class ContactEntry extends Entry {

    private _component = ContactEntryComponent;

    private _email: string;
    private _phoneNumber: string;
    private _address: string;

    constructor(name: string, email: string, phoneNumber: string, address: string) {
        super(name);
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }

    public get component(): Component {
        return this._component.extend({
            data: () => {
                return {
                    email: this._email,
                    phoneNumber: this._phoneNumber,
                    address: this._address
                }
            }
        })
    }
} 