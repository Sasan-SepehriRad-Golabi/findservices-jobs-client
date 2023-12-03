<template>
    <div class="text-center">
        <v-overlay :model-value="mol" content-class="drawercontentclass" @click:outside="this.$store.commit('cmol')"
            class="align-center justify-center">
            <v-row>
                    <v-col cols="10" sm="8" offset-sm="2">
                        <v-card class="d-flex d-sm-none" style="min-width:250px">
                            <v-list  lines="two" nav class="w-100">
                    <div class="mainnavbarheaderparent">
                        <div @click="this.$store.commit('cmol')"
                            class="d-inline-block float-left  pa-3 mainnavbarheader"><v-icon color="error"
                                size="large">mdi-close-circle</v-icon></div>
                        <v-list-subheader class="d-inline-block text-grey-lighten3 ma-4 text-right float-right">سامانه
                            کاریابی
                            رامش</v-list-subheader>
                    </div>
                    <v-divider ></v-divider>
                    <v-list-item value="1" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </template>
                        <v-list-item-title @click.prevent="this.$router.replace('/')" class="text-right mr-4">صفحه اصلی</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item :disabled="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false" value="2" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-account-plus</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4" 
                        @click.prevent="this.$router.replace('/login/2')">ثبت نام / ورود</v-list-item-title>
                        <template #subtitle>
                            <p class="text-green" v-if="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false">شما وارد شده اید</p>
                        </template>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item @click="this.$router.replace('/contactus')" value="3" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-phone</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4">تماس با ما</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                </v-list>
            </v-card>
            <v-card class="d-none d-sm-flex d-lg-none" style="min-width:400px">
                <v-list  lines="two" nav class="w-100">
                    <div class="mainnavbarheaderparent">
                        <div @click="this.$store.commit('cmol')"
                            class="d-inline-block float-left  pa-3 mainnavbarheader"><v-icon color="error"
                                size="large">mdi-close-circle</v-icon></div>
                        <v-list-subheader class="d-inline-block text-grey-lighten3 ma-4 text-right float-right">سامانه
                            کاریابی
                            رامش</v-list-subheader>
                    </div>
                    <v-divider ></v-divider>
                    <v-list-item value="1" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </template>
                        <v-list-item-title @click.prevent="this.$router.replace('/')" class="text-right mr-4">صفحه اصلی</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item  :disabled="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false" value="2" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-account-plus</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4"
                        @click.prevent="this.$router.replace('/login/2')">ثبت نام / ورود</v-list-item-title>
                        <template #subtitle>
                            <p class="text-green" v-if="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false">شما وارد شده اید</p>
                        </template>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item @click="this.$router.replace('/contactus')" value="3" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-phone</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4">تماس با ما</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                </v-list>
            </v-card>
            <v-card class="d-none d-lg-flex" style="min-width:700px">
                        <v-list  lines="two" nav class="w-100">
                    <div class="mainnavbarheaderparent">
                        <div @click="this.$store.commit('cmol')"
                            class="d-inline-block float-left  pa-3 mainnavbarheader"><v-icon color="error"
                                size="large">mdi-close-circle</v-icon></div>
                        <v-list-subheader class="d-inline-block text-grey-lighten3 ma-4 text-right float-right">سامانه
                            کاریابی
                            رامش</v-list-subheader>
                    </div>
                    <v-divider ></v-divider>
                    <v-list-item value="1" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </template>
                        <v-list-item-title 
                        @click.once="this.$router.replace('/')" class="text-right mr-4">صفحه اصلی</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item :disabled="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false" value="2" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-account-plus</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4" 
                        @click.once="this.$router.replace('/login/2')">ثبت نام / ورود</v-list-item-title>
                        <template #subtitle>
                            <span class="text-green" v-if="this.$store.state.uln=='update0'||this.$store.state.uln=='update1'||this.$store.state.uln=='update2'?true:false">شما وارد شده اید</span>
                        </template>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                    <v-list-item @click.once="this.$router.replace('/contactus')" value="3" rounded="xl" color="primary">
                        <template v-slot:append>
                            <v-icon>mdi-phone</v-icon>
                        </template>
                        <v-list-item-title class="text-right mr-4">تماس با ما</v-list-item-title>
                    </v-list-item>
                    <v-divider style="border 2px solid"></v-divider>
                </v-list>
            </v-card>
        </v-col>
                </v-row>
        </v-overlay>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['mol'])
    },
    created(){
        console.log("@@@@@@")
        console.log(this.$store.state.uln);
    }
}
</script>
<style scoped>
.mainnavbarheaderparent {
    overflow: hidden;
}

.mainnavbarheader:hover {
    cursor: pointer;
    background-color: grey;
    border-radius: 20px;
    color: white;
}
.v-overlay__content.drawercontentclass{
    width:100% !important;
}
</style>