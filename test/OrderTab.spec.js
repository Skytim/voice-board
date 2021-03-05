import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import OrderTab from "@/components/OrderTab.vue";

const localVue = createLocalVue();

localVue.use(Vuex);
describe("OrderTab", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      orderType: () => 1
    };

    store = new Vuex.Store({
      modules: {
        videos: {
          getters: getters
        }
      }
    });
  });
  it("Renders Order", () => {
    const wrapper = shallowMount(OrderTab, { store, localVue });
  });
});
