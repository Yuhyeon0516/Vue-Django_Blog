<template>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" lg="10">
                <h1>Post title here</h1>
                <p>2023-10-04, written by yhkim</p>
            </v-col>
        </v-row>

        <v-row align="start" justify="center">
            <v-col cols="12" sm="8" lg="7">
                <v-card class="pa-2" outlined tile>
                    <p>
                        I study Vue.js and Django
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        And more Vuetify.
                    </p>
                    <div>
                        <strong>TAGS:</strong>
                        <v-chip class="ma-2" outlined> Python </v-chip>
                        <v-chip class="ma-2" outlined> Django </v-chip>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" sm="4" lg="3">
                <v-card class="pa-2 mb-5" tile>
                    <p>prev post</p>
                    <h2>Previous title here</h2>
                </v-card>

                <v-card class="pa-2 mb-5" tile>
                    <p>next post</p>
                    <h2>Next title here</h2>
                </v-card>

                <v-card class="pa-2" tile>
                    <h2>Tag cloud</h2>
                    <v-chip class="ma-2" color="green" text-color="white">
                        <v-avatar left class="green darken-4">1</v-avatar>
                        Python
                    </v-chip>
                    <v-chip class="ma-2" color="green" text-color="white">
                        <v-avatar left class="green darken-4">3</v-avatar>
                        Django
                    </v-chip>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HelloWorld',

    data: () => ({}),
};
</script>
