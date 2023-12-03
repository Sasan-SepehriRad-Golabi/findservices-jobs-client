<template>
    <v-container fluid style="position:relative;">
        <v-row dense style="position:relative;z-index:100;" class="justify-center align-center d-flex d-sm-none mt-9">
                    <v-col cols="12" md="6" offset-md="2">
                        <v-card-item>
                            <v-locale-provider rtl>
                                <v-text-field  v-model="searchKeyWords" @focus="openSearchBox"     @update:modelValue ="searchKeyWordChange"
                                    class="text-black pa-3 font-weight-regular" bg-color="white" variant="outlined"
                                    label="جستجوی نیروی کار"
                                    hint="شغل مورد نیاز خود را جستجو کنید. مثلا:  پرستار و ....">
                                    <template v-slot:prepend-inner>
                                        <v-icon style="font-size: 20px;opacity: 1;" color="black"
                                            size="large">mdi-account-search</v-icon>
                                    </template>
                                    <v-menu permanent v-model="searchmenu" >
                                        <v-card  style="min-height:300px;margin-top:140px;width:100vw;">
                                           <v-row v-if="!searchedJobList.length>0" class="justify-center align-center text-center h-100 w-100 mt-6 mx-auto">
                                           <v-col>
                                            <v-row class="justify-end">
                                                <v-icon @click="searchmenu=false" color="red" class="ml-4 mb-4">mdi-close</v-icon>
                                            </v-row>
                                            <v-row>
                                                <v-card-text>
                                                <v-alert color="warning">
                                                    شغل مورد نظر خود را وارد نمایید تا افراد ماهر مورد نیازتان را بیابید
                                                </v-alert>
                                            </v-card-text>
                                            </v-row>
                                           </v-col>
                                           </v-row>
                                           <v-list v-else lines="2">
                                            <v-list-item @click="findEmployers(item)" class="pa-6" lines="2" v-for="(item,index) in searchedJobList" :key="index">
                                                <v-list-item-title v-if="item.level1">
                                                    <v-icon>mdi-book-open</v-icon>
                                                    <span>{{item.level1}}</span>
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="mr-8 my-2" v-if="item.level2&&item.level3">
                                                    {{item.level2}}-{{item.level3}}
                                                </v-list-item-subtitle>
                                                <div v-else>
                                                    <v-list-item-subtitle class="mr-8 my-2" v-if="item.level2">
                                                    {{item.level2}}
                                                    </v-list-item-subtitle>
                                                </div>
                                                <v-divider ></v-divider>
                                            </v-list-item>
                                           </v-list>
                                        </v-card>
                                    </v-menu>
                                </v-text-field>
                            </v-locale-provider>
                        </v-card-item>
                    </v-col>
        </v-row>
                <v-divider class="bg-red text-red mt-n5"></v-divider>
               <div class="mt-sm-16">
                <v-divider></v-divider>
                <v-row dense class="d-flex d-sm-flex mt-0 mt-sm-16">
                  <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
                  <v-row>
                    <v-col cols="12" sm="6">
                        <v-card @click.once="checkifregasEmployee" height="200" elevation="5" class="rounded-lg">
                            <v-row class="d-none d-sm-flex">
                                <v-col cols="6" class="d-flex justify-center align-center">
                                  
                                    <v-img src="@/assets/images/employee.gif" style="height:220px">
                                    </v-img>
                               
                                </v-col>
                             
                                <v-col cols="6">
                                    <v-locale-provider rtl>
                                    <v-card-text>
                                        دنبال کار می گردی؟؟
                                    </v-card-text>
                                    <v-divider class="my-2"></v-divider>
                                    <v-card-subtitle style="white-space:normal !important;">پروفایلت رو تکمیل کن تا مناسب ترین شغل رو برات پیدا کنیم</v-card-subtitle>
                                    <v-divider class="my-1"></v-divider>
                                    <v-card-subtitle style="white-space:normal !important;color:red;">هرچی پرفایلت کامل تر باشه، امتیاز بالاتری داری و سریع تر معرفی می شی</v-card-subtitle>
                                </v-locale-provider>
                                </v-col>
                             
                            </v-row>
                         <v-col cols="12" class="d-flex d-sm-none mx-auto d-flex h-100 w-100 align-center justify-center">
                            <v-row class="w-100 h-100 align-center justify-center">
                                <v-img lazy-src="@/assets/images/employee.gif" src="http://not/valid" style="height:220px" class="align-center justify-center" contain>
                                    <template #placeholder>
                                   <v-card style="background-color:rgba(0,0,0,.1);height:100%;margin-top:10px;" class="mx-4 rounded-xl">
                                    <v-row dense class="justify-center align-center">
                                        <v-col cols="12">
                                <v-locale-provider rtl>
                                  <v-card-text class="font-weight-bold">
                                      دنبال کار می گردی؟؟
                                  </v-card-text>
                                  <v-divider class="my-2"></v-divider>
                                  <v-card-subtitle class="font-weight-bold" style="white-space:normal !important;">پروفایلت رو تکمیل کن تا مناسب ترین شغل رو برات پیدا کنیم</v-card-subtitle>
                                  <v-divider class="my-1"></v-divider>
                                  <v-card-subtitle  class="font-weight-bold" style="white-space:normal !important;color:red;">هرچی پرفایلت کامل تر باشه، امتیاز بالاتری داری و سریع تر معرفی می شی</v-card-subtitle>
                                </v-locale-provider>
                                </v-col>
                                    </v-row>
                                   </v-card>
                                    </template>
                                  </v-img>
                               
                          
                            </v-row>
                         </v-col>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-card @click.once="checkifregasEmployer" height="200" elevation="5" class="rounded-lg">
                            <v-row class="d-none d-sm-flex">
                                <v-col cols="6" class="d-flex justify-center align-center">
                                  
                                    <v-img src="@/assets/images/employer.jpg" style="height:220px">
                                    </v-img>
                               
                                </v-col>
                             
                                <v-col cols="6">
                                    <v-locale-provider rtl>
                                    <v-card-text>
                                        دنبال نیروی کار می گردی؟
                                    </v-card-text>
                                    <v-divider class="my-2"></v-divider>
                                    <v-card-subtitle style="white-space:normal !important;">شغل مورد نیازتو ثبت کن تا بهتربن متخصص ها رو بهت معرفی کنیم</v-card-subtitle>
                                </v-locale-provider>
                                </v-col>
                             
                            </v-row>
                         <v-col cols="12" class="d-flex d-sm-none mx-auto d-flex h-100 w-100 align-center justify-center">
                            <v-row class="w-100 h-100 align-center justify-center">
                                <v-img lazy-src="@/assets/images/employer.jpg" src="http://not/valid" style="height:220px" class="align-center justify-center" contain>
                                    <template #placeholder>
                                   <v-card style="background-color:rgba(0,0,0,.1);height:100%;margin-top:10px;" class="mx-4 rounded-xl">
                                    <v-row dense class="justify-center align-center">
                                        <v-col cols="12">
                                <v-locale-provider rtl>
                                  <v-card-text class="font-weight-bold">
                                    دنبال نیروی کار می گردی؟
                                  </v-card-text>
                                  <v-divider class="my-2"></v-divider>
                                  <v-card-subtitle class="font-weight-bold" style="white-space:normal !important;">شغل مورد نیازتو ثبت کن تا بهتربن متخصص ها رو بهت معرفی کنیم</v-card-subtitle>
                                </v-locale-provider>
                                </v-col>
                                    </v-row>
                                   </v-card>
                                    </template>
                                  </v-img>
                               
                          
                            </v-row>
                         </v-col>
                        </v-card>
                        <!--#####################-->
                    
                    </v-col>
                  </v-row>
                  </v-col>
                </v-row>
               </div>
        <!-- <v-card class="pa-3 mt-n12 mt-sm-13" rounded variant="flat" max-height="500px" style="position: relative;">
            <v-img src="../assets/images/jobfindbanner1.jpg" aspect-ratio="16/9" class="align-start bannerimg" cover
                style="border-radius: 20px;position: relative;object-fit:fill;" gradient="to bottom, #ffffff, rgb(0 4 12 / 10%)"
                max-height="500px">
            </v-img>
        </v-card> -->
    </v-container>
