<template>
    <div class="container">
        <div class="info__wrapper">
            <h2 class="info__title">You searched for: {{movie}}, {{count}} results</h2>
        </div>
    </div>
</template>

<script setup>
    import { computed, onMounted, watch } from 'vue';
    import store from '../store';
    const movie = computed(() => store.state.searchParam);
    const count = computed(() => store.state.totalResults);
</script>

<style scoped>
.info__wrapper{
    margin: 20px 0;
}
.info__title{
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.4;
    color: #2a2c52;
}
</style>
