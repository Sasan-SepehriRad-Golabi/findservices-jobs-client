<template>
    <v-card class="bg-grey-lighten-3 pt-5 text-right text-black font-weight-bold text-body-2" variant="flat">
        <template v-slot:title>
            <div class="text-h5">
                <span class="mr-3" style="font-weight:bold !important;font-size:20px; text-shadow: 1px 1px #FF0000;">رامش</span>
                <v-avatar style="width:100px !important;height:100px !important">
                    <v-img src="../assets/images/rameshicon.png"></v-img>
                </v-avatar>
                <v-card-subtitle class="text-red" style="font-weight:bold !important;font-size:20px">سامانه خدماتی کاریابی</v-card-subtitle>
            </div>
        </template>
        <v-locale-provider rtl>
          <v-card elevation="2" class="mx-2 rounded-shaped">
            <v-card-text class="text-justify " style="line-height: 50px;font-size:15px">
                یک شرکت تخصصی در زمینه کاریابی برای هر کسی با هر استعدادی می باشد. این شرکت با برنامه ریزی تخصصی و در
                نظر گرفتن نقاط ضعف و قوت شرکت های مختلف کاریابی و با مشورت با افراد مختلف در جستجوی کار سعی کرده از یک
                طرف
                کاراترین پلتفرم برای یافتن کار را در اختیار متقاضیان کار قرار دهد و از طرف دیگر با الگوریتم های مختلف
                اطمینان سنجی و ارتقاء کیفیت، خیال کارفرماها را از نتیجه نهایی و نیز هزینه پرداختی راحت نماید. این پلت
                فرم با
                تکیه بر توانایی های نیروهای بومی به انجام رسیده و بنابراین در مرحله اول سعی برآن داریم تا فعالیتمان را
                در
                خدمت هم شهری های عزیزمان بگذاریم.
            </v-card-text>
          </v-card>
        </v-locale-provider>
        <v-card-actions>
            <v-btn @click="this.$router.replace('/contactus')" class="bg-red text-white ml-5" rounded size="large" variant="elevated" >
                <template v-slot:append>
                    <span>تماس با ما</span>
                    <v-icon>mdi-phone-message-outline</v-icon>
                </template>
            </v-btn>
        </v-card-actions>
    </v-card>
    <v-divider></v-divider>
</template>
<script>
export default {

}
</script>