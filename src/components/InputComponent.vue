<template>
    <div class="search__input-wrapper">
        <input
            class="search__input"
            type="text"
            placeholder="Enter the name of the movie"
            @input="searchBeer"
        />
    </div>
</template>

<script setup>
  import debounce from 'lodash.debounce';
  import store from '../store';

  const searchBeer = debounce((event) => {
  store.dispatch('setSearchParamToStore', event.target.value);
}, 800)
</script>

<style lang="scss" scoped>
.search__input{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: #333333;
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    background-color: #e9e9e9;
    outline: none;
    width: 300px;
}
.search__input::placeholder{
    color: #33333343;
}
</style>
