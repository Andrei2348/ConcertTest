<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar__wrapper">
                <a href="#" class="navbar__logo">Movie Catalog</a>
                <InputComponent />
                <a href="#" class="navbar__user">Aleksandr Borisenko</a>
            </div>
        </div>
    </nav>.
</template>

<script setup>
import InputComponent from './InputComponent.vue'
</script>

<style lang="scss" scoped>
.navbar{
    background-color: #2a2c52;
    &__wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
    }
    &__logo,
    &__user{
        font-size: 16px;
        font-weight: 500;
        line-height: 1.3;
        color: #fff;
    }
}
</style>
