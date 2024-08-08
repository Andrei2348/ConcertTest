<template>
    <div class="pagination">
        <div class="pagination__wrapper">
            <div class="pagination-list" v-if="paginationArray.length > 1">
                <PaginationButton
                v-for="item in paginationArray"
                :key="item"
                :value="item"
                @switchToPage="switchToPage"
                />
            </div>
            <p>Page {{  selectedPage }} of {{ totalPages }}</p>
        </div>
    </div>
</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import store from '../store';
    import PaginationButton from './PaginationButton.vue'
    const selectedPage = computed(() => store.state.selectedPage);
    const totalPages = computed(() => store.state.totalPages);
    const paginationArray = ref([])

    const createArrayFromNumber = (start, len) => {
        return Array.from({length: len}, (_, index) => start + index);
    }

    const switchToPage = (value) => {
        store.dispatch('setCurrentPage', value);
    }

    onMounted( () => {
        let arrayLength = 5;
        arrayLength = (store.state.totalPages > 5 ? 5 : store.state.totalPages);
        // Если в находимся в начале массива
        if(store.state.selectedPage >= 3 && store.state.totalPages > 6){
            paginationArray.value = createArrayFromNumber(store.state.selectedPage - 2, arrayLength);
        }
        // Если приближаемся к концу массива
        if(store.state.selectedPage === store.state.totalPages){
            paginationArray.value = createArrayFromNumber(store.state.totalPages - 5, arrayLength);
        }

        if(store.state.selectedPage + 2 >= store.state.totalPages){
            paginationArray.value = createArrayFromNumber(store.state.totalPages - 4, arrayLength);
        }

        if(store.state.selectedPage < 2 ){
            paginationArray.value = createArrayFromNumber(1, arrayLength);
        }
    });
</script>

<style scoped>
.pagination{
    margin: 30px 0;
    display: flex;
    justify-content: center;
}
.pagination-list{
    display: flex;
    align-items: center;
    gap: 10px;
}
.pagination__wrapper{
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>
