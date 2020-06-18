<template>
    <v-entry-template :name="name">
        <span v-html="description"/>
    </v-entry-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EntryTemplate from '../EntryTemplate.vue';

@Component({
    components: {
        'v-entry-template': EntryTemplate
    }
})
export default class SkillEntry extends Vue {
    private name!: string;
    private description!: string;
}
</script>

<style lang="sass" scoped>

</style>