<template>
    <v-section-template :name="name">
        <ol class = "inline-section">
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
export default class InlineSection extends Vue {
    readonly name!: string;
}
</script>

<style lang="sass" scoped>
.inline-section
    display: grid
    grid-template-columns: repeat(3, 1fr)
    column-gap: 1em
    @media (max-width: 148mm)
        grid-template-columns: 1fr

</style>