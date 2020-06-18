<template>
    <v-untitled-entry-template>
        <span v-html="description"/>
    </v-untitled-entry-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import UntitledEntryTemplate from '../UntitledEntryTemplate.vue';

@Component({
    components: {
        'v-untitled-entry-template': UntitledEntryTemplate
    }
})
export default class DefaultEntry extends Vue {
    private description!: string;
}
</script>
