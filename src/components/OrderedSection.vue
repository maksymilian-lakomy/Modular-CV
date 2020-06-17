<template>
    <v-section-template :name="name">
        <ol>
            <slot />
        </ol>
    </v-section-template>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import SectionTemplate from './SectionTemplate.vue';

@Component({
    components: {
        'v-section-template': SectionTemplate
    }
})
export default class OrderedSection extends Vue {
    readonly name!: string;
}
</script>