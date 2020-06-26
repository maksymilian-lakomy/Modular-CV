<template>
    <div class="cv">
        <v-header>
            <h1>{{cv.person}}</h1>
        </v-header>
        <main class="home">
            <article class="contact">
                <component v-for="(section, i) in personal" :key="i" :is="section">
                    <component v-for="(entry, j) in getPersonalEntries(i)" :key="j" :is="entry" />
                </component>
            </article>
            <article class="sections">
                <component v-for="(section, i) in sections" :key="i" :is="section">
                    <component v-for="(entry, j) in getEntries(i)" :key="j" :is="entry" />
                </component>
            </article>
        </main>
        <v-footer v-if="cv.showFooter">
            <p>Wyrażam zgodę na przetwarzanie moich danych osobowych przez <b>{{cv.company}}</b> w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.</p>
        </v-footer>
    </div>
</template>

<script lang="ts">
import Vue, { Component } from 'vue';
import ComponentDecorator from 'vue-class-component';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import cv from '@/data/cv';
import { Section } from '@/classes/Section';

@ComponentDecorator({
    components: {
        'v-header': Header,
        'v-footer': Footer
    },
    metaInfo: {
        title: `${cv.person} CV | ${cv.company}`
    }
})
export default class Home extends Vue {
    readonly cv = cv;

    public getEntries(i: number): Array<Component> {
        return this.cv.sections[i].entriesComponents;
    }

    public getPersonalEntries(i: number): Array<Component> {
        return this.cv.personal[i].entriesComponents;
    }

    public get sections(): Array<Component> {
        return this.cv.sections.map(section => section.component);
    }

    public get personal(): Array<Component> {
        return this.cv.personal.map(section => section.component);
    }
}
</script>

<style lang="sass" scoped>
.cv
    margin: 1cm
    width: calc(100% - 2cm)
    display: block

.header

.home
    display: grid
    grid-template-columns: 2fr 5fr
    column-gap: 2em

    @media (max-width: 148mm)
        grid-template-columns: 1fr
</style>