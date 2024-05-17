<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/card-match">Go to Card Match</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
