<template>
    <li class="entry">
        <hgroup class="entry__header-group">
            <h3 class="entry__header-group__title">{{name}}</h3>
            <slot name="header"/>
        </hgroup>
        <slot />
    </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Prop } from 'vue-property-decorator';

@Component
export default class EntryTemplate extends Vue {
    @Prop({required: true, type: String})
    readonly name!: string;
}
</script>

<style lang="sass" scoped>
@import '@/styles/styles.sass'

.entry
    &__header-group
        display: flex
        align-items: center
        position: relative
        padding-left: 1em
        &::before
            position: absolute
            left: 0
            content: ''
            top: 25%
            height: 50%
            width: 2px
            background-color: $main-color
        &__title
            margin-right: .75em
</style>