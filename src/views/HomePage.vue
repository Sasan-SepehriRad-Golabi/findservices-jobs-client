<template>
        <FirstPrepare />
    <MainNavBar transition="fade-transition" />
    <v-locale-provider ltr>
    <v-progress-linear class="w-100" :style="{'display':pgd?'flex':'none','margin-top':70+'px','position':'fixed','z-index':3000000}"
      v-model="pgv"
      color="red"
    ></v-progress-linear>
  </v-locale-provider>
   <router-view></router-view>
   <NavigationDrawer />
   <SnackBar/>
</template>

<script>
import {mapState} from "vuex"
import MainNavBar from "@/components/MainNavBar";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import FirstPrepare from "@/components/FirstPrepare.vue";
import SnackBar from "@/components/SnackBar.vue"

export default {
    components: {
        MainNavBar, NavigationDrawer,FirstPrepare,SnackBar
    },
    data() {
        return {
            tt:true
        }
    },
     computed:{
        ...mapState(["pgd","pgv",'snd','snt'])
     }
}
</script>
<style scoped></style>