<template>
    <v-locale-provider rtl>
        <v-card elevation="0" class="w-100">
      <v-row class="w-100 justify-center pt-16" dense>
        <v-col cols="11" sm="8" md="6" class="my-3">
            <v-card class="my-2"  :style="{'background-color':message.messagehavebeenseen?'green':'orange'}"  v-for="(message,index) in messages" :key="index">
               <v-card-subtitle>
                {{message.messagehavebeenseen?'خوانده شده':'خوانده نشده'}}
               </v-card-subtitle>
               <v-divider></v-divider>
               <v-card-text>
                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        متن پیام
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                 <v-card>
                    <v-card-text>
                        {{message.messagetext}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="outlined" :loading="btnloading" rounded-xl @click="closeAndMarkItAsRead(message.messageid)">خوانده شده</v-btn>
                    </v-card-actions>
                 </v-card>
                    </v-expansion-panel-text>
                </v-expansion-panel>
               </v-expansion-panels>
               </v-card-text>
               <v-divider></v-divider>
                <v-card-subtitle style="white-space:normal !important;display:block !important;" >
                    تاریخ ایجاد : {{message.messageDatefCreationInPersian}}
                </v-card-subtitle>
            </v-card>
        </v-col>
      </v-row>
    </v-card>
    </v-locale-provider>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
                messages:[],
                btnloading:false
            }
        },
        created(){
            this.getMessages();
            this.$store.state.isMainPage=false
        },
        methods:{
            closeAndMarkItAsRead(messageid){
                this.btnLoading=true;
                PostData_normal("closeAndMarkItAsRead",{messageId:messageid},null,(err,res)=>{
                    if(err){
                        this.btnLoading=false;
                                this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                            }
                            else{
                                this.btnLoading=false;
                                if(res.data.result && res.data.result=="R4"){
                                    this.$store.state.snd=true;
                            this.$store.state.snt="عدم شناسایی در سیستم. دوباره وارد شوید"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=false;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                                this.$router.replace("/login/2");
                            }, 2000)
                                }
                                else if(res.data.result && res.data.result=="R0"){
                                    this.$store.state.snd=true;
                            this.$store.state.snt="اطلاعات با موفقیت بارگذاری شد"
                            this.$store.state.snbg="green";
                            this.messages=[];
                                this.messages=res.data.records;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000)
                                }
                                else{
                                    this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                                }
                            }
                })
            },
            getMessages(){
                PostData_normal("getUserMessages",{},null,(err,res)=>{
                        console.log(res)
                            if(err){
                                this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                            }
                            else{
                                if(res.data.result && res.data.result=="R4"){
                                    this.$store.state.snd=true;
                            this.$store.state.snt="عدم شناسایی در سیستم. دوباره وارد شوید"
                            this.$store.state.snbg="red";
                            this.$store.state.uln=false;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                                this.$router.replace("/login/2");
                            }, 2000)
                                }
                                else if(res.data.result && res.data.result=="R0"){
                                    this.$store.state.snd=true;
                            this.$store.state.snt="اطلاعات با موفقیت بارگذاری شد"
                            this.$store.state.snbg="green";
                            this.messages=[];
                                this.messages=res.data.records;
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000)
                                }
                                else{
                                    this.$store.state.snd=true;
                            this.$store.state.snt="خطا در ارتباط با سرور"
                            this.$store.state.snbg="red";
                            setTimeout(() => {
                                this.$store.state.snd=false;
                            }, 2000);
                                }
                            }
                    })
            }
        }
    }
    </script>
