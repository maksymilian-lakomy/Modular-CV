<template>
    <div class="icon">
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class IconTemplate extends Vue {}
</script>

<style lang="sass" scoped>
.icon
    display: block
</style>