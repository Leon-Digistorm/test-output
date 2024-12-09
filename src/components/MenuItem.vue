<template>
    <div
        data-cy="menuitem"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        role="menuitem"
        tabindex="-1"
        @click="emit('click')"
    >
        <slot />
    </div>
</template>

<script setup>
    const emit = defineEmits(['click'])

</script>

<style lang="scss" scoped>

</style>