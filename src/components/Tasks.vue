<template>
    <div data-cy="tasks" class="bg-white sm:rounded-lg border border-gray-200">
        <div class="flex justify-between items-center px-4 py-6 sm:px-6 border-b border-gray-200">
            <h3 class="text-base/7 font-semibold text-gray-900">
                My tasks
            </h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
            <Task
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
        </ul>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import Task from '@/components/Task.vue'

    const props = defineProps({
        tasks: Array,
    })
</script>