<template>
    <div class="user">
        <img 
            @click="toggleAdress"
            :src="user.avatar" 
            alt="avatar"
            class="user-avatar"
        >
        <div>
            <div class="user-title" v-html="user.title"></div>
            <span class="user-text" v-html="user.subtitle"></span>
            <div class="user-adress" v-if="showAdress == 1" v-html="user.adress"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        user: {
            type: Object,
            required: true,
            default: () => {}
        }
    })

    const showAdress = ref(0)

    function toggleAdress() {
        if(showAdress.value == 0){
            showAdress.value = 1
        } else {
            showAdress.value = 0
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        display: grid;
        grid-template-columns: 50px 1fr;
        align-items: center;
        column-gap: 30px;
        margin-bottom: 10px;
        border: 2px solid #efefef;
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 10px;
        max-width: 400px;

        &-avatar {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
        }

        &-title {
            display: flex;
            align-items: center;
            font-size: 20px;
            margin-bottom: 8px;
        }

        &-text {
            display: block;
            margin-bottom: 5px;
        }
    }
    .d-none {
        display: none;
    }
</style>