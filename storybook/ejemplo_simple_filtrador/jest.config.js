module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
