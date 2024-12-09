<template>
    <div data-cy="tasks" class="bg-white sm:rounded-lg border border-gray-200">
        <div class="flex justify-between items-center px-4 py-6 sm:px-6 border-b border-gray-200">
            <h3 class="text-base/7 font-semibold text-gray-900">
                My tasks
            </h3>
            <div class="flex gap-2">
                <button type="button" @click="toggleCompleted" class="opacity-30 bg-gray-600 text-white p-2 font-medium text-sm hover:bg-gray-700 transition rounded-md">Toggle Completed</button>
                <button type="button" @click="addTask" class="bg-blue-600 text-white p-2 font-medium text-sm hover:bg-blue-700 transition rounded-md">Add Task</button>
            </div>
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
    import { useStore } from 'vuex';

    const store = useStore();
    import Task from '@/components/Task.vue'

    const addTask = () => {
        const title = prompt('Enter new task title:');
        if (title) {
            const newTask = {
                id: Date.now(),
                title: title,
                completed: false,
                subtasks: []
            };
            store.dispatch('addTask', newTask);
        }
    };

    const toggleCompleted = () => {
        store.dispatch('toggleCompleted', null);
    }

    const props = defineProps({
        tasks: Array,
    })
</script>