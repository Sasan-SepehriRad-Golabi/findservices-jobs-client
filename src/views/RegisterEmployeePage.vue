<template>
    <v-locale-provider rtl>
        <v-card class="mt-15" elevation="0">
        <v-tabs class="my-2"
        centered
        stacked
        v-model="employeeTab"
        bg-color="black lighten-3"
        show-arrows
        slider-color="white" >
        <v-tab value="personal" @click="this.$router.replace('/userinfo/personal')" class="mx-3">
            <v-icon>mdi-account</v-icon>
            اطلاعات شخصی
        </v-tab>
        <v-tab value="unicert"  @click="this.$router.replace('/userinfo/unicert')" class="mx-3">
            <v-icon>mdi-school</v-icon>
            اطلاعات دانشگاهی
        </v-tab>
        <v-tab value="zaban" @click="this.$router.replace('/userinfo/foreignlanguage')" class="mx-3">
            <v-icon>mdi-language-lua</v-icon>
            زبان خارجی
        </v-tab>
        <v-tab value="skill" @click="this.$router.replace('/userinfo/skills')" class="mx-3">
            <v-icon>mdi-tools</v-icon>
            مهارت ها
        </v-tab>
        <v-tab value="jobresume" @click="this.$router.replace('/userinfo/jobresume')" class="mx-3">
            <v-icon>mdi-tools</v-icon>
            سوابق کاری
        </v-tab>
        <v-tab value="interests" @click="this.$router.replace('/userinfo/interests')" class="mx-3">
            <v-icon>mdi-heart</v-icon>
            علاقه مندی ها
        </v-tab>
        </v-tabs>
        <div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    </v-card>
    </v-locale-provider>
</template>
<script>
export default {
    data(){
        return{
            employeeTab:""
        }
    },
    props:{
        tabValue:String
    },
    created(){
        this.employeeTab=null;
        if((/personal/).test(this.$route.path)){
            this.employeeTab="personal";
        }
        else if((/unicert/).test(this.$route.path)){
            this.employeeTab="unicert";
        }
        else if((/foreignlanguage/).test(this.$route.path)){
            this.employeeTab="zaban";
        }
        else if((/skills/).test(this.$route.path)){
            this.employeeTab="skill";
        }
        else if((/jobresume/).test(this.$route.path)){
            this.employeeTab="jobresume";
        }
        else if((/interests/).test(this.$route.path)){
            this.employeeTab="interests";
        }
        else{
            this.employeeTab=null;
        }
    }

}
</script>
<style scoped>
.v-tabs--density-default.v-tabs--stacked{
    height:90px;
    --v-tabs-height:80px
}
</style>