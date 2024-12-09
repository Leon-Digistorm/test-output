<template>
    <div data-cy="menu" class="relative inline-block text-left">
        <div @click="active = true">
            <slot name="trigger" />
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <div v-if="active" ref="menu" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'

    const menu = ref(null)
    const active = ref(false)


    onClickOutside(menu, () => active.value = false)

</script>

<style lang="scss" scoped>

</style>