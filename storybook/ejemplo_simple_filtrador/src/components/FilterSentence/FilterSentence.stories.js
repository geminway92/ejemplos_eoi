import MyFilterSentence from './FilterSentence.vue';
import results from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export default {
  title: 'Mi Biblioteca/FilterSentence',
  component: MyFilterSentence,
  decorators: [withTests({ results })],
  argTypes: {
    onFiltered: { action: 'Filtered' },
    title: {
      control: { 
        type: 'text'
      },
    },
    filter: {
      description: 'Es la palabra que será eliminada de la frase que escriba el usuario',
      control: {
        type: 'text'
      },
    },
    size: {
      control: {
        type: 'range',
        min: 16,
        max: 32,
        step: 1
      },
    },
    maxLength: {
      control: {
        type: 'range',
        min: 32,
        max: 256,
        step: 1
      },
    },
    placeHolder: {
      control: { 
        type: 'text'
      },
    },
  },
};

const Template = (args) => ({
  components: { MyFilterSentence },
  setup() {
    return { args };
  },
  description: 'Overwritten description2',
  template: '<MyFilterSentence v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Filtrador',
  filter: 'a',
  size: 32,
  maxLength: 64,
  placeHolder: 'Escribe cualquier cosa para que pase el filtro',
};
Default.parameters = {
  jest: ['FilterSentence.test.js']
};

const InnacessibleTemplate = (args) => ({
  components: { MyFilterSentence },
  setup() {
    return { args };
  },
  template: '<MyFilterSentence v-bind="args" style="background: black"/>',
});
export const Innacessible = InnacessibleTemplate.bind({});
Innacessible.args = {
  title: 'Filtrador',
  filter: 'a',
  size: 32,
  maxLength: 64,
  placeHolder: 'Escribe cualquier cosa para que pase el filtro',
};

Default.storyName = 'Funcionalidad base';