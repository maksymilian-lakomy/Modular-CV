<template>
    <v-untitled-entry-template :name="name">
        <figure class="photo-entry">
            <img :src="image" />
        </figure>
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
export default class Photo extends Vue {
    private name!: string;
    private image!: string;
}
</script>

<style lang="sass" scoped>
.photo-entry
    display: block
    padding: 0
    margin: 0

    img
        width: 100%
        height: 100%
        border-radius: 4px
</style>