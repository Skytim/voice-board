import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import FilterTab from "@/components/FilterTab.vue";
import "@/plugins/filters";
import { length } from "@/plugins/filters";
import { LengthFilterEnum } from "@/shared/enums";

const localVue = createLocalVue();
localVue.use(Vuex);
describe("FilterTab", () => {
  let getters;
  let store;
  let mutations;
  let wrapper;
  beforeEach(() => {
    getters = {
      lengthFilter: () => {
        return LengthFilterEnum.UnderFour;
      }
    };
    mutations = {
      changeLengthFilter: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        video: {
          namespaced: true,
          getters: getters,
          mutations: mutations
        }
      }
    });
    wrapper = shallowMount(FilterTab, { store, localVue });
  });

  it("Renders 'store.getters.default FilterTab'", () => {
    const activeButton = wrapper.find(".active");
    expect(activeButton.text()).toBe(length(getters.lengthFilter()));
  });
  it("Renders 'store.mutation.click Will call change Length Filter'", () => {
    const viewButton = wrapper.find("li:nth-child(3)");
    viewButton.trigger("click");
    expect(mutations.changeLengthFilter).toHaveBeenCalled();
  });
});
