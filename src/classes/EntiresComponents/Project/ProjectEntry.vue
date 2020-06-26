<template>
    <v-entry-template :name="name" class="project-entry">
        <template v-slot:header>
            <ul class="project-entry__links">
                <li class="project-entry__links__element" v-for="(link, i) in links" :key="i">
                    <a :href="link.link"><component :is="link.component" /></a>
                </li>
            </ul>
        </template>
        <ul class="project-entry__stack">
            <li
                class="project-entry__stack__element"
                v-for="(tech, i) in stack"
                :key="i"
                :style="hoverStyle(i)"
            >{{tech.name}}</li>
        </ul>
        <span v-html="description" />
    </v-entry-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EntryTemplate from '../EntryTemplate.vue';
import { Technology } from '../../Technology';

import { Link } from '@/classes/Link';

@Component({
    components: {
        'v-entry-template': EntryTemplate
    }
})
export default class ProjectEntry extends Vue {
    private name!: string;
    private stack!: Array<Technology>;
    private description!: string;
    private links!: Array<Link>;

    hoverStyle(i: number) {
        return {
            '--background-color-hover': `#${this.stack[i].color}`,
            '--color-hover': `#${this.stack[i].textColor}`
        };
    }
}
</script>

<style lang="sass" scoped>
@import '@/styles/styles.sass'

.project-entry
    &__links
        display: flex

        &__element
            margin-right: .5em
            display: block
            max-width: 24px
            max-height: 24px
            transition-duration: .2s

    &__stack
        display: flex
        flex-wrap: wrap
        &__element
            margin: .25em 0
            display: flex
            text-align: center
            align-items: center
            cursor: default
            font-size: .8em
            padding: .25em 1em
            margin-right: 1em
            border: 1px solid $main-color
            border-radius: 2px
            transition-duration: .2s
            &:hover
                color: var(--color-hover)
                background-color: var(--background-color-hover)
                border-color: var(--background-color-hover)

</style>