<template>
      <v-dialog v-model="showresultdialog" transition="dialog-bottom-transition">
    <v-locale-provider rtl>
      <v-row class="justify-center align-center">
        <v-card style="max-width:400px;">
        <v-card-text class="text-green-darken-3">
         در خواست شما برای شغل مورد نظر با موفقیت ارسال گردید
        </v-card-text>
                <v-card-text>
                    <v-alert
    density="compact"
    type="warning"
    title="توجه"
    text="برای ادامه کار پرسنل ما با شما تماس خواهند گرفت.">
                </v-alert>
                </v-card-text>
        <v-card-actions>
          <v-btn class="bg-red text-white" block @click="closeshowresultdialog">بستن</v-btn>
        </v-card-actions>
      </v-card>
      </v-row>
    </v-locale-provider>
    </v-dialog>
  <v-locale-provider rtl>
    <v-row class="justefy-center align-center">
    <v-col cols="12">
        <v-divider class="bg-red text-red w-75"></v-divider>
        <v-card class=" w-100 bg-grey-lighten-3 pb-7" style="min-height:200px;" :loading="mainCardLoading" >
            <v-row style="position:relative;">
                    <v-img id="recentjobmarkertop"  src="@/assets/images/recentjobback.png" style="width:210px;height:100px;position:absolute;left:10px;"></v-img>
                <v-col cols="6" class="d-flex justify-center align-center justify-sm-start" sm="6">
                    <v-chip color="primary" style="margin-top:20px !important;margin-bottom:20px !important;">
                <v-card-subtitle  style="white-space:normal !important;" >آخرین شغل های ارسال شده</v-card-subtitle>
            </v-chip>
                </v-col>
                <v-col class="d-flex justify-center justify-sm-end align-center float-left"  cols="6">
                    <v-chip  @click="this.$router.replace('/allJobsPage')" color="warning" style="margin-top:20px !important;margin-bottom:20px !important;">
                <v-card-subtitle  style="white-space:normal !important;" >مشاهده همه شغل ها</v-card-subtitle>
            </v-chip>
                   <!-- <v-col cols="12" md="4">

                    <v-btn block @click="this.$router.replace('/allJobsPage')" class="bg-red mt-0 mt-sm-5" style="margin-bottom:20px !important;">
                <v-card-subtitle  >مشاهده همه شغل ها</v-card-subtitle>
            </v-btn>
                   </v-col> -->
                </v-col>
            </v-row>
           <v-row class="mt-n8 justify-center" v-if="recentJobs && recentJobs.length>0" >
            <v-col cols="12" sm="6" md="4" v-for="(job,index) in recentJobs" :key="index">
            <div :id="`placetoscroll-${index}`"></div>           
            <v-card-text>                
                <v-card class="expandCard rounded-shaped" elevation="6" >
                  <v-list class="expandCard" >
                    <v-list-subheader>
                        <v-icon class="mx-3">mdi-subtitles</v-icon>
                        <span >{{job.jon}}</span>
                    </v-list-subheader>
                    <v-list-item lines="2" >
                        <v-list-item-subtitle>
                            <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>نوع شغل</span>
                        </v-list-item-subtitle>
                        <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3 text-center" :model-value="job.jt" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>
                    <v-list-item lines="2">
                        <v-list-item-subtitle>
                            <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>ساعات کاری شغل</span>
                        </v-list-item-subtitle>
                        <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="`${job.jsat}--${job.jsad}`" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>
                    <v-list-item lines="2">
                       <v-list-item-subtitle>
                        <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>تاریخ ایجاد شغل</span>
                       </v-list-item-subtitle>
                       <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="job.jdinp" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>                    
                    <v-row v-if="!showDetails[index]" dense class="w-100 justify-center mt-n5">
                        <v-col cols="6" >
                        <v-btn @click="showAllDetails(index)"  block  class="bg-red-lighten-4">
                            <span class="text-caption">...</span>
                            <v-icon class="text-caption">mdi-arrow-down-bold</v-icon>
                    </v-btn>
                    </v-col>
                    </v-row>
                    <v-list class="expandCard" v-if="showDetails[index]">
                        <v-list-item lines="2">
                      <v-list-item-subtitle>
                        <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>روز های کاری شغل</span>
                      </v-list-item-subtitle>
                      <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="job.jrook" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>
                        <v-list-item lines="2">
                       <v-list-item-subtitle>
                        <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>استان محل کار</span>
                       </v-list-item-subtitle>
                       <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="job.jl" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>
                        <v-list-item lines="2">
                       <v-list-item-subtitle>'
                        <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>حقوق پیشنهادی</span>'</v-list-item-subtitle>
                        <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="job.jhgp" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>                   
                    <v-list-item lines="2">
                        <v-list-item-subtitle>
                            <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>سایر نکات و شرایط شغل</span>
                        </v-list-item-subtitle>
                        <v-textarea rows="3" no-resize class="text-red-lighten-3" variant="outlined" :model-value="job.jman" ></v-textarea>
                    </v-list-item>
                    <v-list-item lines="2">
                       <v-list-item-subtitle>
                        <v-icon class="mx-3">mdi-list-box</v-icon>
                        <span>وضعیت فعلی پیشنهادی کاری</span>
                       </v-list-item-subtitle>
                       <v-textarea readonly no-resize rows="1" variant="outlined" class="text-red-lighten-3  text-center" :model-value="job.jst" style="white-space:normal !important;"></v-textarea>
                    </v-list-item>
                    <v-list-item>
                        <v-btn @click="applyForJob(job.ji)" :loading="btnLoading" block class="ma-4 bg-red">درخواست برای این شغل</v-btn>
                    </v-list-item>
                    <v-row v-if="showDetails[index]" dense class="w-100 justify-center mt-n5">
                        <v-col cols="6" >
                        <v-btn @click="showAllDetails(index)"  block class="bg-red-lighten-4">
                        <span class="text-caption">...</span>
                        <v-icon class="text-caption">mdi-arrow-up-bold</v-icon>
                        </v-btn>
                    </v-col>
                    </v-row>
                    </v-list>
                  </v-list>
                </v-card>
            </v-card-text>         
         </v-col>
        </v-row>
        <v-row v-else class="justify-center align-center w-100 h-100">
            <v-col cols="10" sm="6" md="4">
                <v-alert color="orange" title="توجه" icon="mdi-alert-box-outline">
                    <v-card-subtitle style="white-space:normal !important;">در حال حاضر شغل تایید شده ای برای نمایش وجود ندارد</v-card-subtitle>
                </v-alert>
            </v-col>
        </v-row>
    </v-card>
    </v-col>
   </v-row>
  </v-locale-provider>
