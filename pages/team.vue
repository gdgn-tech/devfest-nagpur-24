<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Organizers</h1>
          <p>
            Meet the organizers who drive the vision of our community and
            ensure everything runs seamlessly.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="2"
          sm="3"
          cols="6"
          v-for="(item, index) in organizersData"
          :key="index"
        >
          <common-team-card :data="item" />
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" class="mt-5">
          <h1>Team</h1>
          <p>
            The team that supports innovation and transformation in every
            challenge.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" sm="3" cols="6" v-for="(item, index) in teamData" :key="index">
          <common-team-card :data="item" />
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" class="mt-5">
          <h1>GDG On Campus Leads</h1>
          <p>
            Our GDG leads guide and mentor the community with their expertise
            and insights.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" sm="3" cols="6" v-for="(item, index) in gdgleadsData" :key="index">
          <common-team-card :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { mainData, teamData, organizersData, gdgleadsData } = useJSONData();
definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "Team - " + mainData.eventInfo.name + " | " + mainData.communityName,
  description: mainData.eventInfo.description.short,
  keywords: mainData.seo.keywords,
  ogLocale:'en_US',
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "Team - " + mainData.eventInfo.name + " | " + mainData.communityName,
  ogDescription: mainData.eventInfo.description.short,
  ogImage: `${mainData.seo.hostUrl}/thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  ogUrl: mainData.seo.hostUrl,
  ogType: "website",
  twitterTitle:
    "Team - " + mainData.eventInfo.name + " | " + mainData.communityName,
  twitterDescription: mainData.eventInfo.description.short,
  twitterImage: `${mainData.seo.hostUrl}thumbnail.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
</style>
