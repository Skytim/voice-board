import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import OrderTab from "@/components/OrderTab.vue";
import "@/plugins/filters";
const localVue = createLocalVue();
import { orderType } from "@/plugins/filters";
import { OrderTypeEnum } from "../shared/enums";

localVue.use(Vuex);
describe("OrderTab", () => {
  let getters;
  let store;
  let mutations;
  beforeEach(() => {
    getters = {
      orderType: () => {
        return OrderTypeEnum.Publish;
      }
    };
    mutations = {
      changeOrder: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        video: {
          namespaced: true,
          getters: getters,
          mutations: mutations
        }
      }
    });
  });
  it("Renders 'store.getters.default OrderType'", () => {
    const wrapper = shallowMount(OrderTab, { store, localVue });
    const activeButton = wrapper.find(".active");
    expect(activeButton.text()).toBe(orderType(getters.orderType()));
  });
  it("Renders 'store.mutation.click Will call change order'", () => {
    const wrapper = shallowMount(OrderTab, { store, localVue });
    const viewButton = wrapper.find("li:nth-child(3)");
    viewButton.trigger("click");
    expect(mutations.changeOrder).toHaveBeenCalled();
  });
});
