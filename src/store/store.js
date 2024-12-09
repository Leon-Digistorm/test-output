
import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
        {
            id: 1,
            title: 'Task 1',
            completed: false,
            subtasks: []
        },
        {
            id: 2,
            title: 'Task 2',
            completed: false,
            subtasks: []
        }
    ],
    hideCompleted: false
  },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
        },
        DELETE_TASK(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },
        EDIT_TASK(state, { taskId, title }) {
            const task = state.tasks.find(task => task.id === taskId);
            if (task) task.title = title;
        },
        TOGGLE_TASK(state, taskId) { // GPT used commit 
            // Recursive function to toggle completion of the task
            const toggleTaskRecursively = (tasks, taskId) => {
                for (const task of tasks) {
                    // Check if the current task is the one to toggle
                    if (task.id === taskId) {
                        task.completed = !task.completed;
                        return true; // Stop recursion if task is found and toggled
                    }
        
                    // If the current task has subtasks, recurse into them
                    if (task.subtasks.length > 0) {
                        const found = toggleTaskRecursively(task.subtasks, taskId);
                        if (found) return true; // Stop recursion if task is found and toggled
                    }
                }
                return false; // Return false if task not found
            };
        
            // Start the recursive search and toggle task completion
            const taskToggled = toggleTaskRecursively(state.tasks, taskId);
        
            if (!taskToggled) {
                console.log("Task not found for toggling", taskId);
            }
        },
        ADD_SUBTASK(state, payload) { // GPT used commit 
            // Recursive function to find the parent task and add the subtask
            const addSubtaskRecursively = (tasks, parentTaskId, subTask) => {
                for (const task of tasks) {
                    // Check if the current task is the parent task
                    if (task.id === parentTaskId) {
                        task.subtasks.push(subTask);
                        return true; // Subtask added, exit recursion
                    }
        
                    // If the current task has subtasks, recurse into them
                    if (task.subtasks.length > 0) {
                        const found = addSubtaskRecursively(task.subtasks, parentTaskId, subTask);
                        if (found) return true; // Stop recursion if found
                    }
                }
                return false; // Return false if the subtask was not added
            };
        
            // Start the recursive search for the parent task
            const taskAdded = addSubtaskRecursively(state.tasks, payload.parentTask, payload.subTask);
        
            if (!taskAdded) {
                console.log("Parent task not found for subtask", payload);
            }
        },
        TOGGLE_SHOW_COMPLETED(state) {
            state.hideCompleted = !state.hideCompleted
        }
    },
    actions: {
        addTask({ commit }, task) {
            commit('ADD_TASK', task);
        },
        deleteTask({ commit }, taskId) {
            commit('DELETE_TASK', taskId);
        },
        editTask({ commit }, task) {
            commit('EDIT_TASK', task);
        },
        toggleTask({ commit }, taskId) {
            commit('TOGGLE_TASK', taskId);
        },
        addSubtask({ commit }, payload) {
            commit('ADD_SUBTASK', payload);
        },
        toggleCompleted({commit}, payload) {
            commit('TOGGLE_SHOW_COMPLETED',payload)
        }
    },
    getters: {
        allTasks: (state) => state.tasks,
        completedTasks: (state) => state.tasks.filter(task => task.completed),
        pendingTasks: (state) => state.tasks.filter(task => !task.completed),
        hideCompleted: (state) => state.hideCompleted
    }
});
