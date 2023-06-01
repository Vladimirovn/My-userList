<template>
    <div class="filter">
        <select class="filter-country" v-model="userStore.filters.country">
            <option value="" disabled>Choose a country...</option>
            <option value="russia">Russia</option>
            <option value="usa">USA</option>
        </select>
        <select class="filter-score" v-model="userStore.filters.score">
            <option value="" disabled>Choose a score...</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <div class="filter-btn">
            <button class="btn filter-btn-search" @click="userStore.filterUser">Search</button>
            <button class="btn filter-btn-reset" @click="userStore.resetFilter">Cansel</button>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from "@/stores/UserStore"

    const userStore = useUserStore()
</script>

<style lang="scss" scoped>
    .filter {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border: 2px solid #efefef;
        border-radius: 10px;
        max-height: 140px;
        margin-right: 20px;

        &-country {
            margin-top: 20px;
        }
    }

    select {
        appearance: none;
        width: 400px;
        height: 40px;
        border: 2px solid #efefef;
        border-radius: 10px;
        margin-bottom: 20px;
        padding-left: 10px;
        font-size: 1em;
    }

    .filter-btn {
        display: flex;

        &-search {
            margin-right: 10px;
        }
    }

    .btn {
        background: #7BC6FF;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        color: black;
        font: 1.05rem/1 "Nunito", sans-serif;
        overflow: hidden;
        width: 10em;
        height: 1.5em;
        text-transform: lowercase;
    }
</style>