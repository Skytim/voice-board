import { OrderTypeEnum, LengthFilterEnum, StatusEnum } from "../shared/enums";
export const state = () => ({
  orderType: OrderTypeEnum.Publish,
  lengthFilter: LengthFilterEnum.None,
  videos: [],
  status: StatusEnum.Init
});

export const getters = {
  videoList(state) {
    let result = [];
    let tempVideo = [...state.videos]
      .sort(function(a, b) {
        if (state.orderType === OrderTypeEnum.Views) {
          return b.views - a.views;
        } else if (state.orderType === OrderTypeEnum.CollectCount) {
          return b.collectCount - a.collectCount;
        } else {
          return b.publish - a.publish;
        }
      })
      .filter(video => {
        let duration = video.duration;
        if (state.lengthFilter === LengthFilterEnum.UnderFour) {
          return duration < 300;
        } else if (state.lengthFilter === LengthFilterEnum.AboveTen) {
          return duration >= 600;
        } else if (state.lengthFilter === LengthFilterEnum.FromFiveToTen) {
          return duration < 600 && duration >= 300;
        } else {
          return video;
        }
      });
    for (let i = 0; i < tempVideo.length; i += 4) {
      result.push(tempVideo.slice(i, i + 4));
    }
    return result;
  },
  orderType(state) {
    return state.orderType;
  },
  lengthFilter(state) {
    return state.lengthFilter;
  },
  getStatus(state) {
    return state.status;
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
        } else {
          context.commit("netWorkIssue");
        }
      })
      .catch(error => {
        context.commit("netWorkIssue");
      });
  }
};
export const mutations = {
  setVideos(state, videos) {
    state.status = StatusEnum.Finished;
    state.videos = videos;
  },
  changeOrder(state, orderType) {
    state.orderType = orderType;
  },
  changeLengthFilter(state, lengthFilter) {
    state.lengthFilter = lengthFilter;
  },
  netWorkIssue(state) {
    state.status = StatusEnum.NetworkError;
  }
};
