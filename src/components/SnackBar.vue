<template>
       <v-locale-provider rtl>
        <v-snackbar class="pa-3"
      v-model="snd" 
      :color="snbg"
    >
      {{ snt }}

    </v-snackbar>
       </v-locale-provider>
    </template>
    <script>
    import {mapState} from 'vuex';
    export default{
        data(){
            return{

            }
        },
computed:{
    ...mapState(['snd','snt','snbg'])
}
    }
    </script>