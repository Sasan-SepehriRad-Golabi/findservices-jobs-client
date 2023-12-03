<template>
  <v-locale-provider rtl >
    <v-app-bar class="main-nav justify-start py-1" :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="openNavList"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title >
            <v-col>
                <v-row class="align-center justify-start">
                    <v-avatar style="width:50px !important;height:50px !important">
                <v-img src="../assets/images/rameshicon.png" ></v-img>
                    </v-avatar>
                    
                                <v-text-field  @focus="openSearchBox"  v-model="searchKeyWords" 
                                @update:modelValue ="searchKeyWordChange"
                                    class="text-black pa-3 font-weight-regular d-none d-sm-block mt-5" style="max-width:600px" bg-color="grey-lighten-3" variant="outlined" 
                                    label="شغل مورد نیاز خود را جستجو کنید. مثلا: پرستار ..">
                                    <template v-slot:prepend-inner>
                                        <v-icon style="font-size: 20px;opacity: 1;" color="black"
                                            size="large">mdi-account-search</v-icon>
                                    </template>
                                    <v-menu scroll-strategy="block" fullscreen v-model="searchmenu" >
                                        <v-card style="min-height:300px;margin-top:70px;width:100vw;">
                                           <v-row v-if="!searchedJobList.length>0" class="justify-center align-center text-center h-100 w-100">
                                            <v-card-text>
                                                <v-alert color="warning">
                                                    شغل مورد نظر خود را وارد نمایید تا افراد ماهر مورد نیازتان را بیابید
                                                </v-alert>
                                            </v-card-text>
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
                            
                </v-row>
            </v-col>         
        </v-app-bar-title>
        <v-btn style="overflow:hidden !important;" v-if="uty==0&&(uln=='update0'||uln=='update1'||uln=='update2')?true:false" variant="outlined" class="btn">
            <v-dialog activator="parent" id="dialog1">
       <v-card elevation="2" :width="screenWidth" >
        <v-locale-provider rtl>
            <v-list lines="3" width="100%" >
            <v-list-subheader class="mb-1">اطلاعات شما</v-list-subheader>            
            <v-divider></v-divider>
                            <v-list-item class="my-5" :class="{smallList:isInSmallMode}" >
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img :src="(up.upi && up.upi.length>40)?up.upi:'@/assets/images/unknownUser.png'"> </v-img>
                                    </v-avatar>
                                    <span>
                                        {{(up.upn&&((up.upn).length>0))?up.upn:(up.upln&&((up.upln).length>0))?up.upln:'ناشناس'}}
                                    </span>
                                    <span class="mx-2">عزیز </span>
                                    <span> خوش آمدید</span>
                                </template>
                                <v-list-item-title>
                                    <v-divider class="my-2"></v-divider>
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-title>
                                                {{(up.upn&&((up.upn).length>0))?up.upn:(up.upln&&((up.upln).length>0))?up.upln:'ناشناس'}}
                                            </v-expansion-panel-title>
                                            <template #text>
                                                    <v-list lines="3" width="100%">
                                                        <v-divider></v-divider>
                                                        <v-list-item @click="this.$router.replace('/userinfo/personal')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-icon >mdi-account</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>اطلاعات شخصی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':uc?'green':'red'}">{{uc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="this.$router.replace('/userinfo/unicert')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                       <v-icon >mdi-school</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>اطلاعات تحصیلی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':unc?'green':'red'}">{{unc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="this.$router.replace('/userinfo/foreignlanguage')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img src="../assets/images/foreignlanguage.png">
                                        </v-img>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>مدارک زبان خارجی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':flc?'green':'red'}">{{flc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="this.$router.replace('/userinfo/skills')"  class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                       <v-icon >mdi-tools</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>مهارت های شما</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':sc?'green':'red'}">{{sc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>                           
                            <v-list-item @click="this.$router.replace('/userinfo/jobresume')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img src="../assets/images/interests.png">
                                        </v-img>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>سوابق کاری</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':jrc?'green':'red'}">{{jrc?'تکمیل می باشد':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>                           
                           <v-list-item @click="this.$router.replace('/userinfo/interests')" class="my-5" :class="{smallList:isInSmallMode}">
                               <template v-slot:prepend>
                                   <v-avatar>
                                       <v-img src="../assets/images/interests.png">
                                       </v-img>
                                   </v-avatar>
                               </template>
                               <template #append>
                                   <v-icon color="purple">mdi-arrow-left</v-icon>
                               </template>
                             <v-list-item-title>علایق و خواسته ها</v-list-item-title>
                             <v-list-item-subtitle class="mt-2" :style="{'color':ic?'green':'red'}">{{ic?'تکمیل می باشد':'نیاز به تکمیل'}}</v-list-item-subtitle>
                           </v-list-item>
                                                    </v-list>
                                            </template>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click.prevent="exitProfile" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                  <v-icon>mdi-exit-to-app</v-icon>
                                  <span>خروج</span>
                                </template> 
                            </v-list-item>
        </v-list>
        </v-locale-provider>
       </v-card>
      </v-dialog>
            <v-icon v-if="!up.upi" size="large" color="black" class="main-nav-login-icon ml-2 logedIcon">mdi-account</v-icon>
            <v-avatar v-if="up.upi">
            <img :src="up.upi" />
            </v-avatar>
            <span class="text-grey-darken-2 font-weight-bold">خوش آمدید</span>
        </v-btn>
        <v-btn style="overflow:hidden !important;" v-else-if="uty==1&&(uln=='update0'||uln=='update1'||uln=='update2')?true:false" variant="outlined" class="btn">
            <v-dialog activator="parent" id="dialog2">
       <v-card elevation="2" :width="screenWidth" >
        <v-locale-provider rtl>
            <v-list lines="3" width="100%" >
            <v-list-subheader class="mb-1">اطلاعات شما</v-list-subheader>            
            <v-divider></v-divider>
                            <v-list-item class="my-5" :class="{smallList:isInSmallMode}" >
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img :src="(up.upi && up.upi.length>40)?up.upi:'@/assets/images/unknownUser.png'"></v-img>
                                    </v-avatar>
                                    <span>
                                        {{(up.upn&&((up.upn).length>0))?up.upn:(up.upln&&((up.upln).length>0))?up.upln:'ناشناس'}}
                                    </span>
                                    <span class="mx-2">عزیز </span>
                                    <span> خوش آمدید</span>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item>
                                <v-list-item-title @click="this.$router.replace('/UserMessages')">
                                    پیام های شما
                                </v-list-item-title>
                                <template v-slot:append>
                                    <v-icon>mdi-arrow-left-bold-circle</v-icon>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item @click="this.$router.replace('/UserSentJobStatus')">
                                <v-list-item-title>
                                    شغل های ارسال شده از طرف
                                </v-list-item-title>
                                <template v-slot:append>
                                    <v-icon>mdi-arrow-left-bold-circle</v-icon>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item @click.prevent="exitProfile" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                  <v-icon>mdi-exit-to-app</v-icon>
                                  <span>خروج</span>
                                </template> 
                            </v-list-item>
        </v-list>
        </v-locale-provider>
       </v-card>
      </v-dialog>
            <v-icon v-if="!up.upi" size="large" color="black" class="main-nav-login-icon ml-2 logedIcon">mdi-account</v-icon>
            <v-avatar v-if="up.upi">
            <img :src="up.upi" />
            </v-avatar>
            <span class="text-grey-darken-2 font-weight-bold">خوش آمدید</span>
        </v-btn>
                <v-btn style="overflow:hidden !important;" v-else-if="uty==2&&(uln=='update0'||uln=='update1'||uln=='update2')?true:false" variant="outlined" class="btn">
                    <v-dialog activator="parent" id="dialog3" >
       <v-card elevation="2" :width="screenWidth" >
        <v-locale-provider rtl>
            <v-list lines="3" width="100%" >
            <v-list-subheader class="mb-1">اطلاعات شما</v-list-subheader>            
            <v-divider></v-divider>
                            <v-list-item class="my-5" :class="{smallList:isInSmallMode}" >
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img :src="(up.upi && up.upi.length>40)?up.upi:'@/assets/images/unknownUser.png'"></v-img>
                                    </v-avatar>
                                    <span>
                                        {{(up.upn&&((up.upn).length>0))?up.upn:(up.upln&&((up.upln).length>0))?up.upln:'ناشناس'}}
                                    </span>
                                    <span class="mx-2">عزیز </span>
                                    <span> خوش آمدید</span>
                                </template>
                                <v-list-item-title>
                                    <v-divider class="my-2"></v-divider>
                                    <v-expansion-panels>
                                        <v-expansion-panel>
                                            <v-expansion-panel-title>
                                                {{(up.upn&&((up.upn).length>0))?up.upn:(up.upln&&((up.upln).length>0))?up.upln:'ناشناس'}}
                                            </v-expansion-panel-title>
                                            <template #text>
                                                    <v-list lines="3" width="100%">
                                                        <v-divider></v-divider>
                                                        <v-list-item @click="this.$router.replace('/userinfo/personal')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-icon >mdi-account</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>اطلاعات شخصی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':uc?'green':'red'}">{{uc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item  @click="this.$router.replace('/userinfo/unicert')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                       <v-icon >mdi-school</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>اطلاعات تحصیلی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':unc?'green':'red'}">{{unc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="this.$router.replace('/userinfo/foreignlanguage')"  class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img src="../assets/images/foreignlanguage.png">
                                        </v-img>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>مدارک زبان خارجی</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':flc?'green':'red'}">{{flc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item @click="this.$router.replace('/userinfo/skills')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                       <v-icon >mdi-tools</v-icon>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>مهارت های شما</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':sc?'green':'red'}">{{sc?'تکمیل شده است':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>                           
                            <v-list-item @click="this.$router.replace('/userinfo/jobresume')" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                    <v-avatar>
                                        <v-img src="../assets/images/interests.png">
                                        </v-img>
                                    </v-avatar>
                                </template>
                                <template #append>
                                    <v-icon color="purple">mdi-arrow-left</v-icon>
                                </template>
                              <v-list-item-title>سوابق کاری</v-list-item-title>
                              <v-list-item-subtitle class="mt-2" :style="{'color':jrc?'green':'red'}">{{jrc?'تکمیل می باشد':'نیاز به تکمیل'}}</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>                           
                           <v-list-item @click="this.$router.replace('/userinfo/interests')" class="my-5" :class="{smallList:isInSmallMode}">
                               <template v-slot:prepend>
                                   <v-avatar>
                                       <v-img src="../assets/images/interests.png">
                                       </v-img>
                                   </v-avatar>
                               </template>
                               <template #append>
                                   <v-icon color="purple">mdi-arrow-left</v-icon>
                               </template>
                             <v-list-item-title>علایق و خواسته ها</v-list-item-title>
                             <v-list-item-subtitle class="mt-2" :style="{'color':ic?'green':'red'}">{{ic?'تکمیل می باشد':'نیاز به تکمیل'}}</v-list-item-subtitle>
                           </v-list-item>
                                                    </v-list>
                                            </template>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item>
                                <v-list-item-title @click="this.$router.replace('/UserMessages')">
                                    پیام های شما
                                </v-list-item-title>
                                <template v-slot:append>
                                    <v-icon color="purple">mdi-arrow-left-bold-circle</v-icon>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item @click="this.$router.replace('/َappliedRequstsByYou')">
                                        <v-list-item-title style="white-space:normal !important;">
                                   درخواست های کاری ارسالی توسط شما
                                </v-list-item-title>
                                        <template v-slot:append>
                                    <v-icon color="purple">mdi-arrow-left-bold-circle</v-icon>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item @click="this.$router.replace('/َappliedJobsByYou')">
                                <v-list-item-title>
                                   شغل های ثبت شده توسط شما
                                </v-list-item-title>
                                <template v-slot:append>
                                    <v-icon color="purple">mdi-arrow-left-bold-circle</v-icon>
                                </template>
                            </v-list-item>
                            <v-divider class="my-3"></v-divider>
                            <v-list-item @click.prevent="exitProfile" class="my-5" :class="{smallList:isInSmallMode}">
                                <template v-slot:prepend>
                                  <v-icon>mdi-exit-to-app</v-icon>
                                  <span>خروج</span>
                                </template>                   
                            </v-list-item>
        </v-list>
        </v-locale-provider>
       </v-card>
      </v-dialog>
      <v-icon v-if="!up.upi" size="large" color="black" class="main-nav-login-icon ml-2 logedIcon">mdi-account</v-icon>
            <v-avatar v-if="up.upi">
            <img :src="up.upi" />
            </v-avatar>
            <span class="text-grey-darken-2 font-weight-bold">خوش آمدید</span>
                </v-btn>
        <v-btn v-else variant="outlined" class="btn" @click="gotologin">
            <v-icon size="large" color="red" class="main-nav-login-icon ml-2 notLogedIcon">mdi-login</v-icon>
            <span class="text-grey-darken-2 font-weight-bold">ثبت نام/ ورود</span>
        </v-btn>
     
    </v-app-bar>
</v-locale-provider>
</template>
<script>
import { mapMutations, mapGetters,mapState } from 'vuex';
import {PostData_normal} from "@/services/remotedatamodify";
import {works} from "@/services/constantprovider.js"
export default {
    data() {
        return {
            searchKeyWords:"",
            listOfAllJobs:[],
            searchedJobList:[],
            searchmenu:false,
            searchResultEmployers:[]
        }
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
       console.log(tempArray);
    },
    computed:{
        ...mapGetters(['uln']),
        ...mapState(['uc','up','mr','mu','ic','sc','unc','flc','jrc','uty']),
        screenWidth(){
            const name= this.$vuetify.display.name;
            switch (name) {
                case 'xs':
                return 200;
                case 'sm':
                return 300;
                case 'md':
                return 600;
                case 'lg':
                return 700
                default:
                return 800
            }
        },
        isInSmallMode(){
                let name=this.$vuetify.display.name;
                if(name=='sm' || name=='xs'){
                    return true
                }
                else{
                    return false;
                }
            }
    },
    watch:{
        up(newval){
            console.log(newval.upi)
            if(newval.upi=="data:image/jpeg;base64,"){
                newval.upi=null;
            }
        },
        searchKeyWords(){
            console.log(this.searchKeyWords)
            console.log(this.searchedJobList)
        }
    },
    methods: {
        ...mapMutations['cmol','culn'],
        openNavList() {
            this.$store.commit('cmol')
        },
        openProgressOverlay(){
            this.fp=true;
            this.expl="";
            this.subExpl="در حال دریافت اطلاعات"
        },
        closeProgressOverlay(){
            this.fp=true;
            this.expl="";
            this.subExpl="در حال دریافت اطلاعات"
        },
        findEmployers(item){
            console.log(item)
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
                console.log( this.searchedJobList)
            }
            else{
                this.searchedJobList=[];
            }
            }
            catch(err){
                this.searchedJobList=[];
            }
        },
        gotologin(){
            this.$router.replace("/login/2")
        },
        exitProfile(){
            PostData_normal("exit",{},null,(err,res)=>{
                if(err){
                    console.log(err);
                }
                else{
                    this.expl="شما با موفقیت خارج شده اید"
                var result=res.data;
                const ustatus=result[0].res;
                const ust=(result[1])[0];
                if(ust){
                    this.$store.state.up=ust.up;
                    this.$store.state.up.upi=ust.up.upi?"data;image/jpeg;base64,"+ust.up.upi:"";
                        this.$store.state.uc= ust.uc;
                        this.$store.state.mr= ust.mr;
                        this.$store.state.mu= ust.mu;
                        this.$store.state.unc= ust.unc;
                        this.$store.state.sc= ust.sc;
                        this.$store.state.ic= ust.ic;
                        this.$store.state.flc= ust.flc;
                        this.$store.state.uln= ustatus;
                               console.log(this.up)              
                setTimeout(() => {
                    this.$store.state.fp=false
                    this.$router.replace("/")
                }, 600);
                }
                }
                
                
            })
        }
    }

}
</script>
<style Scoped>
#dialog1 .v-overlay__content 
{
    width:fit-content !important;
}
#dialog2 .v-overlay__content 
{
    width:fit-content !important;
}
#dialog3 .v-overlay__content 
{
    width:fit-content !important;
}
.smallList{
    display:block !important;
}
.main-nav {
    direction: rtl;
}

.notLogedIcon {
    transform: rotate(180deg);
}

.btn {
    border: 1px solid rgba(128, 128, 128, .5);
}
</style>
