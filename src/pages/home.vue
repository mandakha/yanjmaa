import { RouterLink } from 'vue-router';
<template>
    <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-4 justify-center py-8">
            <RouterLink to="/card-match" class="text-center rounded-lg bg-white/10 py-4">
                Card Match
            </RouterLink>
            <RouterLink to="/" class="text-center rounded-lg bg-white/10 py-4">
                Coming Soon
            </RouterLink>
        </div>
    </div>
</template>
