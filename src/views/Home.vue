<template>
    <div class="cv">
        <header class="header">
            <h1>Maksymilian Łakomy</h1>
            <h2>Front End Developer</h2>
        </header>
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
        <footer></footer>
    </div>
</template>

<script lang="ts">
import Vue, { Component } from 'vue';
import ComponentDecorator from 'vue-class-component';

import cv from '@/data/cv';
import { Section } from '@/classes/Section';

@ComponentDecorator
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
    grid-template-columns: 1fr 3fr
    column-gap: 2em
    @media (max-width: 960px)
        grid-template-columns: 2fr 3fr

    @media (max-width: 640px)
        grid-template-columns: 1fr
</style>