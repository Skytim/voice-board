import { OrderTypeEnum } from "../shared/enums";
export const state = () => ({
  orderType: OrderTypeEnum.Publish,
  videos: []
});

export const getters = {
  videoList(state) {
    let result = [];
    let tempVideo = [...state.videos].sort(function(a, b) {
      if (state.orderType === OrderTypeEnum.Publish) {
        return b.publish - a.publish;
      }
      if (state.orderType === OrderTypeEnum.Views) {
        return b.views - a.views;
      }
      if (state.orderType === OrderTypeEnum.CollectCount) {
        return b.collectCount - a.collectCount;
      }
    });
    for (let i = 0; i < tempVideo.length; i += 4) {
      result.push(tempVideo.slice(i, i + 4));
    }
    return result;
  },
  orderType(state) {
    return state.orderType;
  }
};
export const actions = {
  async getVideos(context) {
    this.$axios
      .get(
        "https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz"
      )
      .then(response => {
        if (response.data.status) {
          context.commit("setVideos", response.data.data);
        }
      });
  }
};
export const mutations = {
  setVideos(state, videos) {
    state.videos = videos;
  },
  changeOrder(state, orderType) {
    state.orderType = orderType;
  }
};
