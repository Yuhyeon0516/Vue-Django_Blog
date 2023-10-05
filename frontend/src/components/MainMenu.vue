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
                    <v-list-item @click="dialog.login = true">
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="dialog.register = true">
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="dialog.passwordChange = true">
                        <v-list-item-title>Password Change</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- login dialog -->
        <v-dialog v-model="dialog.login" max-width="600">
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
                    <v-btn text color="grey" @click="cancel('login')">Cancel</v-btn>
                    <v-btn color="primary" class="mr-5" @click="save('login')">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- register dialog  -->
        <v-dialog v-model="dialog.register" max-width="600">
            <v-card class="elevation-12">
                <v-toolbar color="success" dark flat>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form id="register-form" ref="registerForm">
                        <v-text-field label="Username" name="username" prepend-icon="mdi-account" type="text"></v-text-field>
                        <v-text-field label="Password" name="password1" prepend-icon="mdi-lock" type="password"></v-text-field>
                        <v-text-field label="Password Confirm" name="password2" prepend-icon="mdi-lock" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" @click="cancel('register')">Cancel</v-btn>
                    <v-btn color="success" class="mr-5" @click="save('register')">Register</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- password change dialog  -->
        <v-dialog v-model="dialog.passwordChange" max-width="600">
            <v-card class="elevation-12">
                <v-toolbar color="warning" dark flat>
                    <v-toolbar-title>Password Change</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form id="passwordChange-form" ref="passwordChangeForm">
                        <v-text-field label="Old Password" name="old_password" prepend-icon="mdi-lock" type="password"></v-text-field>
                        <v-text-field label="New Password" name="new_password1" prepend-icon="mdi-lock" type="password"></v-text-field>
                        <v-text-field label="New Password Confirm" name="new_password2" prepend-icon="mdi-lock" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" @click="cancel('passwordChange')">Cancel</v-btn>
                    <v-btn color="warning" class="mr-5" @click="save('passwordChange')">Change</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default {
    data: () => ({
        drawer: null,
        dialog: {
            login: false,
            register: false,
            passwordChange: false,
        },
        me: {},
    }),
    methods: {
        cancel(kind) {
            console.log('cancel..', kind);
            if (kind === 'login') {
                this.dialog.login = false;
                this.$refs.loginForm.reset();
            } else if (kind === 'register') {
                this.dialog.register = false;
                this.$refs.registerForm.reset();
            } else if (kind === 'passwordChange') {
                this.dialog.passwordChange = false;
                this.$refs.passwordChangeForm.reset();
            }
        },

        save(kind) {
            console.log('save..', kind);

            if (kind === 'login') {
                this.login();
                this.dialog.login = false;
                this.$refs.loginForm.reset();
            } else if (kind === 'register') {
                this.register();
                this.dialog.register = false;
                this.$refs.registerForm.reset();
            } else if (kind === 'passwordChange') {
                this.passwordChange();
                this.dialog.passwordChange = false;
                this.$refs.passwordChangeForm.reset();
            }
        },

        login() {
            console.log('login..');
            const loginForm = document.getElementById('login-form');
            const postData = new FormData(loginForm);

            axios
                .post('/api/login/', postData)
                .then((res) => {
                    console.log('Login post res:', res);
                    this.me = res.data;
                })
                .catch((err) => {
                    console.log('login post err:', err);
                    alert(err.message);
                });
        },

        register() {},

        passwordChange() {},
    },
};
</script>

<style></style>
