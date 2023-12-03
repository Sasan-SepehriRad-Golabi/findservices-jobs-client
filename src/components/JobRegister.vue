<template>
    <v-dialog v-model="showresultdialog" transition="dialog-bottom-transition">
    <v-locale-provider rtl>
      <v-row class="justify-center align-center">
        <v-card style="max-width:400px;">
        <v-card-text class="text-green-darken-3">
          شغل مورد نظر با موفقیت ثبت شد و پس از تایید در سایت نمایش داده خواهد شد
        </v-card-text>
        <v-card-subtitle v-if="showresultdialogwithemployee" style="white-space:normal !important" class="my-3">
          نیروی کار مورد شما به این مرتبط شد. انتخاب نهایی نیرو و سایر موارد توسط تیم رامش با شما هماهنگ می شود
        </v-card-subtitle>
        <v-card-subtitle style="white-space:normal !important" class="my-3">
            تیم رامش زمان قرار گرفتن در سایت و نیز زمان قبول شغل توسط کارجو را با پیامک به شما اطلاع رسانی می کند
        </v-card-subtitle>
                <v-card-text>
                    <v-alert
    density="compact"
    type="warning"
    title="توجه"
    text="جهت تایید شما، پرسنل ما با شماره ثابت شما تماس خواهند گرفت.">
                </v-alert>
                </v-card-text>
        <v-card-actions>
          <v-btn class="bg-red text-white" block @click="closeshowresultdialog">بستن</v-btn>
        </v-card-actions>
      </v-card>
      </v-row>
    </v-locale-provider>
    </v-dialog>
    <v-card class="w-100 h-100">
        <v-locale-provider rtl>
            <v-divider class="mb-5"></v-divider>
            <v-card style="margin-top:100px;" class="w-100 h-100">
            <v-card-text>
                <v-card-subtitle style="whaite-space:normal !important">مشخصات شغل یا پیشنهاد کاری مورد نظر خود را وارد نمایید</v-card-subtitle>
                <v-divider class="mt-5 mb-8"></v-divider>
                <v-row class="justify-center">
                 <v-col cols="10">
                  <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobOnvan" label="عنوان شغل">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtypes" v-model="jobtype" label="نوع شغل">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-select :items="jobtimes" v-model="jobSaateKartype" label="ساعات کار">
                        </v-select>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobSaateKarDetail" label="ساعت کاری" hint="مثلا از ساعات 10 صبح تا 5 عصر">

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobRoozhayeKari" label="روزهای کاری" hint="مثلا  شنبه تا 4 شنبه">

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobHoghoghePishnehadi" label="حقوق پیشهادی" hint="مثلا ماهی 2 میلیون به بالا" persistent-hint suffix="تومان">
                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobLocation" label="محل انجام کار" hint="آدرس شما تنها توسط سامانه رامش مشاهده می شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobTelephoneSabet" label="تلفن ثابت" hint="تلفن شما تنها توسط سامانه رامش و جهت هماهنگی با شما استفاده می شود و نمایش داده نمی شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field variant="outlined" v-model="jobCreatorNameAndLastName" label="نام و نام خانوادگی خود را وارد کنید" hint="برای تایید و هماهنگی با شما. تلفن شما به کسی نشان داده نمی شود" persistent-hint>

                        </v-text-field>
                    </v-col>
                    <v-divider class="my-5"></v-divider>
                    <v-col cols="12" md="4">
                        <v-select :items="importancelevelsarray" v-model="jobImportanceLevel" label="میزان فوریت نیاز شما">
                        </v-select>
                    </v-col>
                    <v-col cols="12" md="2">
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-textarea rows="5" no-resize v-model="jobMazayaAndNokat" variant="outlined" label="مزایا یا نکات خاص" hint="اگر شرایط یا نکات خاصی در مورد شرایط کاری یا نیروی مدنظرتان دارید بنویسید" persistent-hint >
                        </v-textarea>
                    </v-col>
                  </v-row>
                 </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                    <v-row class="mb-3">
                        <v-col cols="10" offset="1" md="6" offset-md="1">
                            <v-btn @click="registerJob" class="bg-red text-white pa-2" block>
                        <v-icon></v-icon>
                        <span>ثبت پیشنهاد کاری</span>
                    </v-btn>
                        </v-col>
                    </v-row>

            </v-card-actions>
            </v-card>
        </v-locale-provider>
    </v-card>   
