<template>
    <div class="card">
      <div class="card__image-container">
        <img
          class="card__image"
          :src="`${poster}`"
          :alt="poster"
        />
    </div>
    <div class="card__content">
        <p class="card__title">imdbID: <span>{{ id }}</span></p>
        <p class="card__title">Title: <span>{{ title }}</span></p>
        <p class="card__title">Year: <span>{{ year }}</span></p>
        <p class="card__title">Type: <span>{{ type }}</span></p>
    </div>
    </div>
</template>
  
<script setup>
    defineProps({
        id: String,
        title: String,
        year: String,
        type: String,
        poster: String,
    })
</script>
<style scoped lang='scss'>
.card{
    width: 220px;
    border: 1px solid #2a2c5240;
    padding: 10px;
    border-radius: 4px;
    &__image-container{
        height: 296px;
        width: 200px;
    }
    &__image{
        border-radius: 5px;
        height: 100%;
        width: 100%;
    }
    &__content{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    &__title{
        font-size: 14px;
        font-weight: 500;
        line-height: 1.4;
        color: #2a2c52;
    }
    &__title span{
        font-weight: 300;
        margin-left: 7px;
    }
}
</style>