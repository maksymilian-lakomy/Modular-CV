<template>
    <router-view />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {

}
</script>

<style lang="sass">
@import '@/styles/styles.sass'

@font-face
    font-family: 'Source Sans Pro'
    src: url('./assets/fonts/SourceSansPro-Regular.ttf') format('truetype')
    font-weight: 400

@font-face
    font-family: 'Source Sans Pro'
    src: url('./assets/fonts/SourceSansPro-SemiBold.ttf') format('truetype')
    font-weight: 500

@font-face
    font-family: 'Source Sans Pro'
    src: url('./assets/fonts/SourceSansPro-Bold.ttf') format('truetype')
    font-weight: 700

@font-face
    font-family: 'Source Sans Pro'
    src: url('./assets/fonts/SourceSansPro-Black.ttf') format('truetype')
    font-weight: 900

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
    font-size: 9pt
    max-width: 21cm
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
