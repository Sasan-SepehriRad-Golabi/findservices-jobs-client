<template>
      <v-overlay
      :model-value="uiol"
      class="align-center justify-center h-screen w-100">
    </v-overlay>
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
    <v-card>
      <v-card-text>
        <v-row class="justify-center align-center d-flex d-md-none" dense>
          <v-col cols="12" sm="6" lg="4">
            <v-btn block variant="outlined" @click="userEdit=!userEdit" class="d-flex bg-red text-white">
             <v-icon>{{userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="justify-start align-center d-none d-md-flex" dense>
          <v-col cols="12" sm="6"  lg="4">
            <v-btn variant="outlined" @click="userEdit=!userEdit" class="d-none d-sm-flex bg-red text-white">
              <v-icon>{{userEdit?'mdi-pencil':'mdi-lock'}}</v-icon>
              <span>{{userEdit?'ویرایش':'قفل'}}</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
            <v-card>
        <v-card-text>
         اطلاعات شخصی شما
        </v-card-text>
        <v-card-subtitle style="white-space:wrap !important">
          پس از تایید ادمین، دیگر اجازه ویرایش اطلاعات خود را نخواهید داشت.
        </v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-card-text style="white-space:wrap !important;color:red" class="my-2">
     برای اینکه در لیست جستجو نمایش داده شوید، حتما باید کلید واژه های کاری مربوط به خود را ثبت نمایید
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <v-col>
                  <v-text-field @input="openDialog"  disabled v-model="decoratedSelectedJobArray" hint="انتخاب شغل هایی که در آن تخصص دارید" persistent-hint label="انتخاب کلید واژه های شغلی">
                </v-text-field>
                </v-col>
                <v-col>
                  <v-chip @click:close="closeSelectedJob(item)" closable color="primary" v-for="(item,index) in selectedJobArray" :key="index">
                    {{item}}
                  </v-chip>
                </v-col>
                  <v-dialog v-model="dialog" activator="parent" fullscreen style="overflow-y:auto" :scrim="false" transition="dialog-bottom-transition">
                    <v-card>
        <v-app-bar color="primary" elevation="5" style="top:0px;padding:10px''" >
          <v-row>
            <v-col>
              <v-card-subtitle  class="mr-5" style="white-space:normal !important;">
                کلید وازه های مربوط به شغل های خود را انتخاب نمایید
              </v-card-subtitle>
            </v-col>
            <v-col style="overflow:hidden !important">
              <v-btn @click="dialog=false" variant="outlined" class="bg-red text-white float-left ml-5 h-100">بستن</v-btn>
            </v-col>
          </v-row>
        </v-app-bar>   
        <v-card elevation="5" rounded style="position:relative;top:80px;">
          <v-list v-if="jobItems.length>0">
            <v-list-item v-for="(item,index) in jobItems" :key="index" class="py-4">
              <v-expansion-panels v-if="!item.childs==false">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    {{item.name}}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-list v-if="item.childs.length>0">
                      <v-list-item v-for="(secondItem,secondIndex) in item.childs" :key="secondIndex">
                        <v-expansion-panels v-if="!secondItem.childs==false">
                            <v-expansion-panel>
                              <v-expansion-panel-title>
                                {{secondItem.name}}
                              </v-expansion-panel-title>
                              <v-expansion-panel-text>
                                  <v-list v-if="secondItem.childs.length>0">
                                    <v-list-item v-for="(thirdItem,thirdIndex) in secondItem.childs" :key="thirdIndex">
                                      <v-expansion-panels v-if="!thirdItem.childs==false">
                                      </v-expansion-panels>
                                      <v-checkbox v-else :label="thirdItem.name" v-model="selectedJobArray" :value="thirdItem.name"></v-checkbox>
                                    </v-list-item>
                                  </v-list>
                              </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-checkbox v-else :label="secondItem.name" v-model="selectedJobArray" :value="secondItem.name"></v-checkbox>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-checkbox v-else :label="item.name" v-model="selectedJobArray" :value="item.name"></v-checkbox>
            </v-list-item>
          </v-list>
        </v-card>
        
      </v-card>
                  </v-dialog>
              
              </v-col>
              <!-- ##############################-->
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.name" :disabled="userEdit" @keyup.enter="updatePersonalInfo"
                  label="نام" 
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.lastName" :disabled="userEdit"
                  label="نام خانوادگی"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.namePedar" :disabled="userEdit"
                  label="نام پدر"
                ></v-text-field>
              </v-col>
<!-- ##############################-->

              <v-col
                cols="12"
                sm="12"
                md="4"
              >             

              <date-picker display-format="dddd jDD jMMMM jYYYY" :disabled="userEdit"
              label="انتخاب تاریخ"  placeholder="تاریخ تولد خود را انتخاب کنید" color="#5c6bc0" header-color="primary" v-model="employee.tarikhTavallod" class="height:65px bg-grey-lighten-3"></date-picker>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field type="number" :disabled="userEdit" v-model="employee.shomarehShenasnameh"
                  label="شماره شناسنامه"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field type="number" :disabled="userEdit" v-model="employee.shomarehMelli"
                  label="شماره ملی"
                  required
                ></v-text-field>
              </v-col>
              
              <!-- ##############################-->
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.melliat" :disabled="userEdit" @keyup.enter="updatePersonalInfo"
                  label="ملیت" 
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-select v-model="employee.jensiat" :items="jensiatArray" :disabled="userEdit"
                  label="جنسیت"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.tedadefarzandan" :disabled="userEdit"
                  label="تعداد فرزندان"
                ></v-text-field>
              </v-col>
              <!--#######################-->
               <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <p>
                <v-row class="align-center" style="height:50px;background-color:#fbfbfb;overflow:auto;">
                <v-col cols="4" style="height:50px;">
                <span>سرپرست خانوار هستید؟</span>                
              </v-col>
              <v-col cols="4" style="height:50px;">
                <v-checkbox style="margin-top:-20px;" :disabled="userEdit" label="بله" value="imsupporter" v-model="employee.sarperastekhanevar"></v-checkbox>
              </v-col>
              <v-col cols="4" style="height:50px;">
                <v-checkbox   style="margin-top:-20px;" :disabled="userEdit" label="خیر" value="imnotsupporter" v-model="employee.sarperastekhanevar"></v-checkbox>
              </v-col>
              </v-row>
            </p>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.tedadeafradetahtetakaffol"  :disabled="userEdit" hint="درصورتی که سرپرست خانوار نیستید عدد 0 را وارد کنید" label="تعداد افراد تحت تکفل">
                </v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.ghad" :disabled="userEdit"
                  label="قد به سانتی متر" suffix="سانتی متر"
                ></v-text-field>
              </v-col>
              <!--#######################-->
               <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <v-text-field v-model="employee.vazn" :disabled="userEdit" hint="مثلا 87.5 "
                  label="وزن به کیلوگرم"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.specialill"  :disabled="userEdit" 
                  label="اگر بیماری خاصی دارید وارد نمایید "
                  hint="مثلا میگرن "
                ></v-text-field>
              </v-col>
              <v-col class="d-flex d-md-none" cols="12" md="4">
            <v-row>
                <v-col :cols="employee.sarbazi=='سایر'?6:12">
                    <v-select  :disabled="userEdit" :items="sarbaziArray" v-model="employee.sarbazi" label="وضعیت سربازی" >
            </v-select>
                </v-col>
                <v-col :class="employee.sarbazi=='سایر'?'d-flex':'d-none'" :cols="employee.sarbazi=='سایر'?6:0">
                    <v-text-field  :disabled="userEdit" v-model="employee.sarbaziSayereTozihat" label="وضعیت سربازی خود را بنویسید ">
            </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        <v-col class="d-none d-md-flex" cols="12" md="4">
            <v-row>
              <v-col :cols="employee.sarbazi=='سایر'?3:12">
                    <v-select  :disabled="userEdit" :items="sarbaziArray" v-model="employee.sarbazi" label="وضعیت سربازی" >+
            </v-select>
                </v-col>
                <v-col :class="employee.sarbazi=='سایر'?'d-flex':'d-none'" :cols="employee.sarbazi=='سایر'?9:0">
                    <v-text-field  :disabled="userEdit" v-model="employee.sarbaziSayereTozihat" label="وضعیت سربازی خود را بنویسید ">
            </v-text-field>
                </v-col>
            </v-row>
        </v-col>
              <!--#######################-->
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <v-select
                  :items="ostans" v-model="employee.ostaneTavallod" :disabled="userEdit"
                  label="استان محل سکونت"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field v-model="employee.address" :disabled="userEdit"
                  label="آدرس دقیق"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.email" :disabled="userEdit"
                  label="ایمیل"
                ></v-text-field>
              </v-col>
              <!-- ##############################-->
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-select v-model="employee.moteahel" :items=taahol :disabled="userEdit"
                  label="وضعیت تاهل"
                ></v-select>
              </v-col>
            
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field v-model="employee.shomarehSabet" :disabled="userEdit"
                  label="شماره تلفن ثابت"
                  hint="برای تایید صلاحیت شما با این شماره تماس گرفته می شود. "
                ></v-text-field>
              </v-col>
              <v-col  cols="12"
                sm="12"
                md="4" >
               <v-row>
                <v-col
                :cols="showHaddeaghalHoghogh?6:12"
              >
                <v-select v-model="employee.noeKareDarkhasti" :disabled="userEdit"
                :items=noeKarItems
                  label="نوع کار مورد علاقه"
                ></v-select>
              </v-col>
              <v-col
              :cols="showHaddeaghalHoghogh?6:12"
                 v-if="showHaddeaghalHoghogh"
              >
                <v-text-field type="number"  suffix="تومان" v-model="employee.haddeaghalHoghogheDarkhasti" :disabled="userEdit" class="text-caption">
                  <template #label>
                    <span class="d-flex d-sm-none" style="font-size:12px;">حداقل حقوق درخواستی </span>
                    <span class="d-none d-sm-flex d-md-none" style="font-size:18px;">حداقل حقوق درخواستی </span>
                    <span class="d-none d-md-flex d-lg-none" style="font-size:10px;">حداقل حقوق درخواستی </span>
                    <span class="d-none d-lg-flex"  style="font-size:16px;">حداقل حقوق درخواستی  </span>
                    </template>
                </v-text-field>
              </v-col>
               </v-row>
              </v-col>
              <!-- ######################## -->
              <v-col cols="12"
                sm="12"
                md="4" >
              <!-- <v-row dense style="margin-top:-12px"> -->
                <v-col cols="12"  md="12" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" accept="image/*" prepend-icon="" chips show-size v-model="employee.tasvirePersoneli"  :disabled="userEdit"
                  label="تصویر شما" placeholder="تصویر "
                ></v-file-input>
                </v-col>
                <v-col cols="12"  md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(employee.tasvirePersoneliPrev)"   :src="employee.tasvirePersoneliPrev?employee.tasvirePersoneliPrev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              <!-- </v-row> -->
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <!-- <v-row dense style="margin-top:-12px"> -->
                <v-col cols="12" md="12" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" prepend-icon="" accept="image/*" chips show-size v-model="employee.tasvireSafheShenasnameh1"  :disabled="userEdit"
                  label="تصویر صفحه اول شناسنامه"
                ></v-file-input>
                </v-col>
                <v-col cols="12"  md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(employee.tasvireSafheShenasnameh1Prev)" :src="employee.tasvireSafheShenasnameh1Prev?employee.tasvireSafheShenasnameh1Prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              <!-- </v-row> -->
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <!-- <v-row dense style="margin-top:-12px"> -->
                <v-col cols="12" md="12" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" prepend-icon="" chips show-size v-model="employee.tasvireSafheShenasnameh2"  :disabled="userEdit"
                  label="تصویر صفحه دوم شناسنامه"
                ></v-file-input>
                </v-col>
                <v-col cols="12"  md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(employee.tasvireSafheShenasnameh2Prev)" :src="employee.tasvireSafheShenasnameh2Prev?employee.tasvireSafheShenasnameh2Prev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              <!-- </v-row> -->
              </v-col>
              <!-- ##############################-->
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <!-- <v-row dense style="margin-top:-12px"> -->
                <v-col cols="12" md="12" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" prepend-icon="" persistent-hint hint="اگر کارت ملی خود را تحویل نگرفته اید، عکس رسید تعویض" chips show-size v-model="employee.tasvireKarteMelliJolo"  :disabled="userEdit"
                  label="تصویر جلوی کارت ملی"
                ></v-file-input>
                </v-col>
                <v-col cols="12"  md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(employee.tasvireKarteMelliJoloPrev)" :src="employee.tasvireKarteMelliJoloPrev?employee.tasvireKarteMelliJoloPrev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              <!-- </v-row> -->
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
              <!-- <v-row dense style="margin-top:-12px"> -->
                <v-col cols="12" md="12" class="d-flex align-center justify-center">
                  <v-file-input prepend-inner-icon="mdi-camera" persistent-hint hint="اگر کارت ملی خود را تحویل نگرفته اید، عکس رسید تعویض" prepend-icon="" chips show-size v-model="employee.tasvireKarteMelliPosht"  :disabled="userEdit"
                  label="تصویر پشت کارت ملی"
                ></v-file-input>
                </v-col>
                <v-col cols="12" md="10" class="d-flex justify-center align-center">
                  <img @click="showImageLarge(employee.tasvireKarteMelliPoshtPrev)" :src="employee.tasvireKarteMelliPoshtPrev?employee.tasvireKarteMelliPoshtPrev:require('../assets/images/unknownUser.png')" style="width:100%;height:100%;max-width:100px;max-height:100px;"/>
                </v-col>
              <!-- </v-row> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex justify-start align-center">
          <v-btn :loading="btnLoading" block variant="outlined" class="bg-red d-flex d-md-none" @click="updatePersonalInfo" :disabled="userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن اطلاعات کاربر</span>
          </v-btn>
          <v-btn :loading="btnLoading" variant="outlined" class="bg-red d-none d-md-flex" @click="updatePersonalInfo" :disabled="userEdit">
          <v-icon>mdi-update</v-icon>
          <span>آپدیت کردن اطلاعات کاربر</span>
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-card>
    </template>
    <script>                                                                                     
    import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';
    import {provinces,works} from "@/services/constantprovider";
    import{PostData_normal,PostData_formData} from "@/services/remotedatamodify"
    export default{
      data(){
        return{
          dialog:false,
          jobItems:[],
          selectedJobArray:[],
          imageLargeScale:false,
          imageLargeScaleSrc:"",
          btnLoading:false,
          uiol:true,
          userEdit:true,
          ostans:[],
          sarbaziArray:["پایان خدمت","معافیت کفالت","معافیت دایم پزشکی","معافیت موقت پزشکی","سایر"],
          jensiatArray:["مرد","زن"],
          taahol:["متاهل","مجرد"],
          noeKarItems:['موقت','دایمی','فرقی نمی کند'],
         employee:{
          sarbaziSayereTozihat:"",
          sarbazi:"",
          melliat:"",
          jensiat:"",
          tedadefarzandan:"",
          sarperastekhanevar:"",
          tedadeafradetahtetakaffol:"",
          ghad:"",
          vazn:"",
          specialill:"",
          name:"",
          lastName:"",
          namePedar:"",
          tarikhTavallod:"",
          shomarehShenasnameh:"",
          shomarehMelli:"",
          ostaneTavallod:"",
          address:"",
          email:"",
          moteahel:"",
          shomarehSabet:"",
          noeKareDarkhasti:"",
          haddeaghalHoghogheDarkhasti:"",
          tasvirePersoneli:"",
          tasvireSafheShenasnameh1:"",
          tasvireSafheShenasnameh2:"", 
          tasvireKarteMelliJolo:"",
          tasvireKarteMelliPosht:"", 
          tasvirePersoneliPrev:"",
          tasvireSafheShenasnameh1Prev:"",
          tasvireSafheShenasnameh2Prev:"", 
          tasvireKarteMelliJoloPrev:"",
          tasvireKarteMelliPoshtPrev:"",    
         }
        }
      },
      watch:{
        selectedJobArray(){
          console.log(this.selectedJobArray);
        }
      },
      computed:{
        decoratedSelectedJobArray(){
          if(!this.selectedJobArray || this.selectedJobArray.length==0){
            return [];
          }
          else{
            return this.selectedJobArray.map((item)=>{
            return item+"-"
          })
          }
       
        },
        showHaddeaghalHoghogh(){
          if(this.employee.noeKareDarkhasti==this.noeKarItems[1]){
            return true
          }
          else{
            return false
          }
        }
      },
      created(){
        this.jobItems=works;
        console.log(this.jobItems)
        this.uiol=true;
        this.ostans=provinces.map(province=>province.name);
        this.employee.noeKareDarkhasti=this.noeKarItems[2];
        PostData_normal("getPersonalInfo",{},null,(err,res)=>{
          if(err){
            this.uiol=false;
          }
          else{
              this.uiol=false;
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
                let user=res.data;
               this.employee.melliat=user.umlt && user.umlt!='null'?user.umlt:'';
                this.employee.jensiat=user.ujn && user.ujn!='null'?user.ujn:'';
                this.employee.tedadefarzandan=user.utfar && user.utfar!='null'?user.utfar:'';
                this.employee.sarperastekhanevar=user.usarp && user.usarp!='null'?user.usarp:'';
                this.employee.tedadeafradetahtetakaffol=user.utafttk && user.utafttk!='null'?user.utafttk:''
                this.employee.ghad=user.ughd && user.ughd!='null'?user.ughd:'';
                this.employee.vazn=user.uzn & user.uzn!='null'?user.uzn:'';
                this.employee.namePedar=user.unp && user.unp!='null'?user.unp:'';
                this.employee.specialill=user.uspil && user.uspil!='null'?user.uspil:'',
                this.employee.sarbaziSayereTozihat=user.usarbext && user.usarbext!='null'?user.usarbext:'';
                 this.employee.sarbazi=user.usarb && user.usarb!='null'?user.usarb:'';
                  this.employee.name=user.un && user.un!='null'?user.un:'';
                  this.employee.lastName=user.ulastn && user.ulastn!='null'?user.ulastn:'';
                  this.employee.tarikhTavallod=user.uttv && user.uttv!='null'?user.uttv:'';
                  this.employee.shomarehShenasnameh=user.ushshen && user.ushshen!='null'?user.ushshen:'';
                  this.employee.shomarehMelli=user.ushm && user.ushm!='null'?user.ushm:'';
                  this.employee.ostaneTavallod=user.uot && user.uot!='null'?user.uot:'';
                  this.employee.address=user.uaddr && user.uaddr!='null'?user.uaddr:'';
                  this.employee.email=user.ue && user.ue!='null'?user.ue:'';
                  this.employee.moteahel=user.umote && user.umote!='null'?user.umote:'';
                  this.employee.shomarehSabet=user.ushs && user.ushs!='null'?user.ushs:'';
                  this.employee.noeKareDarkhasti=user.unk && user.unk!='null'?user.unk:'';
                  this.employee.haddeaghalHoghogheDarkhasti=user.uhdh && user.uhdh!='null'?user.uhdh:'';
                  this.employee.tasvirePersoneliPrev="data:image/jpeg;base64,"+user.uofi ;
                  this.employee.tasvireSafheShenasnameh1Prev="data:image/jpeg;base64,"+user.ushen1 ;
                  this.employee.tasvireSafheShenasnameh2Prev="data:image/jpeg;base64,"+user.ushen2 ;
                  this.employee.tasvireKarteMelliJoloPrev="data:image/jpeg;base64,"+user.ukmj ;
                  this.employee.tasvireKarteMelliPoshtPrev="data:image/jpeg;base64,"+user.ukmp ;
                  this.selectedJobArray=user.usw && user.usw.length>0?user.usw:[]
              }
              }
            }
        })
      },
      components:{
        'DatePicker':Vue3PersianDatetimePicker
      },
      methods:{
        closeSelectedJob(item){
            let index=this.selectedJobArray.indexOf(item);
            this.selectedJobArray.splice(index,1);
            console.log(this.selectedJobArray);
        },
        openDialog(){
          this.dialog=true;
        },

        showImageLarge(imageSrcValue){
          this.imageLargeScale=true;
          this.imageLargeScaleSrc=imageSrcValue;
        },
        updatePersonalInfo(){
          this.btnLoading=true;
          let fmData=new FormData();
          console.log(this.employee)
          fmData.append("melliat",this.employee.melliat);
          fmData.append("jensiat",this.employee.jensiat);
          fmData.append("selectedKeyWords",JSON.stringify(this.selectedJobArray));
          fmData.append("tedadefarzandan",this.employee.tedadefarzandan);
          fmData.append("sarperastekhanevar",this.employee.sarperastekhanevar);
          fmData.append("tedadeafradetahtetakaffol",this.employee.tedadeafradetahtetakaffol);
          fmData.append("ghad",this.employee.ghad);
          fmData.append("vazn",this.employee.vazn);
          fmData.append("specialill",this.employee.specialill);
          fmData.append("sarbazi",this.employee.sarbazi);
          fmData.append("sarbaziSayereTozihat",this.employee.sarbaziSayereTozihat);
          fmData.append("name",this.employee.name);
          fmData.append("lastName",this.employee.lastName);
          fmData.append("namePedar",this.employee.namePedar);
          fmData.append("tarikhTavallod",this.employee.tarikhTavallod);
          fmData.append("shomarehShenasnameh",this.employee.shomarehShenasnameh);
          fmData.append("shomarehMelli",this.employee.shomarehMelli);
          fmData.append("ostaneTavallod",this.employee.ostaneTavallod);
          fmData.append("address",this.employee.address);
          fmData.append("email",this.employee.email);
          fmData.append("moteahel",this.employee.moteahel);
          fmData.append("shomarehSabet",this.employee.shomarehSabet);
          fmData.append("noeKareDarkhasti",this.employee.noeKareDarkhasti);
          fmData.append("haddeaghalHoghogheDarkhasti",this.employee.haddeaghalHoghogheDarkhasti);
          for(let i=0;i<this.employee.tasvirePersoneli.length;i++){
            fmData.append("Personeli",this.employee.tasvirePersoneli[i],`tasvire-Personeli.${(this.employee.tasvirePersoneli[i]&&this.employee.tasvirePersoneli[i].name)?this.employee.tasvirePersoneli[i].name.split(".").pop():"txt"}`);
          }
          for(let i=0;i<this.employee.tasvireSafheShenasnameh1.length;i++){
            fmData.append("Shenasnameh1",this.employee.tasvireSafheShenasnameh1[i],`tasvire-Shenasnameh-1.${(this.employee.tasvireSafheShenasnameh1[i]&&this.employee.tasvireSafheShenasnameh1[i].name)?this.employee.tasvireSafheShenasnameh1[i].name.split(".").pop():"txt"}`);
          }
          for(let i=0;i<this.employee.tasvireSafheShenasnameh2.length;i++){
            fmData.append("Shenasnameh2",this.employee.tasvireSafheShenasnameh2[i],`tasvire-Shenasnameh-2.${(this.employee.tasvireSafheShenasnameh2[i]&&this.employee.tasvireSafheShenasnameh2[i].name)?this.employee.tasvireSafheShenasnameh2[i].name.split(".").pop():"txt"}`);
          }
          for(let i=0;i<this.employee.tasvireKarteMelliJolo.length;i++){
            fmData.append("KarteMelliJolo",this.employee.tasvireKarteMelliJolo[i],`tasvire-KarteMelli-Jolo.${(this.employee.tasvireKarteMelliJolo[i]&&this.employee.tasvireKarteMelliJolo[i].name)?this.employee.tasvireKarteMelliJolo[i].name.split(".").pop():"txt"}`);
          }
          for(let i=0;i<this.employee.tasvireKarteMelliPosht.length;i++){
            fmData.append("KarteMelliPosht",this.employee.tasvireKarteMelliPosht[i],`tasvire-KarteMelli-Posht.${(this.employee.tasvireKarteMelliPosht[i]&&this.employee.tasvireKarteMelliPosht[i].name)?this.employee.tasvireKarteMelliPosht[i].name.split(".").pop():"txt"}`);
          }
          console.log(fmData);
          this.$store.state.pgd=true;
          PostData_formData("updatePersonalInfo",fmData,{
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
                    // this.$store.state.uln="";
                    // this.$router.replace("/login");
                  }, 3000);
              console.log(err);
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
                let user=res.data;
                  this.employee.name=user.un;
                  this.employee.lastName=user.ulastn;
                  this.employee.tarikhTavallod=user.uttv;
                  this.employee.shomarehShenasnameh=user.ushshen;
                  this.employee.shomarehMelli=user.ushm;
                  this.employee.ostaneTavallod=user.uot;
                  this.employee.address=user.uaddr;
                  this.employee.email=user.ue;
                  this.employee.moteahel=user.umote;
                  this.employee.shomarehSabet=user.ushs;
                  this.employee.noeKareDarkhasti=user.unk;
                  this.employee.haddeaghalHoghogheDarkhasti=user.uhdh;
                  this.employee.tasvirePersoneliPrev=user.uofi&&user.uofi!=undefined?"data:image/jpeg;base64,"+user.uofi:"";
                  this.employee.tasvireSafheShenasnameh1Prev=user.ushen1&&user.ushen1!='undefined'?"data:image/jpeg;base64,"+user.ushen1:"";
                  this.employee.tasvireSafheShenasnameh2Prev=user.ushen2&&user.ushen2!='undefined'?"data:image/jpeg;base64,"+user.ushen2:"";
                  this.employee.tasvireKarteMelliJoloPrev=user.ukmj&&user.ukmj!='undefined'?"data:image/jpeg;base64,"+user.ukmj:"";
                  this.employee.tasvireKarteMelliPoshtPrev=user.ukmp&&user.ukmp!='undefined'?"data:image/jpeg;base64,"+user.ukmp:"";
              }
              }
            }

          })
      },
    }
  }
    </script>
    <style>
    .v-expansion-panel-text__wrapper  {
      max-height:400px;
      overflow-y:auto
    }
    .vpd-input-group{
      height:58px !important;
    }
    .vpd-input-group>label{
      background-color:lightgrey !important;
    }
    </style>