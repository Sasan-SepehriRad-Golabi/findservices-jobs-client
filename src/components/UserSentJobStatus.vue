<template>
   <v-divider class="mb-5"></v-divider>
            <v-card style="margin-top:100px;" class="w-100 h-100">
                <v-card v-if="!jobexists && !distictJobs.length>0">
                 <v-locale-provider rtl>
                    <v-row class="justify-center align-center h-screen">
                        <v-col cols="12" md="4">
                           <v-alert type="info" color="bg-orange">
                            <span>  شما هنوز شغلی ثبت نکرده اید</span>
                           </v-alert>
                        </v-col>
                    </v-row>
                 </v-locale-provider>
                </v-card>
                <div v-else>
                  <v-container class="justify-center">
                  <v-locale-provider rtl>
                    <v-row class="justify-center">
                        <v-col cols="12" md="6">
                            <v-btn @click="closeGoToMainPage" block class="bg-red text-white pa-4 my-3" variant="outlined">
                                برگشت به صفحه اصلی
                            </v-btn>
                        </v-col>
                    </v-row>
                  </v-locale-provider>
                    <v-card elevation="10" class="w-95 my-3" v-for="(job,index) in distictJobs" :key="index">
                    <v-locale-provider rtl>
                    <v-card-text>
                        <v-card-subtitle class="text-red">توضیحات کلی شغل</v-card-subtitle>
                        <v-row>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                    <span>عنوان شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                   {{job.jobonvan}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>نوع شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobtype}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>شرایط زمانی شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    <span>{{job.jobSaateKartype}}</span><span>-</span><span class="text-red-darken-3">{{job.jobSaateKarDetail}}</span>
                                </v-col>
                            </v-col>
                        </v-row>
                        <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                            <!--second row-->
                            <v-row>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>روزهای کاری شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobRoozhayeKari}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>حقوق پیشنهادی شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobHoghoghePishnehadi}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>آدرس شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobLocation}}
                                </v-col>
                            </v-col>
                        </v-row>
                        <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                            <!-- third row-->
                            <v-row>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>میزان فوریت</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobImportanceLevel}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>تاریخ ایجاد شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobDateOfCreationInPersian}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>نام و نام خانوادگی کارفرما</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobCreatorNameAndLastName}}
                                </v-col>
                            </v-col>
                        </v-row>
                        <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                            <!--fourth row-->
                            <v-row>
                            <v-col class="d-flex" cols="12" md="6">
                                <v-col cols="6">
                                <span>سایر نکات و ویژگی ها</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    <v-textarea no-resize rows="3" style="white-space:normal !important;" v-model="job.jobMazayaAndNokat">
                                    </v-textarea>
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="3">
                                <v-col cols="6">
                                <span>وضعیت فعلی پیشنهاد کاری</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.jobStatusText}}
                                </v-col>
                            </v-col>
                        </v-row>
                        <v-divider class="w-75 bg-red my-2" style="color:red !important"></v-divider>
                         <!--5th row-->
                         <v-card-subtitle class="text-red">کارجوی نهایی قبول کننده شغل</v-card-subtitle>
                         <v-row>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>نام کاربری</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{job.acceptorId}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>نام</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{job.acceptorName}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>تاریخ تایید نهایی</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{job.acceptorFinalVerificationDateInPersian}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" >
                            <v-col cols="6">
                                <span>کلید واژه های تخصص های کارجو</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{job.acceptorSelectedKeyWords}}
                                </v-col>
                        </v-col>

                        <v-col v-if="job.jobStatusCode==4" class="d-flex justify-center" cols="12">
                               <v-row class="d-flex justify-center" >
                                <v-col cols="12" md="6">
                                <span v-if="job.isFeedbackProvided">نظر شما درباره کارجو</span>
                                <span v-else>نظر خود را درباره کارجوی مورد نظر به صورت خلاصه بیان کنید</span>
                                </v-col>
                                <v-col  cols="12" md="6">
                                    <v-card elevation="1" rounded-xl v-if="job.isFeedbackProvided">
                                        <v-card-text>{{job.jobFeedbackFromCreator}}</v-card-text></v-card>
                                    <v-row v-else>
                                       <v-card class="w-100">
                                        <v-card-text>
                                            <v-textarea  no-resize rows="5" v-model="jobFeedBack" placeholder="نظر خود در مورد کارجو را وارد نمایید. با وارد نمودن نظر خود امتیاز بالاتری دریافت خواهید نمود"></v-textarea>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn block :loading="jobFeedBackSending" @click="registerOpinion(job.id)" variant="outlined">ثبت نظر</v-btn>
                                        </v-card-actions>
                                       </v-card>
                                    </v-row>
                                </v-col>
                               </v-row>
                            </v-col>
                        </v-row>
                        
                     <!-- 6th row-->
                     <v-divider class="w-75 bg-red my-2"></v-divider>
                     <v-card-subtitle class="text-red" style="white-space:normal !important;"> کارجو هایی که برای این شغل درخواست داده اند. کارجوی نهایی در تماس سامانه رامش با کارجو و کارفرما مشخص خواهد شد</v-card-subtitle>
                     <v-row class="my-4">
                        <v-expansion-panels v-if="job.appliedEmployers && job.appliedEmployers.length>0">
                        <v-expansion-panel v-for="(applier,index) in job.appliedEmployers" :key="index">
                            <v-expansion-panel-title>
                               کاربر با شماره کاربری  {{applier.employeeId}}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                              <v-row>
                                <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>نام</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                    {{applier.employeeName}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>تاریخ درخواست برای شغل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{applier.employeeApplydateInPersian}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>وضعیت تاهل</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{applier.employeeMoteahhel}}
                                </v-col>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="4">
                                <v-col cols="6">
                                <span>خود کارفرما این کارجو را انتخاب نموده؟</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{applier.employeeAddByEmployer==1?'بله':'خیر'}}
                                </v-col>
                            </v-col>
                            <v-col class="d-fles" cols="12" md="8">
                            <v-col cols="6">
                                <span>کلید واژه های تخصص های کارجو</span>
                                </v-col>
                                <v-col style="color:green;" cols="6">
                                        {{applier.employeeSelectedKeyWords}}
                                </v-col>
                        </v-col>
                              </v-row>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                     </v-expansion-panels>
                     <v-card-title class="text-center w-100" style="white-space:normal !important;" v-else>کاربری برای این شغل درخواست نداده است</v-card-title>
                     </v-row>
                     
                    </v-card-text>
                    </v-locale-provider>
                </v-card>
                  </v-container>
                </div>
            </v-card>
    </template>
    <script>
    import {PostData_normal} from "@/services/remotedatamodify.js"
    export default{
        data(){
            return{
                jobexists:false,
                distictJobs:[],
                accerptorKeyWords:"-",
                employees:[],
                employeesKeyWords:[],
                jobFeedBack:"",
                jobFeedBackSending:false
            }
        },
        created(){
         this.getjobs()
        },
        methods:{
            registerOpinion(jobId){
                this.jobFeedBackSending=true;
                PostData_normal("registerOpinion",{jobId:jobId,opinion:this.jobFeedBack},null,(err,res)=>{
                    if(err){
                        this.jobFeedBackSending=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 2000);
                    }
                    else{
                        this.jobFeedBackSending=false;
                        if(res.data.result && res.data.result=="R4"){
                this.$store.state.snd=true;
                this.$store.state.snbg="red"
                  this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                    this.$store.state.uln="";
                    this.$router.replace("/login/2");
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R5"){
                this.btnloading=false;
              this.$store.state.snd=true;
              this.$store.state.snbg="red"
                  this.$store.state.snt="خطا در ارتیاط با سرور"
              setTimeout(() => {
                    this.$store.state.snd=false;
                  }, 2000);
              }
              else if(res.data.result && res.data.result=="R0"){
                this.$store.state.snd=true;
                this.$store.state.snbg="green"
                  this.$store.state.snt="نظر شما با موفقیت ثبت گردید."
                  setTimeout(() => {
                    this.$store.state.snt=""
                    this.$store.state.snd=false;
                  }, 2000);
              }
                    }
                })

            },
            closeGoToMainPage(){
                this.$router.replace("/");
            },
            getjobs(){
                PostData_normal("getuserJobs",{},null,(err,res)=>{
                    console.log(res)
                if(err){
                    this.jobexists=false;
                    this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 2000);
                }
                else{
                    if(res.data){
                        let result=res.data;
                        if(result.result=="R0"){
                            if(result.records.length>0){
                                this.$store.state.snd=true;
                                this.$store.state.snbg="green";
                    this.$store.state.snt="اطلاعات شما با موفقیت بارگذاری شد"
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 2000);
                                this.jobexists=true;
                                let userJobs=result.records;
                                console.log(userJobs);
                                let distinctJobIds=[];
                                if(userJobs.length && userJobs.length>0){
                                    for(let i=0;i<userJobs.length;i++){
                                    if(distinctJobIds.length==0){
                                        if(userJobs[i] && userJobs[i].id){
                                            distinctJobIds.push(userJobs[i].id);
                                            continue;
                                        }
                                    }
                                    else{                                        
                                        if(userJobs[i] && userJobs[i].id && distinctJobIds.indexOf(userJobs[i].id)==-1){
                                            distinctJobIds.push(userJobs[i].id);
                                            continue;
                                        }
                                    }
                                   
                                }
                                distinctJobIds.forEach(element => {
                                    let itemarrays=userJobs.filter((item)=>{return item.id==element});
                                    let tempObect={...itemarrays[0]}
                                    let x=[];
                                    itemarrays.forEach(element => {
                                        if(element.employeeId){
                                        x.push({
                                            employeeName:element.employeeName,
                                            employeeId:element.employeeId,
                                            employeeMoteahhel:element.employeeMoteahhel,
                                            employeeSelectedKeyWords:element.employeeSelectedKeyWords,
                                            employeeAddByEmployer:element.employeeAddByEmployer,
                                            employeeApplydateInPersian:element.applyDateInPersian
                                        })
                                    }
                                    });
                                    tempObect["appliedEmployers"]=x;
                                    this.distictJobs.push(tempObect);
                                }); 
                                }
                                else{
                                    this.distictJobs=[];    
                                }
                                console.log(this.distictJobs)
                            }
                            else{
                                this.jobexists=false;
                            }
                        }
                        else if(result.result=="R4"){
                            this.jobexists=false;
                            this.$store.state.snd=true;
                    this.$store.state.snt="شما به درستی ثبت نشده اید. لطفا دوباره وارد شوید"
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$store.state.uln="";
                        this.$router.replace("/login/2")
                    }, 2000);
                        }
                        else{
                            this.jobexists=false;
                            this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
                    this.$store.state.snbg="red";
                    setTimeout(() => {
                        this.$store.state.snd=false;
                    }, 2000);
                        }
                    }
                    else{
                        this.jobexists=false;
                        this.$store.state.snd=true;
                    this.$store.state.snt="خطا در ارتباط با سرور. مجددا تلاش نمایید"
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