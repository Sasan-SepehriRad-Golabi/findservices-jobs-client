<template>
 <v-card fullscreen>
    <v-locale-provider rtl>
    <v-overlay
      v-model="fp"
      class="align-center justify-center h-screen w-100">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
      <p class="text-white text-center font-weight-bold">{{expl}}</p>
      <span :style="{'color':allok?'green':'red'}"  class="mt-2 font-weight-light">{{subExpl}}</span>
</v-overlay>
    <v-app-bar flat>
            <v-icon @click="this.$router.replace('/')" class="mr-3 mt-6 pa-8">mdi-arrow-right</v-icon>           
    </v-app-bar>
    <v-divider color="black" style="margin-top:150px !important;margin-bottom:30px !important;"></v-divider>
    <v-row class="text-center">
        <v-col cols="12" v-if="!searchedEmployees.length ||(searchedEmployees.length && !searchedEmployees.length>0)">
             <v-row class="justify-center">
                <v-col cols="10" sm="6" md="4">
                    <v-alert color="orange" class="my-10">
                    <v-card-subtitle style="white-space:normal !important;">
                        در حال حاضر هیچ کارجویی برای نمایش موجود نیست
                    </v-card-subtitle>
                </v-alert>
                </v-col>
             </v-row>
        </v-col>
        <v-col calss="pa-2" v-for="(employer,index) in searchedEmployees" :key="index" cols="12" sm="6" md="4" v-else>
            <v-card elevation="3" class="ma-4">
                <v-card-title>
                    مشخصات کارجو
                </v-card-title>
                <v-divider class="my-2"></v-divider>
              <v-card-item>
                <v-row>
                    <v-col class="bg-orange text-center">کد کاربری</v-col>
                    <v-col class="bg-grey-lighten-3">{{employer.unc}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange-lighten-3 text-center">نام</v-col>
                    <v-col>{{employer.un}}</v-col>
                </v-row>
                
                <v-row>
                    <v-col class="bg-orange text-center">جنسیت</v-col>
                    <v-col class="bg-grey-lighten-3">{{employer.unml}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange-lighten-3 text-center">امتیاز کارجو</v-col>
                    <v-col>{{employer.unsc}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange text-center">مدارک و پروفایل کارجو</v-col>
                    <v-col class="bg-grey-lighten-3">{{employer.unmd}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange-lighten-3 text-center">تاریخ ورود به سایت</v-col>
                    <v-col>{{employer.unts}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange text-center">شرایط یا بیماری خاص</v-col>
                    <v-col class="bg-grey-lighten-3">{{employer.unspi}}</v-col>
                </v-row>
                <v-row>
                    <v-col class="bg-orange-lighten-3 text-center">تخصصی ها</v-col>
                    <v-col >{{showtakh(employer.untakh)}}</v-col>
                </v-row>
                <v-row v-if="employer.unnz&&employer.unnz.length>0">
                    <v-expansion-panels  >
                        <v-expansion-panel v-for="(nazar , nazarindex) in employer.unnz" :key="nazarindex">
                            <v-expansion-panel-title>
                                نظرات کاربران شماره {{nazarindex+1}}
                            </v-expansion-panel-title>
                                    <v-expansion-panel-text>
                                        <p class="my-2">{{nazar.text}}</p>
                                        <p>{{nazar.tarikh}}</p>
                                    </v-expansion-panel-text>
                    </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <v-row v-else>
                    <v-expansion-panels >
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                نظرات کارفرما ها
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                نظری تا کنون ثبت نشده است
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
              </v-card-item>
                <v-card-actions>
                    <v-btn block class="bg-red my-3" :loading="btnLoading" @click="selectEmployee(employer.unc)">انتخاب این کارجو</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-locale-provider>
 </v-card>
</template>
<script>
import {PostData_normal} from "@/services/remotedatamodify.js"
export default{
    data(){
        return{
        searchedEmployees:[],
        fp:false,
        expl:"",
        subExpl:"",
        btnLoading:false
        }
    },
    created(){
        this.fp=true;
        this.subExpl="در حال دریافت اطلاعات"
        console.log(this.$store.state.searchedItem)
        PostData_normal("getSearchedEmployers",{searchKeyWords:this.$store.state.searchedItem},null,(err,res)=>{
            console.log(res)
                if(err){
                    this.fp=false;
                    console.log(err)
                }
                else{
                    console.log(res.data)
                    this.fp=false;
                    let employers=res.data;
                    if(employers && employers.length && employers.length>0){
                        this.searchedEmployees=employers;
                    this.searchedEmployees.forEach(element => {
                        try{
                            element.unnz=JSON.parse(element.unnz)
                        }
                        catch(err){
                            element.unnz=[]
                        }
                    });
                    }
                    else{
                        this.searchedEmployees=[]
                    }
                 
                }
            })
    },
    methods:{
        selectEmployee(employeeCode){
            console.log(employeeCode)
            PostData_normal("checkIfUserRegistered",{},null,(err,res)=>{
                if(err){
                    this.btnLoading=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
                }
                else{
                    let result=(res.data && res.data.length>0)?res.data[0]:null;
                    if(result){
                        if(result.res=="R0"){
                            if(result.type==2||result.type==1){
                                this.btnLoading=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="در حال انتقال به صفحه ثبت شغل";
                    this.$store.state.snbg="green";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace(`/employerReg/${employeeCode}`);
                    }, 3000);
                            }
                            else{
                                this.btnLoading=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="برای اتخاب کارجو، باید به عنوان کارفرما یا هر دو ثبت نام نمایید";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace("/login/2");
                    }, 3000);
                            }                           
                        }
                        else{
                            this.btnLoading=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا دوباره وارد شوید";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
                        }
                    }
                    else{
                        this.btnLoading=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا دوباره وارد شوید";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
                    }
                }

            })
        },
        showtakh(item){
            console.log(item)
            console.log(item.length)
            let item1=JSON.parse(item);
            let res="";
            if(item1 && item1.length && item1.length>0){
                item1.forEach(element => {
                    res=res+"-"+element;
                });
            }
            else{
                res="تخصصی ثبت نشده است"
            }
            return res;
        }
    }
}
</script>