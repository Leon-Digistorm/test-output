<template>
    <li class="flex items-center justify-between gap-x-6 py-5 px-6">
        <div class="min-w-0">
            <div class="flex items-start gap-x-3">
                <p class="text-sm/6 font-medium text-gray-900 flex gap-2 items-center">
                    {{ props.task.title }}  
                    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="['size-6', task.completed ? 'text-green-800' : 'text-gray-600 opacity-20 transition']">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                </p>
            </div>
        </div>

        <div class="flex flex-none items-center gap-x-4">
            <span data-cy="badge" class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {{ props.task.completed ? 'complete' : 'incomplete' }}
            </span>

            <div class="relative flex-none">
                <Menu>
                    <template #trigger>
                        <Button>
                           <span class="sr-only">Open options</span>
                            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                        </Button>
                    </template>

                    <MenuItem @click="editTask">
                        Edit
                    </MenuItem>
                    <MenuItem @click="markComplete">
                        Mark as complete
                    </MenuItem>
                    <MenuItem @click="deleteTask">
                        Delete
                    </MenuItem>

                </Menu>
            </div>
        </div>
    </li>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex';

    const store = useStore();

    import Button from '@/components/Button.vue'
    import Menu from '@/components/Menu.vue'
    import MenuItem from '@/components/MenuItem.vue'

    const props = defineProps({
        task: Object,
    })

    const task = ref(props.task)
    
    const isCompleted = computed(()=>{props.task.completed})
    const markComplete = () => {
        store.dispatch('toggleTask', props.task.id);
    }

    const editTask = () => {
        const newTitle = prompt('Edit task title:', props.task.title);
        if (newTitle) {
            store.dispatch('editTask', { taskId: props.task.id, title: newTitle });
        }
    };

    const deleteTask = () => {
        store.dispatch('deleteTask', props.task.id);
    };

</script>