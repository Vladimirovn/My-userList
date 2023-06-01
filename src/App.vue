<template>
    <!-- {{ userStore.usersList }} -->
    <header class="header">
      <img src="@/assets/logo.svg" alt="logo" class="header-logo">
      <h2>My TZ UserList</h2>
    </header>
    <Loader v-show="userStore.loader"/>
    <div class="users">
      <Filters />
      
      <div class="users-list">
        <UserList v-for="user of userStore.users"
        :key="user.id"
        :user="user"
        />
      </div>
      
    </div>
      
</template>

<script setup>
  import { useUserStore } from "@/stores/UserStore"
  import UserList from '@/components/UserList.vue';
  import Filters from '@/components/Filters.vue';
  import Loader from '@/components/Loader.vue'

  const userStore = useUserStore()

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    &-logo {
      max-width: 50px;
      margin-right: 10px;
    }
  }
  .users {
    display: flex;
    justify-content: center;

    &-list {
      display: flex;
      flex-direction: column;
    }
  }
</style>
