<template>
        <MainSearch class="bg-grey-lighten-3" />
        <RecentJobs />
    <MainDescription  />
   
    <WelcomeDialogs />
    <MainFooter/>
</template>
<script>
import MainSearch from "@/components/MainSearch.vue";
import MainDescription from "@/components/MainDescription.vue";
import WelcomeDialogs from "@/components/WelcomeDialogs.vue";
import MainFooter from "@/components/MainFooter.vue";
import RecentJobs from "@/components/RecentJobs.vue";
export default{
    data(){
        return{

        }
    },
    components:{
        MainSearch,MainDescription,RecentJobs,WelcomeDialogs,MainFooter
    },
    created(){
        console.log(window.history);
    }
}
</script>