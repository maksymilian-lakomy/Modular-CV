<template>
    <v-entry-template :name="name">
        <p>{{specialization}}</p>
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
export default class EducationEntry extends Vue {
    private name!: string;
    private specialization!: string;   
    private start!: Date;
    private end!: Date | null;
}
</script>

<style lang="sass" scoped>
    
</style>