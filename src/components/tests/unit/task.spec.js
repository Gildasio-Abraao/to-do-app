import { mount } from '@vue/test-utils';
import Task from '@/components/Task.vue';
import HeaderTask from '@/components/HeaderTask.vue';

describe('Task.vue', () => {
  it('checking if the incoming task was rendered', () => {
    const wrapper = mount(Task, {
      props: {
        list: [
          {
            description: 'First Task',
            completed: true,
          }
        ],
        filter: {
          isActive: false,
          allTask: true,
        },
      },
    });
    expect(wrapper.find('.overline p').text()).toBe('First Task');
  });
});

describe('HeaderTask.vue', () => {
  it('testing if tasks are being sent correctly', () => {
    const wrapper = mount(HeaderTask);
    const testTask = {
      description: 'Hello, World',
      completed: true,
    };
    wrapper.vm.$emit('add-task', testTask);
    console.log(wrapper.emitted('add-task'));
    expect(wrapper.emitted('add-task'));
  });
});