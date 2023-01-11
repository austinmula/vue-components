<template>
    <p>Home page</p>
    <p>{{ filterkey }}</p>

    <button v-on:click="filterdata">Filter</button>
    <button v-on:click="sortData">Sort</button>
    <h1>{{ topic }}</h1>
    <UniversityCard v-for="uni in universities" :key="uni.id" :university="uni.university" :country="uni.country"
        :population="uni.population" />
</template>

<script>
import { universityData } from '../dummy'
import UniversityCard from '../components/UniversityCard.vue';


export default {
    data() {
        return {
            filterkey: 5423,
            topic: "Randomly Generated data",
            universities: universityData,
        }
    }, components: {
        UniversityCard
    }
}

</script>
