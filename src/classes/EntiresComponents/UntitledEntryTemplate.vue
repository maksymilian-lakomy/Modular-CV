<template>
    <li class="untitled-entry">
        <slot></slot>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class UntitledEntryTemplate extends Vue {
}
</script>
