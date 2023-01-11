<script>
export default {
    props: ['red', 'green', 'blue'],
}
</script>

<template>
    <div class="container">
        <div :style="{ background: `rgb(${red}, ${green}, ${blue})` }" class="color-pick">
            <button @click="$emit('generate')">Generate</button>
        </div>
        <p>RGB {{ red }} , {{ blue }}, {{ green }}</p>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
}
</style>