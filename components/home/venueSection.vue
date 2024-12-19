<template>
  <v-container fluid>
    <v-row class="my-10">
      <!-- Title and Description -->
      <v-col md="12" sm="12" cols="12" class="text-center">
        <h1>Venue</h1>
        <p>Get ready to experience DevFest Nagpur 2024 at a venue that matches your vision, where innovation meets grandeur - Tuli International, Sadar.</p>
      </v-col>

      <!-- Venue Images -->
      <v-col md="12" sm="12" cols="12" class="text-center">
        <!-- Large Image -->
        <v-img
          height="350"
          rounded="xl"
          cover
          alt="venue-main-image"
          style="border: 1.5px solid black; margin-bottom: 1rem;"
          :src="`/img/venue/imgae1.png`"
        ></v-img>
      </v-col>
      
      <v-col md="6" sm="6">
        <!-- First Small Image -->
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="venue-small-image-1"
          :src="`/img/venue/image3.png`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
      
      <v-col md="6" sm="6">
        <!-- Second Small Image -->
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="venue-small-image-2"
          :src="`/img/venue/image2.png`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
      <!--integration of g-map-->
    </v-row>
    <v-row>
      <v-col md="12" sm="12" cols="12" class="text-center">
        <iframe
          width="100%"
          height="450"
          style="border: 1.5px solid black; border-radius: 15px;"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwQ7fAYt47xT5fY7H9i165erXR4Yjt4tc
            &q=Tuli+International+Nagpur">
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No additional logic needed if static content
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
