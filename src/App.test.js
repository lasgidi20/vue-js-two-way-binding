import { mount } from '@vue/test-utils'
import App from './../src/App.vue'
describe('App Component', () =>  {
  const wrapper = mount(App)
  test('renders the App', () => {
    expect(wrapper.text()).toContain('Mike')
    expect(wrapper.text()).toContain('change bool')
    expect(wrapper.text()).toMatchSnapshot()
  })

  test("has a button for changing boolean", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  test("has an input field", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });

  test("sets input field", async () => {
    await wrapper.get('[data-test="dynamic-field"]').setValue("XFACTOR");
    expect(wrapper.findAll('[data-test="dynamic-field"]')).toHaveLength(1);
    expect(wrapper.text()).toContain('XFACTOR')
    await wrapper.get('[data-test="dynamic-field"]').setValue("New Data");
    expect(wrapper.text()).toContain('New Data')
  });

  test("updates boolean variable with button click", async () => {
     await wrapper.find("button").trigger('click')
     expect(wrapper.text()).toContain("bool: false")
     await wrapper.find("button").trigger('click')
     expect(wrapper.text()).toContain("bool: true")
  });
})