import { mount } from '@vue/test-utils'
import FilterSentence from './FilterSentence.vue'

describe('FilterSentence.vue', () => {
  test(`Comprobamos que se renderiza el componente.
   (prop) title = 'Filtrado' -> <title>Filtrador</title>`, () => {
    const title = 'Filtrador'
    const wrapper = mount(FilterSentence, {
      props: {
        title,
      }
    });
    expect(wrapper.find('h1').text()).toMatch(title);
  });

  test(`(method) filterSentence.
   (filter = 'a') => 'tahi' -> 'thi'`, () => {
    const wrapper = mount(FilterSentence, {
      props: {
        filter: 'a',
      }
    });
    const e = { 
      target: {
        value: 'tahi',
      }
    };
    wrapper.vm.filterSentence(e);
    expect(wrapper.vm.filtered).toBe('thi');
  });

  test(`Comprobamos que el método de filtrado emita el evento correctamente.
   Para un (filtro = 'a') => emit(filtered, 'thiche')`, () => {
    const wrapper = mount(FilterSentence, {
      props: {
        filter: 'a',
      }
    });
    const e = { 
      target: {
        value: 'tahiche',
      }
    };
    wrapper.vm.filterSentence(e);
    expect(wrapper.emitted().filtered[0]).toContain('thiche');
  });

  test(`Input. Para input.value = 'tahi' =>
   <label>thi</label>`, async () => {
    const wrapper = mount(FilterSentence, {
      props: {
        filter: 'a',
      }
    });
    await wrapper.find('#originalSentence').setValue("tahi");
    expect(wrapper.text()).toContain('thi');
    expect(wrapper.find('label').text()).toBe('thi');
  });

  test(`Input (secuencial). Para input.value = 'tahi' =>
   <label>thiche</label>`, async () => {
    const wrapper = mount(FilterSentence, {
      props: {
        filter: 'a',
      }
    });
    await wrapper.find('#originalSentence').setValue('t');
    expect(wrapper.find('label').text()).toBe('t');
    await wrapper.find('#originalSentence').setValue('ta');
    expect(wrapper.find('label').text()).toBe('t');
    await wrapper.find('#originalSentence').setValue('tah');
    expect(wrapper.find('label').text()).toBe('th');
    await wrapper.find('#originalSentence').setValue('tahi');
    expect(wrapper.find('label').text()).toBe('thi');    
  });
})
