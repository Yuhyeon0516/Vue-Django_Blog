<template>
    <div>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-cog</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="indigo" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Vue.js - Django Web Blog</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text href="/">Home</v-btn>
            <v-btn text href="/blog/post/list/">Blog</v-btn>
            <v-btn text href="/admin/">Admin</v-btn>
            <v-btn text>/</v-btn>
            <v-btn text href="/post_list.html">POSTLIST</v-btn>
            <v-btn text href="/post_detail.html">POSTDETAIL</v-btn>

            <v-spacer></v-spacer>

            <v-menu offset-y left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                        <v-icon class="mr-2">mdi-account</v-icon>Anonymous
                        <v-icon class="ml-1">mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="dialog = true">
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Password Change</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-dialog v-model="dialog" max-width="600">
            <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form id="login-form" ref="loginForm">
                        <v-text-field label="Username" name="username" prepend-icon="mdi-account" type="text"></v-text-field>
                        <v-text-field label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" @click="dialog = false">Cancel</v-btn>
                    <v-btn color="primary" class="mr-5" @click="dialog = false">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        dialog: true,
    }),
};
</script>

<style></style>
