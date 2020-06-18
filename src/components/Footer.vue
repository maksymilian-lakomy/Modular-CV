<template>
    <footer class="footer">
        <slot/>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {

}
</script>

<style lang="sass" scoped>
@import '@/styles/styles'

.footer
    text-align: center
    display: block
    margin-top: 1em
    padding-top: 1em
    border-top: 2px solid $header-color
</style>