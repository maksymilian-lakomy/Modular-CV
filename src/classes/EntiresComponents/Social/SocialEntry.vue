<template>
    <v-untitled-entry-template>
        <a
            :href="link.link"
            class="social-entry-link"
            @mouseenter="over=true"
            @mouseleave="over=false"
        >
            <component :is="link.component" class="social-entry-link__icon" />
            <div class="social-entry-link__text">
                <transition name="component-fade">
                    <span :key="over">{{text}}</span>
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
    private link!: Link;

    private over = false;

    private get text(): string {
        return this.over ? this.link.name : this.name;
    }
}
</script>

<style lang="sass" scoped>
a
    text-decoration: none
    color: inherit
    
.social-entry-link
    position: relative
    opacity: .75
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
    
    &:hover
        opacity: 1

.component-fade-enter-active,
.component-fade-leave-active
    transition: all .4s ease
    

.component-fade-enter, .component-fade-leave-to
    opacity: 0

</style>