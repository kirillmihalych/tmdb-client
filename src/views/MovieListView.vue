<template>
  <main>
    <div v-if="isPending">Loading...</div>
    <div v-else-if="isError">API Error</div>
    <div v-else-if="data" class="grid gap-2 underline">
      <RouterLink
        v-for="movie in data.results"
        :key="movie.id"
        :to="{ name: 'movie', params: { id: movie.id } }"
      >
        {{ movie.title }}
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useQuery } from "@tanstack/vue-query";
import { getPopularMovieList } from "@/api/movie/api_movies";

const { isPending, isError, data } = useQuery({
  queryKey: ["movie-list-popular"],
  queryFn: getPopularMovieList,
});
</script>
