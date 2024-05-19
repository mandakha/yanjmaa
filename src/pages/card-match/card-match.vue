<script setup lang="ts">
import { ref } from 'vue';

const cards = [
    '💁‍♀️', '😘', '💁‍♀️',
    '😘', '🙏', '😘',
    '🙏', '💁‍♀️', '🙏',
    '💁‍♀️', '🙏', '😘',
];

const openCards = ref<number[]>([]);
const activeCards = ref<number[]>([]);

function hasMatch(arr: any[]) {
    if (arr.length === 0) return true;

    for (let i = 1; i < arr.length; i++) {
        if (cards[arr[i]] !== cards[arr[0]]) {
            return false;
        }
    }

    return true;
}

function handleClick(index: number) {
    if (activeCards.value.length >= 2) return;

    activeCards.value = [...activeCards.value, index];

    if (activeCards.value.length === 2) {
        if (hasMatch(activeCards.value)) {
            openCards.value = [...openCards.value, ...activeCards.value];
        }
        setTimeout(() => { activeCards.value = []; }, 1000);
    }
}

function isActive(index: number) {
    return activeCards.value.includes(index)
        || openCards.value.includes(index);
}
</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="w-[500px] grid grid-cols-3 gap-3">
            <div v-for="(card, index) in cards" :key="index" class="group aspect-square [perspective:1000px]"
                @click="handleClick(index)">
                <div class="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
                    :class="{ '[transform:rotateY(180deg)]': isActive(index) }">
                    <div class="absolute inset-0 bg-[#d0b4ed] rounded-lg"></div>
                    <div
                        class="absolute inset-0 bg-[#b678f5] rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="w-full h-full flex items-center justify-center text-4xl">
                            {{ card }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
