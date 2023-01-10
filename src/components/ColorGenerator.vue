<script>
export default {
    props: ['red', 'green', 'blue'],
}
</script>

<template>
    <div>
        <div :style="{ background: `rgb(${red}, ${green}, ${blue})` }" class="color-pick">
            <button @click="$emit('generate')">Generate</button>
        </div>
        <p>RGB {{ red }} , {{ blue }}, {{ green }}</p>
    </div>
</template>