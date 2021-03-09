import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import "@/plugins/filters";
import {
  secondsTohhmmss,
  abbreviateNumber,
  levelFilter,
  lang
} from "@/plugins/filters";
describe("Card", () => {
  const infoData = {
    id: 0,
    thumbnail: "https://cdn.voicetube.com/assets/thumbnails/wWV0NCPD050.jpg",
    title: "Quisquam voluptatem quaerat sed est.",
    views: 32409534,
    collectCount: 7689,
    duration: 360,
    publish: 1422836632,
    level: 3,
    captions: ["cht", "en"]
  };
  const wrapper = mount(Card, {
    propsData: {
      info: infoData
    }
  });
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
  it("Video Cover background image", () => {
    const imageCover = wrapper.find(".video-cover");
    expect(imageCover.element.style.backgroundImage).toBe(
      "url(" + infoData.thumbnail + ")"
    );
  });

  it("Video duration is as Same as filter Duration", () => {
    const duration = wrapper.find(".duration");
    expect(duration.text()).toBe(secondsTohhmmss(infoData.duration));
  });

  it("Video Title", () => {
    const videoTitle = wrapper.find(".video-title");
    expect(videoTitle.text()).toBe(infoData.title);
  });

  it("Video view is as Same as filter abbreviateNumber", () => {
    const videoView = wrapper.find(".views");
    expect(videoView.text()).toBe(abbreviateNumber(infoData.views));
  });

  it("Video lang display count", () => {
    const lang = wrapper.findAll(".lang");
    expect(lang.length).toBe(infoData.captions.length);
  });

  it("Video lang is as Same as filter lang", () => {
    const langCom = wrapper.findAll(".lang").at(0);
    expect(langCom.text()).toBe(lang(infoData.captions[0]));
  });

  it("Video level is as Same as filter level", () => {
    const level = wrapper.find(".level");
    expect(level.text()).toBe(levelFilter(infoData.level));
  });
});
