<template>
  <v-locale-provider rtl>
   <v-row class="justify-center">
    <v-col cols="12" sm="6" md="4" style="overflow:auto !important;">
    <v-card elevation="0" style="margin-top:130px !important;" class="pa-5">
        <v-card-subtitle style="white-space:normal !important;" class="my-5 text-red">موضوع و متن پیام خود را وارد کنید و سپس ارسال نمایید</v-card-subtitle>
        <v-form @submit.prevent="sendMessage">
        <v-text-field label="موضوع پیام" prepend-inner-icon="mdi-text-box" variant="outlined" v-model="messageTitle"></v-text-field>
        <v-textarea no-resize rows="5" variant="outlined" prepend-inner-icon="mdi-text-box" v-model="messageText" placeholder="متن پیام خود را وارد نمایید"></v-textarea>
            <v-btn :loading="sendingMessage" type="submit" @click="sendMessage" block class="bg-red">ارسال پیام</v-btn>
        </v-form>
    </v-card>
    </v-col>
   </v-row>
  </v-locale-provider>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js";
    export default{
        data(){
            return{
                messageTitle:"",
                messageText:"",
                sendingMessage:false
            }
        },
        created(){
              
        },     
        methods:{
            sendMessage(){
                this.sendingMessage=true;
                PostData_normal("sendMessageByUser",{mtitle:this.messageTitle,mtext:this.messageText},null,(err,res)=>{
                    if(err){
                        this.sendingMessage=false;
                        this.$store.state.snd=true;
                        this.$store.state.snt="خطا در برقراری ارتباط با سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 2000);
                    }
                    else{
                        this.sendingMessage=false;
                        if(res.data.result){
                            if(res.data.result=="R0"){
                                this.$store.state.snd=true;
                        this.$store.state.snt="پیام شما با موفقیت ارسال شد. در اولین فرصت به شما پاسخ داده خواهد شد."
                        this.$store.state.snbg="green"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 2000);
                            }
                            else if(res.data.result=="R3"){
                                this.$store.state.snd=true;
                        this.$store.state.snt="اطلاعات ارسالی درست نیستند. لطفا هم موضوع و هم متن را وارد نمایید"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 2000);
                            }
                            else if(res.data.result=="R4"){
                                this.$store.state.snd=true;
                        this.$store.state.snt="شما به درستی در سیستم شناسایی نشده اید. لطفا دوباره وارد شوید"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                            this.$router.replace("/login/2");
                        }, 2000);
                            }
                            else{
                                this.$store.state.snd=true;
                        this.$store.state.snt="خطا در برقراری ارتباط با سرور"
                        this.$store.state.snbg="red"
                        setTimeout(() => {
                            this.$store.state.snd=false;
                        }, 2000);
                            }
                        }
                        else{
                            this.$store.state.snd=true;
                        this.$store.state.snt="خطا در برقراری ارتباط با سرور"
                        this.$store.state.snbg="red"
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