<script>
export default {
    props: ['university', 'population', 'country'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <h3>{{ university }}</h3>
        <p>{{ country }}</p>
        <p>{{ population }}</p>
    </div>
</template>