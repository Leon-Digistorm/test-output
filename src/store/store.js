
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
    ]
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
        TOGGLE_TASK(state, taskId) {
            const task = state.tasks.find(task => task.id === taskId);
            if (task) task.completed = !task.completed;
        },
        ADD_SUBTASK(state, { taskId, subtask }) {
            const task = state.tasks.find(task => task.id === taskId);
            if (task) {
                task.subtasks.push(subtask);
            }
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
        }
    },
    getters: {
        allTasks: (state) => state.tasks,
        completedTasks: (state) => state.tasks.filter(task => task.completed),
        pendingTasks: (state) => state.tasks.filter(task => !task.completed)
    }
});
