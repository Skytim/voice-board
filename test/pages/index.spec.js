import { shallowMount, createLocalVue } from "@vue/test-utils";
import Index from "@/pages/index.vue";
import FilterTab from "@/components/FilterTab.vue";
import OrderTab from "@/components/OrderTab.vue";
import "@/plugins/filters";
import Vuex from "vuex";
import { StatusEnum } from "@/shared/enums";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Index", () => {
  let store;
  let actions;
  let getters;
  beforeEach(() => {
    actions = {
      getVideos: () => {
        return [];
      }
    };
    getters = {
      videoList: () => {
        return [];
      },
      getStatus: () => {
        return StatusEnum.NetworkError;
      }
    };
    store = new Vuex.Store({
      modules: {
        video: {
          namespaced: true,
          actions: actions,
          getters: getters
        }
      }
    });
  });
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Index, {
      store,
      localVue,
      components: {
        FilterTab,
        OrderTab
      }
    });
  });
});
