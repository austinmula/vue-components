<template>
    <h1>{{ topic }}</h1>
    <div class="university_card_container">
        <UniversityCard v-for="uni in universities" :key="uni.id" :university="uni.university" :country="uni.country"
            :population="uni.population" />
    </div>
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
