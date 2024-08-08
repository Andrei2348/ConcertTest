<template>
    <Header />
    <div class="container">
        <div v-if="!isLoading">
            <div class="main__wrapper" v-if="movies && startSearching">
                <InfoComponent />
                <ResultsComponent/>
                <PaginationComponent />
            </div>
            <div class="main__message" v-if="!movies && startSearching">Nothing was found for your query</div>
            <div class="main__message" v-if="!startSearching">Enter the name of the movie</div>
        </div>
        <div class="main__message" v-else>
          Loading.......
        </div>
    </div>
</template>
<script setup>
    import Header from './components/HeaderComponent.vue';
    import ResultsComponent from './components/ResultsComponent.vue';
    import InfoComponent from './components/InfoComponent.vue';
    import PaginationComponent from './components/PaginationComponent.vue';
    import store from './store';
    import { computed } from 'vue';
    const movies = computed(() => store.state.searchResults);
    const startSearching = computed(() => store.state.startSearching);
    const isLoading = computed(() => store.state.isLoading);
</script>

<style scoped>
.main__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.main__message{
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.4;
    color: #2a2c52;
}
</style>
