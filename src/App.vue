<script>
import { universityData } from './dummy'
import UniversityCard from './components/UniversityCard.vue';
import ColorGenerator from './components/ColorGenerator.vue';
import TabOne from './components/tabs/TabOne.vue';
import TabTwo from './components/tabs/TabTwo.vue';
import TabThree from './components/tabs/TabThree.vue';

export default {
    components: {
        UniversityCard,
        ColorGenerator,
        TabOne,
        TabTwo,
        TabThree
    },
    data() {
        return {
            universities: universityData,
            topic: "Randomly Generated Data",
            filterkey: 0,
            red: 0,
            green: 0,
            blue: 0,
            activeTab: 'TabOne'
        }
    }, methods: {
        filterdata() {
            this.universities = this.universities.filter((i) => i.population < this.filterkey)
        },
        sortData() {
            this.universities = this.universities.sort((a, b) => a.population > b.population ? -1 : 1)
        }, generateRand() {
            this.red = Math.floor((Math.random() * 255) + 0)
            this.blue = Math.floor((Math.random() * 255) + 0)
            this.green = Math.floor((Math.random() * 255) + 0)
        }
    }
}

</script>

<template>
    <button @click="activeTab = 'TabOne'">TabOne</button>
    <button @click="activeTab = 'TabTwo'">TabTwo</button>
    <button @click="activeTab = 'TabThree'">TabThree</button>

    <component :is="activeTab" />
    <!-- color generator with data from child to parent -->

    <ColorGenerator :red="red" :blue="blue" :green="green" @generate="generateRand" />
    <input type="number" name="filter-key" v-model="filterkey" />
    <p>{{ filterkey }}</p>

    <button v-on:click="filterdata">Filter</button>
    <button v-on:click="sortData">Sort</button>
    <h1>{{ topic }}</h1>
    <UniversityCard v-for="uni in universities" :key="uni.id" :university="uni.university" :country="uni.country"
        :population="uni.population" />
</template>

<style lang="scss">
@import "./styles.scss";
</style>
