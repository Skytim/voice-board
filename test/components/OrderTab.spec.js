import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import OrderTab from "@/components/OrderTab.vue";
import "@/plugins/filters";
const localVue = createLocalVue();
import { orderType } from "@/plugins/filters";
import { OrderTypeEnum } from "@/shared/enums";

localVue.use(Vuex);
describe("OrderTab", () => {
  let getters;
  let store;
  let mutations;
  let wrapper;
  beforeEach(() => {
    getters = {
      orderType: () => {
        return OrderTypeEnum.Publish;
      }
    };
    mutations = {
      changeOrder: jest.fn()
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
    wrapper = shallowMount(OrderTab, { store, localVue });
  });
  it("Renders 'store.getters.default OrderType'", () => {
    const activeButton = wrapper.find(".active");
    expect(activeButton.text()).toBe(orderType(getters.orderType()));
  });
  it("Renders 'store.mutation.click Will call change order'", () => {
    const viewButton = wrapper.find("li:nth-child(3)");
    viewButton.trigger("click");
    expect(mutations.changeOrder).toHaveBeenCalled();
  });
});
