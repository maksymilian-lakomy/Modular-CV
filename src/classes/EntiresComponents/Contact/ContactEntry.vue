<template>
    <v-untitled-entry-template>
        <dl class = "contact-grid">
            <dt>E-mail:</dt>
            <dd>
                <a :href="`mailto:${email}`" v-html="email" />
            </dd>

            <dt>Telefon:</dt>
            <dd>
                <span v-html="phoneNumber" />
            </dd>

            <dt>Adres:</dt>
            <dd>
                <span v-html="address" />
            </dd>
        </dl>
    </v-untitled-entry-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import UntitledEntryTemplate from '../UntitledEntryTemplate.vue';

@Component({
    components: {
        'v-untitled-entry-template': UntitledEntryTemplate
    }
})
export default class ContactEntry extends Vue {
    private email!: string;
    private phoneNumber!: string;
    private address!: string;
}
</script>

<style lang="sass" scoped>
dt, dd
    margin: unset

.contact-grid
    display: flex
    flex-direction: column
    column-gap: .5em
    row-gap: 1em
    line-height: 1.5em

    dd
        margin-bottom: .5em
    
    dt
        font-weight: bolder
</style>