<template>
    <button class="pagination__button" @click="handleClick" :disabled="value === selectedPage">
        {{ title }}
    </button>
</template>

<script setup>
    import { computed } from 'vue';
    import store from '../store';
    const emit = defineEmits(['switchToPage'])
    const props = defineProps({
        value: Number,
        title: String
    })
    const selectedPage = computed(() => store.state.selectedPage);

    const handleClick = () => {
        emit('switchToPage', props.value)
    }
</script>

<style scoped>
.pagination__button{
    height: 30px;
    padding: 7px 12px;
    border-radius: 30px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #b34405;
    color: #fff;
    font-size: 16px;
    line-height: 1;
    font-weight: 500;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    transition: all ease 0.5s;
}
.pagination__button:hover{
    background-color: #742f07;
}
.pagination__button:disabled{
    background-color: #915e41;
    cursor: default;
}
</style>
