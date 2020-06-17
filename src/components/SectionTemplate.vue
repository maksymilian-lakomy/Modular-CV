<template>
    <section class="section">
        <h2 class="section__header">
            {{name}}
            <div class="section__header__separator" />
        </h2>
        <slot />
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class SectionTemplate extends Vue {
    @Prop({ required: true, type: String })
    readonly name!: string;
}
</script>

<style lang="sass" scoped>
@import '@/styles/styles.sass'

.section
    &__header
        position: relative
        text-transform: uppercase
        letter-spacing: .1em
        &__separator
            bottom: calc(-50% + 2px)
            position: absolute
            width: 1cm
            height: 2px
            background-color: $main-color
            border-radius: 2px


</style>