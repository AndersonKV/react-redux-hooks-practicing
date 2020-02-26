import React from "react";
import { useSelector } from "react-redux";

export default function Video() {
  //playlistClicked contem as info inicial
  const playlistActive = useSelector(state => state.playlist.playlistClicked);

  return (
    <div className="title-main">
      <iframe title="v" src={playlistActive.link}></iframe>
      <span>{playlistActive.title}</span>
    </div>
  );
}
