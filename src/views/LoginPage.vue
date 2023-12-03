<template>
    <div class="d-none d-sm-flex text-black font-weight-bold h-screen overflow-y-hidden">
        <v-img src="../assets/images/logintemp.png" class="d-flex h-100 align-center w-100" cover>
            <v-container fluid class="h-100 w-100">
                <v-row dense justify="start" class="align-center">
                    <v-col cols="12" sm="6" offset-sm="1" style="max-width:500px;">
                       <v-locale-provider rtl>
                        <v-card elevation="2">
                            <v-tabs stacked centered v-model="tab">
                          <v-tab disabled=true value="0">
                            به عنوان کارجو
                          </v-tab>
                          <v-tab disabled=true value="1">
                            به عنوان کارفرما
                          </v-tab>
                          <v-tab value="2">
                            به عنوان هر دو
                          </v-tab>
                        </v-tabs>
                        <v-window v-model="tab">
                            <v-window-item value="0">
                                <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                <v-icon icon="mdi-human-greeting" color="green" ></v-icon>
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" >ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                   <div v-if="loginresult.resultlogintime">
                                    <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                   </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                            </v-window-item>
                            <v-window-item value="1">
                            <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                <v-icon icon="mdi-human-greeting" color="green" ></v-icon>
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" > ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                   <div v-if="loginresult.resultlogintime">
                                    <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                   </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                            </v-window-item>
                            <v-window-item value="2">
                            <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                <v-icon icon="mdi-human-greeting" color="green" ></v-icon>
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" >ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                   <div v-if="loginresult.resultlogintime">
                                    <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                   </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                            </v-window-item>
                        </v-window>
                        <v-card-subtitle class="mt-3" style="white-space:normal !important">
                            <v-icon color="red">mdi-information</v-icon>
                            <span class="mx-2">جهت استفاده کامل از امکانات وب سایت از گزینه هر دو ثبت نام کنید. در این صورت هم امکان ارسال شغل و در خواست نیروی کار دارید و هم می توانید به عنوانوی کار دارید و هم می توانید به عنوان کارجو موقعیت های کاری را ببینید</span>
                        </v-card-subtitle>
                        </v-card>
                       </v-locale-provider>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </div>
    <div class="d-flex d-sm-none mt-10 h-screen">
        <v-img src="../assets/images/logintempmobile.png" class="h-100 align-center" cover>
            <v-container fluid class="h-100 w-100">
                <v-row dense justify="start" class="align-center">
                    <v-col cols="12" sm="6" offset-sm="1" style="max-width:500px;">
                       <v-locale-provider rtl>
                        <v-card elevation="2">
                            <v-tabs centered stacked v-model="tab">
                                <v-tab disabled=true  value="0">
                                    کارجو
                                </v-tab>
                                <v-tab disabled=true  value="1">
                                    کارفرما
                                </v-tab>
                                <v-tab value="2">
                                    هردو
                                </v-tab>
                            </v-tabs>
                            <v-window v-model="tab">
                                <v-window-item value="0">
                                    <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" >ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                    <div v-if="loginresult.succeeded">
                                        <div v-if="loginresult.resultlogintime">
                                        <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                        </div>
                                    </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                                </v-window-item>
                                <v-window-item value="1">
                                    <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" >ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                    <div v-if="loginresult.succeeded">
                                        <div v-if="loginresult.resultlogintime">
                                        <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                        </div>
                                    </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                                </v-window-item>
                                <v-window-item value="2">
                                    <v-form @submit.prevent="loginClicked" validate-on="submit">
                            <template #append>
                                
                            </template>
                            <v-divider></v-divider>
                                <v-card-subtitle class="text-center text-red" >ورود به سایت</v-card-subtitle>
                                <v-card-text>
                                    <v-text-field
                                    variant="underlined"
                                    maxlength="11"
                                    class="my-3"
                                    :rules="[!loginresult.succeeded?rules.required:rules.code]" 
                                    type="number"
                                    v-model="phoneOrCode"
                                    color="primary"
                                    :label="!loginresult.succeeded?'شماره موبایل':'کد ارسال شده'"
                                    :hint="!loginresult.succeeded?'شماره موبایل همراه با 0 ابتدای آن':'کد ارسال شده را وارد نمایید'"
                                    >
                                    <template #prepend>
                                        <v-icon color="purple">mdi-phone</v-icon>
                                    </template>
                                </v-text-field>
                                </v-card-text>
                                <v-card-subtitle class="d-flex" v-if="loginresult.haveResult">                                    
                                    <v-icon :style="{color:loginresult.resultError?'red':'green'}"
                                    :icon="loginresult.resultError?'mdi-emoticon-sad':'mdi-emoticon-happy'" ></v-icon>
                                    <span :style="{color:loginresult.resultError?'red':'green'}">{{loginresult.resulttext}}</span>
                                    <v-spacer></v-spacer>
                                    <div v-if="loginresult.succeeded">
                                        <div v-if="loginresult.resultlogintime">
                                        <span class="text-green-darken-4 font-weight-bold" style="font-size:20px">{{loginresult.resultlogintime}}</span>
                                    <span style="width:15px"></span>
                                    <span v-if="loginresult.succeeded" class="text-green-darken-4 font-weight-bold">ثانیه</span>
                                    <span style="width:15px"></span>
                                        </div>
                                    </div>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn type="submit" :loading="loginLoading" @click="loginClicked" variant="elevated" 
                                    block rounded="sm" size="large" 
                                    class="py-4 text-center bg-red text-black">{{!loginresult.succeeded?'ورود':'ارسال کد'}}</v-btn>
                                </v-card-actions>
                         </v-form>
                                </v-window-item>
                            </v-window>
                            <v-card-subtitle class="mt-3" style="white-space:normal !important;text-align:justify;">
                            <v-icon color="red">mdi-information</v-icon>
                            <span class="mx-2">اگر به دنبال شغل هستید به عنوان کارجو ثبت نام کنید. اگر دنبال نیروی کار می گردید به عنوان کارفرما ثبت نام نمایید . 
                                  در صورتی که هر دومورد را نیاز دارید از منوی هردو ثبت نام نام نمایید.</span>
                        </v-card-subtitle>
                        </v-card>
                       </v-locale-provider>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </div>
