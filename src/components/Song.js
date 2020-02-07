import React from "react"
import { useSpring, animated, config } from "react-spring"
import { Item } from "./styles/SongListStyles"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 5,
  (x - window.innerWidth / 2) / 5,
  1.3,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Song = ({ item, props, handleItemClick }) => {
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.wobbly,
  }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.interpolate(trans) }}
    >
      <Item
        onClick={e => {
          e.stopPropagation()
          handleItemClick(item)
        }}
        style={{
          ...props,
          backgroundImage: `url(${item.backgroundImage})`,
        }}
      />
    </animated.div>
  )
}

export default Song
