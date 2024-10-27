<template>
  <v-container fluid class="">
    <v-row justify-center align="center">
      <v-col md="6" sm="6" cols="12">
        <h1 class="responsive-h1 my-4">
          DevFest <br />
          {{ mainData.communityLocation.city }} 2024
        </h1>
        <p class="" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description.short }}
        </p>
        <p class="mt-4" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description2.short }}
        </p>
        <p class="mt-4" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description3.short }}
        </p>

        <p class="my-5">
          <span class="mr-4">
            <v-icon class="mr-1">mdi-calendar-month</v-icon>
            {{ mainData.eventInfo.date }}
          </span>

          <span class="mr-4">
            <v-icon class="mr-1">mdi-map-legend</v-icon>
            <a :href="mainData.eventInfo.venue.map_link" target="_blank" style="color:black">
              {{ mainData.eventInfo.venue.address }}
            </a>
          </span>
        </p>

        <v-btn
          rounded
          size="large"
          color="#FFD427"
          v-if="
            mainData.eventInfo &&
            mainData.eventInfo.registeration.link.length &&
            new Date(mainData.eventInfo.registeration.end_date) > new Date()
          "
          :href="mainData.eventInfo.registeration.link"
          class="my-4 mt-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black"
          variant="flat"
        >
          Register Now
        </v-btn>

        <!-- New CTA Button -->
        <v-btn
          rounded
          size="large"
          class="early-bird-btn"
          href="https://konfhub.com/devfest-nagpur-2024"
          target="_blank"
        >
          Get Early Bird Pass
        </v-btn>
      </v-col>
      <v-col md="6" sm="6" cols="12">
        <v-img
          alt="logo"
          src="assets/img/hero-image.png"
          lazy-src="assets/img/hero-image.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { mainData } = useJSONData();
</script>

<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}

/* New Button Styles */
.early-bird-btn {
  display: flex;
  width: 193px;
  height: 54px;
  padding: 19px 31px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 80%;
  border-radius: 16px;
  border: 2px solid #000;
  background: #4285F4;
  color: white;
  font-weight: bold;
}
</style>