</template>
<script>
import {mapState} from "vuex"
import {PostData_normal} from "@/services/remotedatamodify"
export default{
    data(){
        return{
            btnLoading:false,
            jobtype:"",
            jobOnvan:"",
            jobMazayaAndNokat:"",
            jobSaateKartype:"",
            jobSaateKarDetail:"",
            jobRoozhayeKari:"",
            jobLocation:"",
            jobHoghoghePishnehadi:"",
            jobTelephoneSabet:"",
            jobCreatorNameAndLastName:"",
            jobImportanceLevel:"",
            showresultdialog:false,
            showresultdialogwithemployee:false,
            importancelevelsarray:["خیلی فوری","فوری","عادی","عجله ای ندارم"],
            jobtypes:['دایمی','موقت'],
            jobtimes:['پاره وقت','تمام وقت'],
            emplayerphone:"",
            employeeCode:""
        }
    },
    computed:{
        ...mapState(['uln'])
    },
    methods:{
        closeshowresultdialog(){
            this.showresultdialog=false;
            this.$router.replace("/")
        },
        registerJob(){
            if(this.$route.params.employeeCode!="none")
            {
                console.log("1111")
                PostData_normal("/registerJobToEmployee",{employeeCode:this.$route.params.employeeCode,jobOnvan:this.jobOnvan,
                jobtype:this.jobtype,jobSaateKartype:this.jobSaateKartype,
                jobSaateKarDetail:this.jobSaateKarDetail,jobRoozhayeKari:this.jobRoozhayeKari,
                jobHoghoghePishnehadi:this.jobHoghoghePishnehadi,jobLocation:this.jobLocation,
                jobTelephoneSabet:this.jobTelephoneSabet,jobCreatorNameAndLastName:this.jobCreatorNameAndLastName,
                jobMazayaAndNokat:this.jobMazayaAndNokat,jobImportanceLevel:this.jobImportanceLevel
            },null,(err,res)=>{
                console.log(res)
                if(err){
                    console.log(err)
                   this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. لطفا مجددا تلاش نمایید";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else{
                   if(res.data.result&& res.data.result=="R0"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شغل مورد نظر با موفقیت ثبت و پس از تایید ادمین نمایش داده می شود";
                   this.showresultdialog=true;
                   this.showresultdialogwithemployee=true;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000);
                   }
                   else if(res.data.result&& res.data.result=="R4"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما به درستی شناسایی نشدید. لطفا دوباره وارد شوید"
                   this.$store.state.snbg="red"
                   setTimeout(() => {
                    this.$store.state.snd=false;
                    this.$router.replace("/login/2")
                   }, 3000);
                   }
                   else{
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. لطفا مجددا تلاش نمایید";
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                   }
                }
            })
            }
            else{
                this.showresultdialogwithemployee=false;
                console.log("22222")
                PostData_normal("/registerJob",{jobOnvan:this.jobOnvan,
                jobtype:this.jobtype,jobSaateKartype:this.jobSaateKartype,
                jobSaateKarDetail:this.jobSaateKarDetail,jobRoozhayeKari:this.jobRoozhayeKari,
                jobHoghoghePishnehadi:this.jobHoghoghePishnehadi,jobLocation:this.jobLocation,
                jobTelephoneSabet:this.jobTelephoneSabet,jobCreatorNameAndLastName:this.jobCreatorNameAndLastName,
                jobMazayaAndNokat:this.jobMazayaAndNokat,jobImportanceLevel:this.jobImportanceLevel
                    },null,(err,res)=>{
                console.log(res)
                if(err){
                   this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
                   this.$store.state.snbg="red"
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 2000);
                }
                else{
                   if(res.data.result&& res.data.result=="R0"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شغل مورد نظر با موفقیت ثبت و پس از تایید ادمین نمایش داده می شود";
                   this.$store.state.snbg="green"
                   this.showresultdialog=true;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                   }, 3000);
                   }
                   else if(res.data && res.data[0] && res.data[0].result&& res.data[0].result=="R4"){
                    this.$store.state.snd=true;
                   this.$store.state.snt="شما به درستی ثبت نشده اید. به عنوان کارفرما یا هر دو ثبت نام نمایید";
                   this.$store.state.snbg="red"
                   this.showresultdialog=false;
                   setTimeout(() => {
                    this.$store.state.snd=false;
                    this.$router.replace("/login/2")
                   }, 3000)
                   }
                   else{
                    this.$store.state.snd=true;
                   this.$store.state.snt="خطا در ارتباط با سرور. اطلاعات وارد شده را بررسی کنید و سپس دوبار تلاش نمایید";
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
}
</script>