<template>
    <div id="app" :class="{'app--print': print}">
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
    private get print(): boolean {   
        if (this.$route.query.print !== undefined)
            return true;
        return false;
    }
}
</script>

<style lang="sass">
@import '@/styles/styles.sass'

@font-face
    font-family: 'Ubuntu'
    src: url('./assets/fonts/Ubuntu-Regular.ttf') format('truetype')
    font-weight: 400

@font-face
    font-family: 'Ubuntu'
    src: url('./assets/fonts/Ubuntu-Medium.ttf') format('truetype')
    font-weight: 500

@font-face
    font-family: 'Ubuntu'
    src: url('./assets/fonts/Ubuntu-Bold.ttf') format('truetype')
    font-weight: 700

#app
    margin: auto
    font-size: 11pt
    max-width: 70%

    @media (max-width: 148mm)
        max-width: 100%

.app--print
    max-width: 21cm !important
    font-size: 9pt !important

a
    color: $link-color
    font-weight: bolder
    word-break: break-all

svg
    display: block
    width: 100%
    height: 100%

body
    font-family: Ubuntu, Arial, Helvetica, sans-serif
    margin: 0 auto
    background-color: white
    color: $main-color

ol, ul
    margin: 0
    padding: 0

li
    list-style: none

p
    letter-spacing: .03em
    line-height: 2em
</style>