</template>
<script>
import {PostData_normal} from "@/services/remotedatamodify.js"
export default {
data(){
    return{
        recentJobs:[],
        mainCardLoading:true,
        showresultdialog:false,
        showDetails:[],
        btnLoading:false
    }
},
created(){
    this.getRecentJobs()
},
methods:{
    showAllDetails(index){
        this.showDetails[index]=!this.showDetails[index];
        if(!this.showDetails[index]){
            document.getElementById(`placetoscroll-${index}`).scrollIntoView();
            window.scrollBy(0,-60)
        }
    },
    closeshowresultdialog(){
            this.showresultdialog=false;
            this.$router.replace("/")
        },
    applyForJob(ji){
        console.log(ji)
        this.btnLoading=true;
        PostData_normal("applyUserForJob",{ji:ji},null,(err,res)=>{
            if(err){
                this.btnLoading=false;
                this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. لطفا مجددا تلاش نمایید";
                   this.$store.state.snbg="red";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
            }
            else{
                this.btnLoading=false;
                if(res.data.result && res.data.result=="R0")
                {
                    this.$store.state.snd=true;
                   this.$store.state.snt="اطلاعات با موفقیت ثبت شد.";
                   this.showresultdialog=true;
                   this.$store.state.snbg="green";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);

                }
                else if(res.data.result && res.data.result=="R1"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما قبلا برای این شغل درخواست داده اید.";
                   this.$store.state.snbg="red";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else if(res.data.result && res.data.result=="R2"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. لطفا مجددا تلاش نمایید";
                   this.$store.state.snbg="red";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else if(res.data.result && res.data.result=="R3"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارسال اطلاعات. لطفا دو باره تلاش نمایید.";
                   this.$store.state.snbg="red";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else if(res.data.result && res.data.result=="R4"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما به درستی در سیستم شناسایی نشدید. لطفا دوباره وارد سیستم شوید";
                   this.$store.state.snbg="red";
                   this.$store.state.uln="";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                    this.$router.replace("/login/2")
                   }, 2000);
                }
                else{
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. لطفا مجددا تلاش نمایید";
                   this.$store.state.snbg="red";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
            }
        })
    },
   getRecentJobs(){
        PostData_normal("getRecentJobs",{},null,(err,res)=>{
            console.log(res);
            if(err){
                this.mainCardLoading=false;
                this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور. عدم موفقیت در بروز رسانی شغل ها";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
            }
            else{
                this.mainCardLoading=false;
                if(res.data.result=="R0"){
                    if(res.data.records){this.$store.state.snd=true;
                    this.$store.state.snt="شغل های جدید به روز رسانی شدند";
                    this.$store.state.snbg="green";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
                        if(res.data.records.length>=3){
                            this.recentJobs=res.data.records.slice(0,3);
                           for(let i=0;i<this.recentJobs.length;i++){
                            this.showDetails.push(false);
                           }
                        }
                        else if(res.data.records.length>0){
                            this.recentJobs=res.data.records;
                            for(let i=0;i<this.recentJobs.length;i++){
                            this.showDetails.push(false);
                           }
                        }
                        else{
                            this.recentJobs=[];
                            this.showDetails=[];
                        }

                    }

                }
                else{
                    this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور. عدم موفقیت در بروز رسانی شغل ها";
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 3000);
                }
            }

        })
    }
}
}
</script>
<style>
#recentjobmarkertop>.v-img__img--contain{
object-fit:fill !important;
}
.expandCard{
    transition:height 2s;
}
</style>