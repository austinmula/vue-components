<script>
import ColorGenerator from '../components/ColorGenerator.vue';

export default {
    components: {
        ColorGenerator,
    },
    data() {
        return {
            red: 0,
            green: 0,
            blue: 0,
        }
    }, methods: {
        generateRand() {
            this.red = Math.floor((Math.random() * 255) + 0)
            this.blue = Math.floor((Math.random() * 255) + 0)
            this.green = Math.floor((Math.random() * 255) + 0)
        }
    }
}

</script>

<template>
    <div class="container">
        <ColorGenerator :red="red" :blue="blue" :green="green" @generate="generateRand" />
        <input type="number" name="filter-key" v-model="filterkey" />
    </div>

</template>

