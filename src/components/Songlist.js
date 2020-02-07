import React, { useState } from "react"
import { useTransition } from "react-spring"
import { SongListContainer } from "./styles/SongListStyles"
import Player from "react-soundcloud-player"

import Song from "../components/Song"

const data = [
  {
    backgroundImage: "./bold.png",
    key: "734835895",
    name: "A life that's bold",
  },
  {
    backgroundImage: "./sharan.jpg",
    key: "510869511",
    name: "Sharan (Original Mix)",
  },
  {
    backgroundImage: "./underground.png",
    key: "682817684",
    name: "The Underground",
  },
  {
    backgroundImage: "./metro.jpg",
    key: "585194028",
    name: "Metro",
  },
  {
    backgroundImage: "./moon.jpg",
    key: "489073368",
    name: "Moon Walk",
  },
]

const Songlist = React.forwardRef(({ open }, ref) => {
  const transitions = useTransition(open ? data : [], item => item.key, {
    ref: ref,
    unique: true,
    trail: 400 / data.length,
    from: {
      opacity: 0,
      transform: "scale(0)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: {
      opacity: 0,
      transform: "scale(0)",
    },
  })

  const [selectedTrack, setTrack] = useState({
    backgroundImage: null,
    name: null,
    key: null,
  })

  const handleItemClick = item => {
    setTrack({
      backgroundImage: item.backgroundImage,
      key: item.key,
      name: item.name,
    })
  }

  return (
    <>
      <SongListContainer open={open}>
        {transitions.map(({ item, key, props }) => {
          return (
            <Song
              item={item}
              key={key}
              props={props}
              handleItemClick={handleItemClick}
            />
          )
        })}
        <div
          className="playWrapper"
          onClick={e => {
            if (!open) {
              return
            }
            e.stopPropagation()
            return
          }}
        >
          {selectedTrack.key !== null && (
            <Player
              client_id="c5a171200f3a0a73a523bba14a1e0a29"
              audio_id={selectedTrack.key}
              title={selectedTrack.name}
            />
          )}
        </div>
      </SongListContainer>
    </>
  )
})

export default Songlist
