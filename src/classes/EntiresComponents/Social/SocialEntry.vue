<template>
    <v-untitled-entry-template>
        <a
            class="social-entry-link"
            v-for="(link, i) in links"
            :key="i"
            :href="link.link"
            @mouseenter="over=link.name"
            @mouseleave="over=null"
        >
            <component :is="link.component" class="social-entry-link__icon" />
            <div class="social-entry-link__text">
                <transition name="component-fade">
                    <span :key="over" v-if="over === link.name">{{link.name}}</span>
                    <span v-else>{{link.text}}</span>
                </transition>
            </div>
        </a>
    </v-untitled-entry-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import UntitledEntryTemplate from '../UntitledEntryTemplate.vue';
import { Link } from '@/classes/Link';

@Component({
    components: {
        'v-untitled-entry-template': UntitledEntryTemplate
    }
})
export default class SocialEntry extends Vue {
    private name!: string;
    private links!: Array<Link>;

    private over: string | null = null;
}
</script>

<style lang="sass" scoped>
a
    text-decoration: none
    color: inherit
    
.social-entry-link
    position: relative
    display: flex
    align-items: center
    margin: 1em 0
    transition-duration: .2s

    &__icon
        display: block
        max-height: 1.5em
        max-width: 1.5em
        margin-right: .5em

    &__text
        position: relative
        width: 100%
        display: flex
        align-items: center

        span
            display: inline-block
            position: absolute
            left: 0
    

.component-fade-enter-active,
.component-fade-leave-active
    transition: all .4s ease
    

.component-fade-enter, .component-fade-leave-to
    opacity: 0

</style>