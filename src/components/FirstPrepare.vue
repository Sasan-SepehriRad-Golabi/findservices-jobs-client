<template>    
    <v-overlay
      :model-value="fp"
      class="align-center justify-center h-screen w-100">
      <v-progress-circular
        color="primary"
        indeterminate
        size="64"
      ></v-progress-circular>
      <p class="text-white text-center font-weight-bold">{{expl}}</p>
      <span :style="{'color':allok?'green':'red'}"  class="mt-2 font-weight-light">{{subExpl}}</span>
    </v-overlay>
</template>
<script>
import {PostData_normal} from '../services/remotedatamodify.js';
import {mapState} from 'vuex'
export default{
    data(){
        return{
                expl:"",
                subExpl:"",
                allok:false
        }
    },
    computed:{
        ...mapState(['fp','up'])
    },
    created(){
        this.expl="در حال در یافت اطلاعات کابر"
        PostData_normal("refreshdata",{},null,(err,res)=>{
            console.log(res)
            if(err){
                    this.$store.state.uc=false;
                    this.$store.state.uln="error";
                    this.$store.state.uty=-1;
                    this.$store.state.snd=true;
                  this.$store.state.snt="خطا در ارسال اطلاعات. دوباره تلاش کنید"
                    setTimeout(() => {
                        this.$store.state.fp=false;
                        this.$store.state.snd=false;
                    }, 2000);
                }
                else{
                    console.log(res.data);
                    var result=res.data[0];
                    if(result.res=="R4"){
                        this.$store.state.uc=false;
                        this.$store.state.snd=true;
                        this.$store.state.uty=-1;
                  this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا دوباره وارد شوید";
                  setTimeout(() => {
                    this.$store.state.fp=false;
                        this.$store.state.snd=false;
                    }, 2000);
                    }
                    else if(result.res=="R5"){
                        this.$store.state.uty=-1;
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا دوباره وارد شوید";
                    setTimeout(() => {
                        this.$store.state.fp=false;
                        this.$store.state.snd=false;
                    }, 2000);
                    }
                    else if(result.res=="error"){
                        this.$store.state.uty=-1;
                        this.$store.state.uc=false;
                        this.$store.state.snd=true;
                  this.$store.state.snt="خطا در بازیابی اطلاعات. دوباره تلاش کنید"
                  setTimeout(() => {
                    this.$store.state.fp=false;
                        this.$store.state.snd=false;
                    }, 2000);
                    }
                    else if(result.res=="update2"){
                        this.$store.state.uln="update2";
                        this.$store.commit('culn','update2');
                        clearInterval(this.$store.state.gc);
                        if(res.data[1] && (res.data[1]).length>0){
                            let userInfo=(res.data[1])[0];
                            this.userName=userInfo.up&&userInfo.up.upn;
                        this.userLastName=userInfo.up&& userInfo.up.upln;
                        this.$store.state.up=userInfo.up;
                        this.$store.state.uc=userInfo.uc;
                        this.$store.state.mr=userInfo.mr;
                        this.$store.state.mu=userInfo.mu;
                        this.$store.state.unc=userInfo.unc;
                        this.$store.state.sc=userInfo.sc;
                        this.$store.state.ic=userInfo.ic;
                        this.$store.state.flc=userInfo.flc;
                        this.$store.state.jrc=userInfo.jrc;
                        this.$store.state.uty=userInfo.uty;
                        }
                        this.$store.state.snd=true;
                  this.$store.state.snt="تبریک...خوش آمدید."
                        setTimeout(() => {
                            this.$store.state.fp=false;
                            this.$store.state.snd=false;
                            this.$store.commit('culn','update2');
                        }, 1000);
                    }
                    else if(result.res=="update1"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.uln="update1";  
                        this.$store.commit('culn','update1');
                        console.log(res.data[1]);
                        if(res.data[1] && (res.data[1]).length>0){
                            let userInfo=(res.data[1])[0];
                            this.userName=userInfo.up&&userInfo.up.upn;
                        this.userLastName=userInfo.up&& userInfo.up.upln;
                        this.$store.state.up=userInfo.up;
                        this.$store.state.uc=userInfo.uc;
                        this.$store.state.mr=userInfo.mr;
                        this.$store.state.mu=userInfo.mu;
                        this.$store.state.unc=userInfo.unc;
                        this.$store.state.sc=userInfo.sc;
                        this.$store.state.ic= userInfo.ic;
                        this.$store.state.flc=userInfo.flc;
                        this.$store.state.jrc=userInfo.jrc;
                        this.$store.state.uty=userInfo.uty;
                        }                   
                        this.$store.state.snd=true;
                  this.$store.state.snt="تبریک...خوش آمدید."
                        setTimeout(() => {
                            this.$store.state.fp=false;
                            this.$store.state.snd=false;
                            this.$store.commit('culn','update1');
                        }, 1000);
                    }
                    else if(result.res=="update0"){
                        this.$store.state.uc=false;
                        this.$store.state.uln="update0";
                        this.$store.commit('culn','update0');
                        clearInterval(this.$store.state.gc);
                        if(res.data[1] && (res.data[1]).length>0){
                            let userInfo=(res.data[1])[0];
                            this.userName=userInfo.up&&userInfo.up.upn;
                        this.userLastName=userInfo.up&& userInfo.up.upln;
                        this.$store.state.up=userInfo.up;
                        this.$store.state.uc= userInfo.uc;
                        this.$store.state.mr= userInfo.mr;
                        this.$store.state.mu= userInfo.mu;
                        this.$store.state.unc= userInfo.unc;
                        this.$store.state.sc= userInfo.sc;
                        this.$store.state.ic= userInfo.ic;
                        this.$store.state.flc= userInfo.flc;
                        this.$store.state.jrc=userInfo.jrc;
                        this.$store.state.uty=userInfo.uty;
                        }  
                        this.$store.state.snd=true;
                  this.$store.state.snt="تبریک...خوش آمدید."
                        setTimeout(() => {
                            this.$store.state.fp=false;
                            this.$store.state.snd=false;
                            this.$store.commit('culn','update0');
                        }, 1000);
                    }
                    else if(result.res=="blocked"){
                        this.$store.state.uln="blocked";
                        this.$store.state.uc=false;
                        this.$store.state.snd=true;
                        this.$store.state.uty=-1;
                  this.$store.state.snt="شما امکان استفاده کامل از سیستم را ندارید. لطفا با ما تماس بگیرید"
                        setTimeout(() => {
                            this.$store.state.fp=false;
                            this.$store.state.snd=false;
                            this.$store.commit('culn','update2');
                        }, 1000);
                    }
                    else{
                        this.$store.state.uc=false;
                        this.$store.state.fp=false;
                        this.$store.state.uln="error";
                    }
                }
        })
    }
}
</script>