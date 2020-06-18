<template>
    <header class="header">
        <slot/>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Header extends Vue {

}
</script>

<style lang="sass" scoped>
@import '@/styles/styles'

.header
    display: block
    margin-bottom: 1em
    padding-bottom: 1em
    border-bottom: 2px solid $header-color
    letter-spacing: .1em
    font-size: 1.25em
</style>