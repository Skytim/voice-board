export const state = () => ({
  orderType:1,

  videos:[]
});

export const getters = {
  videoList (state)  {
    let result =[];
    for (let i = 0; i < state.videos.length; i += 4) {
      result.push(state.videos.slice(i, i + 4));
    }
    return result;
  }
};
export const actions = {
  async getVideos(context) {
    this.$axios
      .get(
        "https://us-central1-lithe-window-713.cloudfunctions.net/frontendQuiz"
      )
      .then((response) => {
        if (response.data.status) {
          context.commit("setVideos", response.data.data);
        }
      });

  },
};
export const mutations = {
  setVideos(state, videos) {
    state.videos = videos;
  },
};