</template>
<script>
import { PostData_normal } from "@/services/remotedatamodify.js";
import {mapState} from 'vuex'
import {works} from "@/services/constantprovider.js"
export default {
    data() {
        return {
            showsuggestions: false,
            textintextfield: "",
            searchKeyWords:"",
            listOfAllJobs:[],
            searchedJobList:[],
            searchmenu:false,
            searchResultEmployers:[]
        }
    },
    computed:{
        ...mapState(['uty','snd','snt','uln'])
    },
    created(){
        let tempArray=[];
       if(works.length>0){
        works.forEach((item) => {
            if(item.childs==false){
                tempArray.push({
                    level1:item.name,
                    level2:null,
                    level3:null
                })
            }
            else{
                if(item.childs.length>0){
                    item.childs.forEach((secondItem) => {
                        if(secondItem.childs==false){
                            tempArray.push({
                                level1:item.name,
                                level2:secondItem.name,
                                level3:null
                            })
                        }
                        else{
                            if(secondItem.childs.length>0){
                                secondItem.childs.forEach((thirdItem) => {
                                    if(thirdItem.childs==false){
                                        tempArray.push({
                                            level1:item.name,
                                            level2:secondItem.name,
                                            level3:thirdItem.name
                                        })
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
       }
       this.listOfAllJobs=[...tempArray];
    },
    mounted() {

    },
    methods: {
        findEmployers(item){
            this.$store.state.searchedItem=item;
            this.$router.replace("/employersearchedresult");
        },
        openSearchBox(){
            this.searchmenu=true;
        },
        searchKeyWordChange(){
          try{
            if(this.searchKeyWords.length>0){
                this.searchedJobList=this.listOfAllJobs.filter((item)=>{
                    if((new RegExp(this.searchKeyWords)).test(item.level1)||(new RegExp(this.searchKeyWords)).test(item.level2)||(new RegExp(this.searchKeyWords)).test(item.level3))
                    {
                        return true
                    }
                    else{
                        return false
                    }
                })
            }
            else{
                this.searchedJobList=[];
            }
          }
          catch(err){
            this.searchedJobList=[];
          }
        },
        checkifregasEmployee(event){
            console.log("ggggggggg")
            event.stopPropagation();
            event.preventDefault();
            PostData_normal("checkIfRegister",{},null,(err,res)=>{
                console.log(res);
                let result=res.data;
                if(result.res && result.res=="R0"){
                    //you are a user
                    this.$router.replace('/userinfo')
                }
                else if(result.res && result.res=="R1"){
                    //you are a user
                    this.$store.state.snd=true;
                    this.$store.state.uln="";
                    this.$store.state.snt="شما در سیستم به عنوان کارفرما ثبت نام نموده اید. برای ثبت  اطلاعات از صفحه ثبت نام به عنوان کارجو یا هردو ثبت نام نمایید  ";
                    this.$store.state.snbg="red"
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace("/login/2");
                    }, 3000);
                    //you are employer
                    
                }
                else if(result.res && result.res=="R2"){
                    //your are both user and employer
                    this.$router.replace('/userinfo')
                }
                else{
                    // you are not registered properly
                    this.$store.state.snd=true;
                    this.$store.state.uln="";
                    this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا به عنوان کارفرما یا هر دو ثبت نام نمایید";
                    this.$store.state.snbg="red"
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace("/login/2");
                    }, 2000);

                }

            })
        },
        checkifregasEmployer(event){
            event.stopPropagation();
            event.preventDefault();
            PostData_normal("checkIfRegister",{},null,(err,res)=>{
                console.log(res);
                let result=res.data;
                if(result.res && result.res=="R0"){
                    //you are a user
                    this.$store.state.snd=true;
                    this.$store.state.uln="";
                    this.$store.state.snt="شما در سیستم به عنوان کارجو ثبت نام نموده اید. برای ثبت  شغل از صفح ثبت نام به عنوان هردو ثبت نام نمایید  ";
                    this.$store.state.snbg="red"
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace("/login/2");
                    }, 3000);
                }
                else if(result.res && result.res=="R1"){
                    //you are employer
                    this.$router.replace("/employerReg/none");
                }
                else if(result.res && result.res=="R2"){
                    //your are both user and employer
                    this.$router.replace("/employerReg/none");
                }
                else{
                    // you are not registered properly
                    this.$store.state.snd=true;
                    this.$store.state.uln="";
                    this.$store.state.snt="شما به درستی در سیستم ثبت نشده اید. لطفا به عنوان کارفرما یا هر دو ثبت نام نمایید";
                    this.$store.state.snbg="red"
                    setTimeout(() => {
                        this.$store.state.snd=false;
                        this.$router.replace("/login/2");
                    }, 2000);

                }

            })
        },
        openjobsuggesions() {
            console.log(this.textintextfield);
            if (this.textintextfield.trim().length > 0) {
                this.showsuggestions = true;
            }
            else {
                this.showsuggestions = false;
            }
        }
    }
}
</script>
<style scoped>
.imggg{
 
}
</style>