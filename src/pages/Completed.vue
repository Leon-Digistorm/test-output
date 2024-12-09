
<template>
    <div data-cy="tasks" class="bg-white sm:rounded-lg border border-gray-200">
        <div class="flex justify-between items-center px-4 py-6 sm:px-6 border-b border-gray-200">
            <h3 class="text-base/7 font-semibold text-gray-900">
                Completed Tasks
            </h3>
        </div>

        <ul role="list" class="divide-y divide-gray-200">
            <Task
                v-for="task in completedTasks"
                :key="task.id"
                :task="task"
            />
        </ul>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import Task from '@/components/Task.vue'

    // Access the Vuex store
    const store = useStore();

    // Get completed tasks from the store
    const completedTasks = computed(() => store.getters.completedTasks);
</script>