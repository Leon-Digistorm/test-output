<template>
    <div class="p-8 space-y-8">
        <Header />
        <Tasks :tasks="hideCompleted ? pendingTasks : allTasks"></Tasks>
        <Tasks :tasks="todos" />

        <div>
            <p class="text-sm mb-1 font-medium">Brownie points:</p>
            <ul class="text-sm list-disc pl-4 text-gray-700">
                <li>Filters to hide/show completed tasks</li>
                <li>Allow users to add a due date to a task</li>
                <li>Allow reordering of tasks</li>
                <li>Allow subtasks to have subtasks</li>
                <li>Add additional cypress tests</li>
            </ul>
        </div>

    </div>
</template>

<script setup>
    import Header from '@/components/Header.vue'
    import Tasks from '@/components/Tasks.vue'
    import { computed } from 'vue'

    import { useStore } from 'vuex';

    const store = useStore();
    const allTasks = computed(() => store.getters.allTasks);
    const pendingTasks = computed(() => store.getters.pendingTasks);
    const hideCompleted = computed(() => store.getters.hideCompleted);

    /**
     * Digistorm frontend test main tasks
     * Add/remove/manipulate this array as needed to complete the test
     *
     * Reference of main tasks
     * - Allow the user to add a new task
     * - Allow users to delete a task
     * - Show the badge in a different color for completed tasks
     * - Allow users to edit the title of their task
     * - Allow users to add sub tasks
     * - Display completed tasks on a seperate page
    */
    const todos = [
        {
            id: 1,
            title: 'Allow the user to add a new task',
            completed: true,
        },
        {
            id: 2,
            title: 'Allow users to delete a task',
            completed: true,
        },
        {
            id: 3,
            title: 'Show the badge in a different color for completed tasks',
            completed: true,
        },
        {
            id: 4,
            title: 'Allow users to edit the title of their task',
            completed: true,
        },
        {
            id: 5,
            title: 'Allow users to add sub tasks',
            completed: true,
        },
        {
            id: 6,
            title: 'Display completed tasks on a seperate page',
            completed: true,
        },
    ]

</script>

<style lang="scss" scoped>

</style>