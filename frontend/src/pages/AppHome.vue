<template>
    <v-app id="inspire">
        <MainMenu />

        <v-main>
            <HelloWorld />
        </v-main>

        <v-footer app>
            <span>&copy; 2023</span>
        </v-footer>
    </v-app>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import MainMenu from '../components/MainMenu.vue';
</script>

<script>
export default {
    components: { HelloWorld, MainMenu },
    data: () => ({}),
};
</script>
