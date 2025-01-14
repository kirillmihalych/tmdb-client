<template>
  <div>
    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">API Error</div>
    <div v-else-if="data">
      <h1>
        {{ data.title }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { watchEffect } from "vue";
import { getMovieDetailsById } from "@/api/movie/api_movies";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { useTitle } from "@vueuse/core";

const route = useRoute();
const title = useTitle(null);

const { isPending, isError, data } = useQuery({
  queryKey: ["movie-details-by-id"],
  queryFn: () => getMovieDetailsById(route.params.id),
});

watchEffect(() => {
  if (data.value) {
    title.value = data.value.title;
  }
});
</script>
