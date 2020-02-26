const INITIAL_STATE = {
  playlistClicked: {
    title: "Taeko Ohnuki - 都会",
    link: "https://www.youtube.com/embed/ck11pWTc2g8"
  },
  playlist: [
    {
      title: "Playlist",
      id: 1,
      list: [
        {
          id: 1,
          title: "Taeko Ohnuki - 都会",
          link: "https://www.youtube.com/embed/ck11pWTc2g8",
          thumbnail: "https://img.youtube.com/vi/ck11pWTc2g8/0.jpg"
        },
        {
          id: 2,
          title: "chelmico「Easy Breezy」",
          link: "https://www.youtube.com/embed/76sNmqMzUuI",
          thumbnail: "https://img.youtube.com/vi/76sNmqMzUuI/0.jpg"
        },
        {
          id: 3,
          title: "Dorohedoro Opening | Welcome to Chaos — (K)NoW_NAME",
          link: "https://www.youtube.com/embed/iH_YJde1yps",
          thumbnail: "https://img.youtube.com/vi/iH_YJde1yps/0.jpg"
        },
        {
          id: 4,
          title: "EU AMO VOCÊ | Cowboy Bebop (カウボーイビバップ)",
          link: "https://www.youtube.com/embed/nSZuim26Q9I",
          thumbnail: "https://img.youtube.com/vi/nSZuim26Q9I/0.jpg"
        },
        {
          id: 5,
          title: "BOM DIA, TRISTEZA | Tenshi no Tamago (天使のたまご)",
          link: "https://www.youtube.com/embed/wRS_K2lEJ6M",
          thumbnail: "https://img.youtube.com/vi/wRS_K2lEJ6M/0.jpg"
        },
        {
          id: 6,
          title: "Daniel Craig: 007",
          link: "https://www.youtube.com/embed/-7JmpnNhyX0",
          thumbnail: "https://img.youtube.com/vi/-7JmpnNhyX0/0.jpg"
        }
      ]
    }
  ]
};

//state anterior, action como segundo param
export default function myPlaylist(state = INITIAL_STATE, action) {
  //console.log(action);
  if (action.type === "TOGGLE") {
    return {
      ...state,
      playlistClicked: action.clicked
    };
  }
  return state;
}
