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

  beforeEach(() => {
    getters = {
      orderType: () => {
        return OrderTypeEnum.Publish;
      }
    };

    store = new Vuex.Store({
      modules: {
        video: {
          namespaced: true,
          getters: getters
        }
      }
    });
  });
  it("Renders 'store.getters.default OrderType'", () => {
    const wrapper = shallowMount(OrderTab, { store, localVue });
    const activeButton = wrapper.find(".active");
    expect(activeButton.text()).toBe(orderType(getters.orderType()));
  });
});
