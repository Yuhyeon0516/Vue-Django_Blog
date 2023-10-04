<template>
    <v-app id="inspire">
        <MainMenu />

        <v-main>
            <PostList />
        </v-main>

        <v-footer app>
            <span>&copy; 2023</span>
        </v-footer>
    </v-app>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue';

import PostList from '../components/PostList.vue';
</script>

<script>
export default {
    components: { PostList, MainMenu },
    data: () => ({}),
};
</script>