</template>
<script>
import {PostData_normal} from '../services/remotedatamodify.js'
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            tab:"0",
            phoneNumber:"",
            codeNumber:"",
            userName:"",
            userLastName:"",
            uc:false,
            userStatus:"",
            loginresult:{
                resulttext:"",
                resultlogintime:false,
                resultError:false,
                haveResult:false,
                succeeded:false
            },
            loginLoading:false,
            rules:{
                required:value=>{
                        if(value && value.trim().length==11){
                            return true;
                        }
                        else{
                            return "شماره موبایل به درستی وارد نشده است ( 11 رقم نیاز است)"
                        }                    
                },
                code:()=>{
                    return true;
                }
            }
        }
    },
    created(){
        let routeTab=this.$route.params.tab;
        if(routeTab=="0"||routeTab=="1"||routeTab=="2"){
            this.tab=routeTab;
        }
        else{
            this.tab="0"
        }
    },
    computed:{
        ...mapGetters(['uln']),
        phoneOrCode:{
            get(){
                if(this.loginresult.succeeded){
                    return this.codeNumber
                }
                else{
                    return this.phoneNumber
                }
            },
            set(val){
                if(this.loginresult.succeeded){
                    this.codeNumber=val;
                }
                else{

                   this.phoneNumber=val;
                }
            }
        },
    },
    watch:{
        tab(newval){
            console.log(newval);
        }
    },
    methods:{  
        enterTest(event){
            event.preventDefault();
            event.stopPropagation ();
            console.log("test");
        },        
        loginClicked(event){
            event.stopPropagation();
            event.preventDefault();
            if(this.tab=="0"){
                if(!this.loginresult.succeeded){
                this.checkAndSendPhoneNumber()
                }
                else{
                    this.checkLoginCode();
                }
            }
            else if(this.tab=="1"){
                if(!this.loginresult.succeeded){
                this.checkAndSendPhoneNumber()
                }
                else{
                    this.checkLoginCode();
                }
            }
            else{
                if(!this.loginresult.succeeded){
                this.checkAndSendPhoneNumber()
                }
                else{
                    this.checkLoginCode();
                }
            }
        },
        checkLoginCode(){
            this.loginLoading=true;
            if(this.phoneOrCode.length<=0){
                clearInterval(this.$store.state.gc);
                    this.loginresult={resulttext:"کد ارسال شده را وارد نمایید",resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=false;
                    this.$store.state.uln="error";
            }
            else{
                PostData_normal('authcode',{code:this.codeNumber},null,(error,res)=>{
                if(error){
                    clearInterval(this.$store.state.gc);
                    this.$store.state.uc=false;
                    this.$store.state.uln="error";
                    this.loginresult={resulttext:"خطا در ارسال اطلاعات. دوباره تلاش کنید",resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=false;
                }
                else{
                    console.log(res.data);
                    var result=res.data[0];
                    if(result.res=="R4"){
                        this.$store.state.uc=false;
                        this.$store.state.uln="error";
                        clearInterval(this.$store.state.gc);
                        this.loginresult={resulttext:"مشکل در تایید هویت. لطفا دوباره وارد شوید",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=true;
                    setTimeout(() => {
                    this.loginresult.succeeded=false;
                    this.loginresult.haveResult=false
                    this.loginLoading=false;
                    }, 2000);
                    }
                    else if(result.res=="R5"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.uln="error";
                        this.loginresult={resulttext:"حطا در دریافت اطلاعات",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=true;
                    setTimeout(() => {
                    this.loginresult.succeeded=false;
                    this.loginresult.haveResult=false
                    this.loginLoading=false;
                    }, 2000);
                    }
                    else if(result.res=="R6"){
                        this.$store.state.uc=false;
                        this.$store.state.uln="error";
                        clearInterval(this.$store.state.gc);
                        this.loginresult={resulttext:"کد مورد نظر منقضی شده است",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=true;
                    setTimeout(() => {
                    this.loginresult.succeeded=false;
                    this.loginresult.haveResult=false
                    this.loginLoading=false;
                    }, 2000);
                    }
                    else if(result.res=="R7"){
                        this.$store.state.uc=false;
                        this.$store.state.uln="error";
                        this.loginresult={resulttext:"کد وارد شده اشتباه هست",
                        resultlogintime:true,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=false;
                    }
                    else if(result.res=="update2"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uln="update2";
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
                        this.loginresult={resulttext:"تبریک...خوش آمدید.",resultlogintime:false,resultError:false,
                            haveResult:true,succeeded:true}
                     this.loginLoading=true;
                        setTimeout(() => {
                            this.$store.state.wd=true;
                            this.loginLoading=false;
                            this.$router.replace("/");
                            this.$store.commit('culn','update2');
                        }, 1000);
                    }
                    else if(result.res=="update1"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.uln="update1";  
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
                        this.loginresult={resulttext:"تبریک...خوش آمدید.",resultlogintime:false,resultError:false,
                            haveResult:true,succeeded:true}
                     this.loginLoading=true;
                        setTimeout(() => {
                            this.$store.state.wd=true;
                            this.loginLoading=false;
                            this.$router.replace("/");
                            this.$store.commit('culn','update1');
                        }, 1000);
                    }
                    else if(result.res=="update0"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.uln="update0";
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
                        this.loginresult={resulttext:"تبریک...خوش آمدید.",resultlogintime:false,resultError:false,
                            haveResult:true,succeeded:true}
                     this.loginLoading=true;
                        setTimeout(() => {
                            this.$store.state.wd=true;
                            this.loginLoading=false;
                            this.$router.replace("/");
                            this.$store.commit('culn','update0');
                        }, 1000);
                       
                    }
                    else if(result.res=="blocked"){
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uln="blocked";
                        this.$store.state.uc=false;
                        this.loginresult={resulttext:"شما امکان استفاده کامل از سیستم را ندارید. لطفا با ما تماس بگیرید",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=false;
                    }
                    else{
                        clearInterval(this.$store.state.gc);
                        this.$store.state.uc=false;
                        this.$store.state.uln="error";
                        this.loginresult={resulttext:"خطا در ارتباط با سرور",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=false;
                    }
                }
            })
            }
        },     
        checkAndSendPhoneNumber(){
            this.loginresult.haveResult=false
            this.loginLoading=true;
            if(this.phoneOrCode.length<=0){
                clearInterval(this.$store.state.gc);
                this.loginresult={resulttext:"شماره موبایل را وارد نمایید",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:false}
                    this.loginLoading=false;
            }
            else{
                PostData_normal('verifytel',{phone:this.phoneNumber,type:this.tab?this.tab:"0"},null,(error,res)=>{
                if(error){
                    clearInterval(this.$store.state.gc);
                    this.loginresult={resulttext:"در ارسال اطلاعات خطایی رخ داد. دوباره تلاش کنید",
                    resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:false}
                    this.loginLoading=false;
                }
                else{
                   this.loginLoading=false;
                   var result=res.data.result;
                   var time=res.data.time;
                   console.log(result);
                   if(result=="R1"){
                    this.loginresult={resulttext:"کد ارسال شده را وارد نمایید",
                        resultlogintime:time,resultError:false,
                    haveResult:true,succeeded:true}
                    this.startLoginCodeCounting(time)
                   }
                   else{
                    clearInterval(this.$store.state.gc);
                    this.loginresult={resulttext:"در ارسال کد حطایی رخ داد. دوباره تلاش کنید",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:false}
                    this.loginLoading=false;
                   }
                }
            })
            }
        },
        startLoginCodeCounting(time){
            this.$store.state.gc=setInterval(() => {
                time--;
                this.loginresult.resultlogintime=time;
                if(time<=0){
                    clearInterval(this.$store.state.gc);
                    this.loginresult={resulttext:"زمان برای وارد کردن کد به اتمام رسید",
                        resultlogintime:false,resultError:true,
                    haveResult:true,succeeded:true}
                    this.loginLoading=true;
                    setTimeout(() => {
                    this.loginresult.succeeded=false;
                    this.loginresult.haveResult=false
                    this.loginLoading=false;
                    }, 2000);
                }
            }, 1000);
        },
    }
}
</script>
<style>

</style>