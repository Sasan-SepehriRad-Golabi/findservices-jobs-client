<template>
    <v-dialog v-model="imageLargeScale" class="d-flex justify-center align-center">
         <v-row>
          <v-col cols="10" offset="1" md="4" offset-md="4" style="height:400px;">
            <v-card class="w-100 h-100">
            <v-row class="h-75">
              <img  :src="imageLargeScaleSrc" style="width:100%;height:100%;" />
            </v-row>
            <v-row style="height:10%;">
            </v-row>
           <v-row>
            <v-col cols="12">
              <v-card-actions>
              <v-btn variant="outlined" block class="bg-red text-white" @click="imageLargeScale=!imageLargeScale" >بستن</v-btn>
            </v-card-actions>
            </v-col>
           </v-row>
          </v-card>
          </v-col>
         </v-row>
        </v-dialog>
    <v-card class="w-100 h-100">
    <v-card-subtitle>
        اطلاعات مربوط به مدارک دانشگاهی
    </v-card-subtitle>
<v-card-text>
    <v-row class="d-flex justify-center">
        <v-col cols="12" md="6" lg="4">
            <v-btn block variant="outlined" @click="userEdit=!userEdit" class="d-flex bg-red text-white">
             <v-icon>{{!userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{!userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-start">
        <v-col class="d-flex d-md-none" cols="12" md="4">
            <v-row>
                <v-col :cols="uniCert=='سایر'?6:12">
                    <v-select variant="outlined" :disabled="!userEdit" :items="lastUniCert" v-model="uniCert" label="سطح تحصیلات " >
                <template #prepend-inner>
                    <v-icon>mdi-certificate</v-icon>
                </template>
            </v-select>
                </v-col>
                <v-col :class="uniCert=='سایر'?'d-flex':'d-none'" :cols="uniCert=='سایر'?6:0">
                    <v-text-field variant="outlined" :disabled="!userEdit" :items="lastUniCert" v-model="uniCertext" label="مدرک خود را بنویسید " hint="فارغ التحصیل رشته خیاطی" >
            </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="d-none d-md-flex" cols="12" md="4">
            <v-row>
                <v-col :cols="uniCert=='سایر'?3:12">
                    <v-select variant="outlined" :disabled="!userEdit" :items="lastUniCert" v-model="uniCert" label="سطح تحصیلات " >
                <template #prepend-inner>
                    <v-icon>mdi-certificate</v-icon>
                </template>
            </v-select>
                </v-col>
                <v-col :class="uniCert=='سایر'?'d-flex':'d-none'" :cols="uniCert=='سایر'?9:0">
                    <v-text-field variant="outlined" :disabled="!userEdit" :items="lastUniCert" v-model="uniCertext" label="مدرک خود را بنویسید " hint="فارغ التحصیل رشته خیاطی" >
            </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="majorName" label="رشته تحصیلی" >
                <template #prepend-inner>
                    <v-icon>mdi-account-school</v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-text-field variant="outlined" :disabled="!userEdit" v-model="uniName" label="نام دانشگاه" hint="نام دانشگاه به همراه نوع آن. مثلا دانشگاه آزاد بوشهر" persistent-hint="true">
                <template #prepend-inner>
                    <v-icon>mdi-account-school</v-icon>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card-text>
            حداکثر 3 فایل مدرک تحصیلی می توانید آپلود کنید. آپلود اخرین مدرک تحصیلی جهت تکمیل ثبت نام ضروری است.
        </v-card-text>
        </v-col>
    </v-row>
    <v-row dense>
              <v-col cols="12" md="4">
                <v-col cols="12" md="10" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" persistent-hint hint="تصویر مدرک تحصیلی 1 " prepend-icon="" chips show-size v-model="tasviremadraketahsili1"  :disabled="!userEdit"
                  label="تصویر مدرک تحصیلی 1"
                ></v-file-input>
                </v-col>
                <v-col cols="12" md="2" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(tasviremadraketahsili1prev)" :src="tasviremadraketahsili1prev?tasviremadraketahsili1prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              </v-col>
              <v-col cols="12" md="4">
                <v-col cols="12" md="10" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" persistent-hint hint="تصویر مدرک تحصیلی 2 " prepend-icon="" chips show-size v-model="tasviremadraketahsili2"  :disabled="!userEdit"
                  label="تصویر مدرک تحصیلی 1"
                ></v-file-input>
                </v-col>
                <v-col cols="12" md="2" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(tasviremadraketahsili2prev)" :src="tasviremadraketahsili2prev?tasviremadraketahsili2prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              </v-col>
              <v-col cols="12" md="4">
                <v-col cols="12" md="10" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" persistent-hint hint="تصویر مدرک تحصیلی 3 " prepend-icon="" chips show-size v-model="tasviremadraketahsili3"  :disabled="!userEdit"
                  label="تصویر مدرک تحصیلی 1"
                ></v-file-input>
                </v-col>
                <v-col cols="12" md="2" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(tasviremadraketahsili3prev)" :src="tasviremadraketahsili3prev?tasviremadraketahsili3prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              </v-col>
    </v-row>
</v-card-text>
<v-card-actions class="d-flex justify-start align-center">
          <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updateUniCert" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن  مدرک دانشگاهی</span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updateUniCert" :disabled="!userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن مدرک دانشگاهی</span>
          </v-btn>
        </v-card-actions>
</v-card>
<v-locale-provider rtl>
</v-locale-provider>
</template>
<script>
import {PostData_formData,PostData_normal} from "@/services/remotedatamodify"
export default{
data(){
   return{
    btnLoading:false,
    imageLargeScale:false,
    imageLargeScaleSrc:"",  
    userEdit:false,
    majorName:"",
    uniCert:"",
    uniCertext:"",
    uniName:"",
    tasviremadraketahsili1prev:"",
    tasviremadraketahsili1:"",
    tasviremadraketahsili2prev:"",
    tasviremadraketahsili2:"",
    tasviremadraketahsili3prev:"",
    tasviremadraketahsili3:"",
    lastUniCert:["بیسواد","زیر دیپلم","دیپلم","فوق دیپلم","لیسانس","فوق لیسانس","دکترای غیر پزشکی","دکترای پزشکی","تخصص پزشکی","سایر"]
   }
},
created(){
        PostData_normal("getUniCert",{},null,(err,res)=>{
          if(err){
            this.$store.state.snd=true;
            this.$store.state.snt="مشکل در ارتباط با سرور. پس از چند لحظه دوباره تلاش کنید"
            setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
          }
          else{
              console.log(res)
              if(res.data&& res.data[0]&&res.data[0].res){
                if(res.data[0].res=="R4"){
                  console.log("hereeeeee")
                  this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/login/2");
                  }, 2000);
                }
                else if(res.data[0].res=="R5"){
                  this.$store.state.snd=true;
                  this.$store.state.snt="در ارسال اطلاعات و فایل ها به سرور مشکل ایجاد شد. دوباره تلاش کنید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                }
                else if(res.data[0].res=="R6"){
                  this.$store.state.snd=true;
                  this.$store.state.snt="ارتباط با پایگاه داده در حال حاضر دارای ایراد می باشد. پس از چند لحظه دوباره تلاش کنید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                }
              }
              else{
                if(res.data){
                let uni=res.data;
                this.uniCert=uni.uncert;
                  this.uniCertext=uni.uncertext;
                  this.uniName=uni.unname;
                  this.majorName=uni.unmajor;
                  this.tasviremadraketahsili1prev=uni.unmad1&&uni.unmad1!=undefined?"data:image/jpeg;base64,"+uni.unmad1:"";
                  this.tasviremadraketahsili2prev=uni.unmad2&&uni.unmad2!=undefined?"data:image/jpeg;base64,"+uni.unmad2:"";
                  this.tasviremadraketahsili3prev=uni.unmad3&&uni.unmad3!=undefined?"data:image/jpeg;base64,"+uni.unmad3:"";
              }
              }
            }
        })
      },
methods:{
    showImageLarge(imageSrcValue){
          this.imageLargeScale=true;
          this.imageLargeScaleSrc=imageSrcValue;
        },
        updateUniCert(){
            this.btnLoading=true;
            console.log("starttttt")
            let fmData=new FormData();
            fmData.append("uniCert",this.uniCert)
            fmData.append("uniCertext",this.uniCertext)
            fmData.append("uniName",this.uniName)
            fmData.append("majorName",this.majorName);
          if(this.tasviremadraketahsili1&&this.tasviremadraketahsili1.length>0){
            for(let i=0;i<this.tasviremadraketahsili1.length;i++){
                fmData.append("tasviremadraketahsili1",this.tasviremadraketahsili1[i],`tasvireMadrak-1.${this.tasviremadraketahsili1[i]&&this.tasviremadraketahsili1[i].name&&this.tasviremadraketahsili1[i].name.split(".").pop()}`);
            }
          }
          if(this.tasviremadraketahsili2&&this.tasviremadraketahsili2.length>0){
            for(let i=0;i<this.tasviremadraketahsili2.length;i++){
                fmData.append("tasviremadraketahsili2",this.tasviremadraketahsili2[i],`tasvireMadrak-2.${this.tasviremadraketahsili2[i]&&this.tasviremadraketahsili2[i].name&&this.tasviremadraketahsili2[i].name.split(".").pop()}`);
            }
          }
          if(this.tasviremadraketahsili3&&this.tasviremadraketahsili3.length>0){
            for(let i=0;i<this.tasviremadraketahsili3.length;i++){
                fmData.append("tasviremadraketahsili3",this.tasviremadraketahsili3[i],`tasvireMadrak-3.${this.tasviremadraketahsili3[i]&&this.tasviremadraketahsili3[i].name&&this.tasviremadraketahsili3[i].name.split(".").pop()}`);
            }
          }
          this.$store.state.pgd=true;
          PostData_formData("updateUniCert",fmData,{
            onUploadProgress: (progressEvent) =>{
              console.log(progressEvent)
              this.$store.state.pgv = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
            }
          },(err,res)=>{
            if(err){
              console.log(err)
              this.btnLoading=false;
              this.$store.state.snd=true;
                  this.$store.state.snt="در ارتباط با سرور خطا رخ داده است. ممکن است اطلاعات به درستی ثبت نشده باشند. دوباره تلاش کنید"
              this.$store.state.pgd=false;
              setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 3000);
            }
            else{
              this.btnLoading=false;
              this.$store.state.pgd=false;
              console.log(res)
              if(res.data&& res.data[0]&&res.data[0].res){
                if(res.data[0].res=="R4"){
                  console.log("hereeeeee")
                  this.$store.state.snd=true;
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/login/2");
                  }, 2000);
                }
                else if(res.data[0].res=="R5"){
                  this.$store.state.snd=true;
                  this.$store.state.snt="در ارسال اطلاعات و فایل ها به سرور مشکل ایجاد شد. دوباره تلاش کنید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                }
                else if(res.data[0].res=="R6"){
                  this.$store.state.snd=true;
                  this.$store.state.snt="ارتباط با پایگاه داده در حال حاضر دارای ایراد می باشد. پس از چند لحظه دوباره تلاش کنید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                }
              }
              else{
                if(res.data){
                  this.$store.state.snd=true;
                  this.$store.state.snt="اطلاعات با موفقیت آپدیت شد"
                  this.$store.state.snbg="green"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
                let uni=res.data;
                  this.uniCert=uni.uncert;
                  this.uniCertext=uni.uncertext;
                  this.uniName=uni.unname;
                  this.majorName=uni.unmajor;
                  this.tasviremadraketahsili1prev=uni.unmad1&&uni.unmad1!=undefined?"data:image/jpeg;base64,"+uni.unmad1:"";
                  this.tasviremadraketahsili2prev=uni.unmad2&&uni.unmad2!=undefined?"data:image/jpeg;base64,"+uni.unmad2:"";
                  this.tasviremadraketahsili3prev=uni.unmad3&&uni.unmad3!=undefined?"data:image/jpeg;base64,"+uni.unmad3:"";
              }
              }
            }

        })
},
},
}
</script>