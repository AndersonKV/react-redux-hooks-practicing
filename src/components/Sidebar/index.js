import React from "react";
import { useSelector, useDispatch } from "react-redux";

//metodo de destructuring para pegar function do actions
import { toggle } from "../../store/actions/playlist.actions";

export default function Sidebar() {
  const playlist = useSelector(state => state.playlist.playlist);
  const dispatch = useDispatch();
  return (
    <>
      {playlist.map(play => (
        <aside key={play.id}>
          <strong>{play.title}</strong>
          <ul>
            {play.list.map(setList => (
              <div key={setList.id} onClick={() => dispatch(toggle(setList))}>
                <img alt="nothing" title="video" src={setList.thumbnail} />

                <span>
                  <strong>{setList.title}</strong>
                </span>
              </div>
            ))}
          </ul>
        </aside>
      ))}
    </>
  );
}
