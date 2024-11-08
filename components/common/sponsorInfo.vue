<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row
      v-for="(item, index) in sponsorsData"
      :key="index"
      class="google-font mb-5 mt-0"
    >
      <!-- Category Name -->
      <v-col md="12" cols="12" class="mb-n1">
        <b>{{ item.category_name }}</b>
      </v-col>

      <!-- Sponsors List -->
      <v-col
        md="2"
        cols="6"
        sm="3"
        class="text-center"
        v-for="(sponsor, indexp) in item.sponsors"
        :key="indexp"
      >
        <div
          class="sponsor-card"
        >
          <ClientOnly>
            <v-tooltip location="bottom" :key="indexp">
              <template v-slot:activator="{ props }">
                <a
                  aria-label="sponsor name"
                  :href="sponsor.link"
                  target="_blank"
                  v-bind="props"
                >
                  <v-img
                    alt="sponsor-logo"
                    :src="'/img/sponsors/' + sponsor.logo"
                    class="sponsor-logo"
                    cover
                  ></v-img>
                </a>
              </template>
              <span>{{ sponsor.name }}</span>
            </v-tooltip>
          </ClientOnly>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { sponsorsData } = useJSONData();
</script>

<style scoped>
.sponsor-card {
  background-color: #f3f3f3;
  border-radius: 8px;
  border: 1.5px solid #dcdcdc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

}

.sponsor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.sponsor-logo {
  max-height: 80px;
   border-radius: 8px;
   height : 300px;
  object-fit: contain;
}
</style>
