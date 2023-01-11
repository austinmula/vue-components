<script>
import ColorGenerator from './components/ColorGenerator.vue';
import TabOne from './components/tabs/TabOne.vue';
import TabTwo from './components/tabs/TabTwo.vue';
import TabThree from './components/tabs/TabThree.vue';

export default {
    components: {
        ColorGenerator,
        TabOne,
        TabTwo,
        TabThree
    },
    data() {
        return {
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
    <div class="container">

        <!-- navigation -->
        <router-link to="/">Home</router-link> |
        <router-link to="/features">Features</router-link>
        <router-view />
        <button @click="activeTab = 'TabOne'">TabOne</button>
        <button @click="activeTab = 'TabTwo'">TabTwo</button>
        <button @click="activeTab = 'TabThree'">TabThree</button>

        <keep-alive>
            <component :is="activeTab" />
        </keep-alive>

    </div>

</template>

<style lang="scss">
@import "./styles.scss";
</style>
