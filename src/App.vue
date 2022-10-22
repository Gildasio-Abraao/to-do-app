<template>
  <div :class="theme.active">
    <header-task
      :theme="theme"
      @add-task="addTask"
      @change-theme="changeMode"
    />
    <task-item
      :list="filteredList"
      :filter="{ isActive, allTask }"
      @is-active="filterActived"
      @show-all="setAllTask"
      @delete-task="deleteTask"
      @clear-completed="clearCompletedTask"
    />
  </div>
</template>

<script>
import Task from './components/Task.vue';
import HeaderTask from './components/HeaderTask.vue';

export default {
  name: 'App',
  data() {
    return {
      theme: {
        active: 'light-mode',
      },
      tasks: [],
      isActive: false,
      allTask: true,
    };
  },
  components: {
    [Task.name]: Task,
    [HeaderTask.name]: HeaderTask,
  },
  computed: {
    filteredList() {
      const taskList = this.tasks.slice().reverse();
      if (this.allTask) return taskList;
      return !this.allTask && this.isActive
        ? taskList.filter(task => !task.completed)
        : taskList.filter(task => task.completed);
    },
  },
  methods: {
    addTask(currentTask) {
      this.tasks.push({
        description: currentTask.description,
        completed: currentTask.completed,
      });
    },
    deleteTask(item) {
      this.tasks = this.tasks.filter(task => item != task);
    },
    setAllTask() {
      this.allTask = true;
    },
    filterActived(activeTask) {
      this.allTask = false;
      this.isActive = activeTask;
    },
    clearCompletedTask() {
      this.tasks = this.tasks.filter(task => !task.completed);
    },
    changeMode(theme) {
      this.theme.active = theme;
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Reem+Kufi:wght@400;500;600;700&display=swap');
@import './assets/styles/default.css';

</style>
