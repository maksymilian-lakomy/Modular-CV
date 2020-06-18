<template>
    <v-entry-template :name="name">
        <template v-slot:header>
            <section class="timestamps">
                <span class = "timestamps__date">
                    Od {{start | date}}
                </span>
                <span class = "timestamps__date" v-if="end !== null">
                    Do {{end | date}}
                </span>
                <span class = "timestamps__date" v-else>
                    Obecnie
                </span>
            </section>
        </template>
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
    },
    filters: {
        date(date: Date): string {
            let month = date.getMonth().toString();
            while (month.length < 2) month = '0' + month;
            return date.getFullYear() + '-' + month;
        }
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
.timestamps
    display: flex
    flex-direction: column

    &__date
        margin: .25em 0
        font-weight: bolder
</style>