<template>
  <header class="header-content content">
    <div class="nav box">
      <div class="content">
        <span class="logo">TODO</span>
        <span class="theme-btn">
          <img
            src=".././assets/icon-sun.svg"
            alt="Turn on Light Mode"
            v-if="theme?.active != 'light-mode'"
            @click="$emit('change-theme', 'light-mode')"
          />
          <img
            src=".././assets/icon-moon.svg"
            alt="Turn on Dark Mode"
            v-if="theme?.active != 'dark-mode'"
            @click="$emit('change-theme', 'dark-mode')"
          />
        </span>
      </div>

      <div class="input-group">
        <div class="input-group-icon">
          <span :class="{ completed: task.completed, incomplete: !task.completed }">
            <img src="../assets/icon-check.svg" alt="Check icon" class="checkIcon" v-if="task.completed">
            <input type="checkbox" class="taskCompleted" v-model="task.completed">
          </span>
        </div>
        <input
          class="input-task"
          maxlength="30"
          v-model="task.description"
          placeholder="Create a new todo..."
        />
        <div class="input-group-icon">
          <img
            src="../assets/plus.png"
            alt="Add Icon"
            class="add"
            v-if="task.description.length > 3"
            @click="
              $emit('add-task', task); 
              sendTasks();
            "
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-task',
  emits: ['add-task', 'change-theme'],
  data() {
    return {
      task: {
        description: '',
        completed: false,
      },
    };
  },
  props: {
    theme: {},
  },
  methods: {
    sendTasks() {
      this.task.description = '';
      this.task.completed = false;
    },
  },
}
</script>

<style scoped>
  header {
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @keyframes fade {
    0% {opacity: 0;}
    100%{opacity: 1;}
  }
  .dark-mode header {
    background-image: url('.././assets/bg-desktop-dark.jpg');
  }
  .light-mode header {
    background-image: url('../assets/bg-desktop-light.jpg');
  }
  .logo {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 15px;
    color: #fff;
  }
  @keyframes modeAnimation {
    0% {opacity: 0; transform: translate(5px, 0px);}
    100% {opacity: 1; transform: translate(0px, 0px);}
  }
  .theme-btn img {
    cursor: pointer;
    animation: modeAnimation 0.3s linear;
    transition: 0.3s;
  }
  .theme-btn img:hover {
    transform: scale(1.1);
  }
  .nav .input-group {
    margin-top: 25px;
  }
  .dark-mode .input-task {
    color: #B8BAD3;
  }
  .light-mode .input-task {
    color: #5B5C6F;
  }
  .light-mode .add {
    filter: invert(1);
  }
  .input-group .input-task {
    width: 100%;
    font-size: 1.2rem;
    background: transparent;
    border: 0;
    outline: 0;
  }
  .input-group .input-task::placeholder {
    color: #6D6F84;
  }
  .input-group input:focus {
    outline: 0;
  }
  @keyframes btn {
    0%{opacity: 0; transform: rotate(95deg);}
    100%{opacity: 0.6; transform: rotate(0deg);}
  }
  .add {
    animation: btn 0.5s;
    transition: 0.2s;
    opacity: 0.6;
    cursor: pointer;
  }
  .add:hover {
    opacity: 1;
    transform: scale(1.05) rotate(95deg);
  }
  @media (max-width: 768px) {
    .logo {
      font-size: 2rem;
    }
  }
</style>