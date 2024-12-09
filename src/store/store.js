
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
        TOGGLE_TASK(state, taskId) {
            const task = state.tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = !task.completed
            }
            else { // subtask, would ideally use recursion to go infinite levels deep or even better pass additional subtask parent id as flattened, i.e. grandparent.parent.mySubtask
                for (const task of state.tasks) {
                    if (task.subtasks.some((x)=>x.id == taskId)) {
                        task.subtasks[task.subtasks.findIndex((x)=>x.id == taskId)].completed = !task.subtasks[task.subtasks.findIndex((x)=>x.id == taskId)].completed
                    }
                }
            }
        },
        ADD_SUBTASK(state, payload) {
            const task = state.tasks.find(task => task.id === payload.parentTask);
            if (task) {
                task.subtasks.push(payload.subTask);
            }
            else { // subtask, would ideally use recursion to go infinite levels deep or even better pass additional subtask parent id as flattened, i.e. grandparent.parent.mySubtask
                console.log("Checking ", state.tasks, payload)
                for (const task of state.tasks) {
                    
                    if (task.subtasks.some((x)=>x.id == payload.parentTask)) {
                        task.subtasks[task.subtasks.findIndex((x)=>x.id == payload.parentTask)].subtasks.push(payload.subTask);
                    }
                }
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
