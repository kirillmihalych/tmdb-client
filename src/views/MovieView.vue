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
import { getMovieDetailsById } from "@/api/movie/api_movies";
import { useRoute } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

const route = useRoute();

const { isPending, isError, data } = useQuery({
  queryKey: ["movie-details-by-id"],
  queryFn: () => getMovieDetailsById(route.params.id),
});
</script>
