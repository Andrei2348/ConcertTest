<template>
    <section class="results">
        <div class="results-list" v-if="movies.length > 0 && isLoading === false">
            <MovieComponent
            v-for="item in movies"
            :id="item.imdbID"
            :key="item.imdbID"
            :title="item.Title"
            :year="item.Year"
            :type="item.Type"
            :poster="item.Poster"
            />
        </div>
    </section>
</template>

<script setup>
    import { computed } from 'vue';
    import store from '../store';
    import MovieComponent from './MovieComponent.vue';
    const movies = computed(() => store.state.searchResults);
    const isLoading = computed(() => store.state.isLoading);
</script>

<style lang="scss" scoped>
.results-list{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 220px));
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
}
</style>
