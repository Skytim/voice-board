import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import "@/plugins/filters";
describe("Card", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Card, {
      propsData: {
        info: {
          id: 0,
          thumbnail:
            "https://cdn.voicetube.com/assets/thumbnails/wWV0NCPD050.jpg",
          title: "Quisquam voluptatem quaerat sed est.",
          views: 32409534,
          collectCount: 7689,
          duration: 368,
          publish: 1422836632,
          level: 3,
          captions: ["cht", "en"]
        }
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
