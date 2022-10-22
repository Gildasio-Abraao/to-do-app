<template>
  <section>
    <div class="list-task box">
      <!--task playlist-->
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="{ 'input-group': list, 'radius': index === 0 }"
        draggable="true"
      >
        <div class="input-group-icon">
          <span :class="{ 'completed': item.completed, 'incomplete': !item.completed }">
            <img src="../assets/icon-check.svg" alt="Check icon" class="checkIcon" v-if="item.completed">
            <input type="checkbox" class="taskCompleted" v-model="item.completed">
          </span>
        </div>
        <span :class="{ 'label': item }">
          <div :class="{ 'overline': item.completed }">
            <p>{{ item.description }}</p>
          </div>
        </span>
        <div class="input-group-icon">
          <img
            src="../assets/icon-cross.svg"
            alt="Delete Icon"
            class="delete"
            @click="$emit('delete-task', item);"
          >
        </div>
      </div>

      <!--footer-->
      <footer>
        <div class="content">
          <span class="items-left">
            {{ list.length }} items left
          </span>
          <div class="btn-container middle">
            <a href="#" @click="$emit('show-all', true)" :class="{ 'actived': filter.allTask }">
              All
            </a>
            <a
              href="#"
              @click="$emit('is-active', true)"
              :class="{ 'actived': !filter.allTask && filter.isActive }"
            >
              Active
            </a>
            <a
              href="#"
              @click="$emit('is-active', false)"
              :class="{ 'actived': !filter.allTask && !filter.isActive }"
            >
              Completed
            </a>
          </div>
          <div class="btn-container clear-completed">
            <a href="#" @click="$emit('clear-completed')">Clear Completed</a>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'task-item',
  emits: ['delete-task', 'is-active', 'show-all', 'clear-completed'],
  props: {
    list: [],
    filter: {},
  },
}
</script>

<style scoped>
  section {
    width: 100%;
    padding-bottom: 40px;
    margin-top: -40px;
  }
  .list-task {
    border-radius: 5px;
    box-shadow: 0px 30px 30px #00000036;
  }
  .input-group {
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid #7373731c;
  }
  .radius {
    border-radius: 5px 5px 0px 0px;
  }
  .label {
    width: 100%;
    transition: 0.3s;
    cursor: grabbing;
  }
  .label div {
    width: fit-content;
  }
  .overline {
    color: #6D6F84;
    position: relative;
  }
  .light-mode .overline {
    color: #DDDEE2;
  }
  @keyframes setOverLine {
    0%{width: 0%;}
    100%{width: 100%;}
  }
  .overline::before {
    content: '';
    animation: setOverLine 0.3s linear;
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    top: 55%;
    opacity: 0.8;
    z-index: 2;
  }
  .dark-mode .overline::before {
    background-color: #6D6F84;
  }
  .light-mode .overline::before {
    background-color: #d4d4d4;
  }
  .completedLabel {
    text-decoration: overline;
  }
  .dark-mode footer {
    background-color: #25273C;
    color: #6D6F84;
  }
  .light-mode footer {
    background-color: #fff;
  }
  footer {
    border-radius: 0px 0px 5px 5px;
  }
  footer .content {
    width: 100%;
    height: 60px;
    padding: 0 20px;
  }
  .btn-container a {
    font-size: 1rem;
    text-decoration: none;
    background-color: transparent;
    color: #6D6F84;
    transition: 0.3s;
  }
  .dark-mode .btn-container a:hover {
    color: #fff;
  }
  .light-mode .btn-container a:hover {
    color: #181824;
  }
  .light-mode .items-left {
    color: #bfbfbf;
  }
  a.actived {
    color: #4979E2;
    pointer-events: none;
  }
  .middle a {
    margin-right: 15px;
  }
  .delete {
    opacity: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  .input-group:hover .delete {
    opacity: 1;
  }
  @media (max-width: 768px) {
    .items-left, .clear-completed {
      display: none;
    }
    footer .content {
      justify-content: center;
    }
  }
  @media (max-width: 390px) {
    .label {
      width: 65%;
      overflow: hidden;
    }
  }
</style>