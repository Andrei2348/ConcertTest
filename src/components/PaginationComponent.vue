<template>
    <div class="pagination__wrapper">
        {{ selectedPage }}
        {{ totalPages }}
    </div>
</template>

<script setup>
    import { computed, onMounted, watch } from 'vue';
    import store from '../store';
    const selectedPage = computed(() => store.state.selectedPage);
    const totalPages = computed(() => store.state.totalPages);
</script>

<style scoped>

</style>
