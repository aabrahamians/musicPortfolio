import React, { useState, createRef, useRef } from "react"
import { Helmet } from "react-helmet"
import { useSpring, animated, useChain } from "react-spring"

//components
import { Logo } from "../components/Logo"
import { ContactMe } from "../components/ContactMe"
import Songlist from "../components/Songlist"

import AppContainer from "../components/styles/AppStyles"

const Index = () => {
  const transRef = createRef()
  const flipRef = useRef()

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    ref: flipRef,
    from: { opacity: 1, transform: `perspective(600px) rotateX(${0}deg)` },
    to: {
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    },
    config: { mass: 1, tension: 500, friction: 80 },
  })

  useChain(flipped ? [flipRef, transRef] : [transRef, flipRef], [0, 0.5])

  return (
    <AppContainer onClick={() => set(state => !state)}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BERTELLI, music producer</title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Meet Artin Sarkisian of Bertelli and Rad Panda Studios"
        />
        <link rel="canonical" href="http://bertelli.com/" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ContactMe />
      <animated.div
        className="c back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <Logo />
      </animated.div>
      <animated.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <Songlist open={flipped} ref={transRef} />
      </animated.div>
    </AppContainer>
  )
}
export default Index
