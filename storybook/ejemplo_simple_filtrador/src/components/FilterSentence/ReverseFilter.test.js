import { mount } from '@vue/test-utils'
import ReverseFilter from '../ReverseFilter.vue'



describe('ReverseFilter.vue', () => {
  test('Comprobamos si se devuelve al reves', () => {
    const wrapper = mount(ReverseFilter, {
      props: {
        filterResult: 'hola'
      }
    });
    const e = {
      target: {
        value: 'tahi',
      }
    };
    // expect(wrapper.find('#revert-comp').text()).toMatch()
    expect(wrapper.vm.revertComp).toBe('aloh')


  });

})


