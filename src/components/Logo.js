import React from "react"
import { useSpring, animated } from "react-spring"

import LogoContainer from "../components/styles/LogoStyle"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const translogoPart2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`
const translogoPart1 = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`
const transBackground = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`

function Logo() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  return (
    <LogoContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
      onClick={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="logoBackground"
        style={{ transform: props.xy.interpolate(transBackground) }}
      />
      <animated.div
        className="logoPart1"
        style={{ transform: props.xy.interpolate(translogoPart1) }}
      />
      <animated.div
        className="logoPart2"
        style={{ transform: props.xy.interpolate(translogoPart2) }}
      />
    </LogoContainer>
  )
}

export { Logo }
