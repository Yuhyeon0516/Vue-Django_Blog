<template>
    <v-app id="inspire">
        <MainMenu />
        <v-main>
            <PostDetail />
        </v-main>

        <v-footer app>
            <span>&copy; 2023</span>
        </v-footer>
    </v-app>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue';

import PostDetail from '../components/PostDetail.vue';
</script>

<script>
export default {
    components: { PostDetail, MainMenu },
    data: () => ({}),
};
</script>
