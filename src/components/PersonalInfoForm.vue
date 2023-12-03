<template>
   <v-locale-provider rtl>
    <v-card>
        <v-card-title>
          <span class="text-h5">اطلاعات شخصی شما</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field
                  label="نام شما"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field
                  label="نام خانوادگی"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="4"
              >
                <v-text-field
                  label="ایمیل"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="استان محل سکونت"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
   </v-locale-provider>
</template>
<script>
</script>