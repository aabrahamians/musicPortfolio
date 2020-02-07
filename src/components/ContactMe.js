import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas, faPaw } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faInstagram,
  faFacebook,
  faSoundcloud,
  faTwitch,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  fas,
  faPaw,
  fab,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faSpotify,
  faTwitch
)

const ContactMeContainer = styled.div`
  position: absolute;
  height: 4em;
  display: flex;
  align-items: flex-end;
  right: 0;
  bottom: 0;
  font-size: 4em;
  display: flex;
  a {
    color: black;
    transition: padding 0.5s ease;

    &:hover {
      padding-bottom: 1.2em;
      /* transition: padding 2.5; */
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    right: inherit;
  }
`
const ContactMe = () => {
  return (
    <ContactMeContainer
      onClick={e => {
        e.stopPropagation()
      }}
    >
      <a href="https://www.instagram.com/bertellimusic" className="">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a href="https://www.facebook.com/BertelliMusic/" className="">
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a href="https://soundcloud.com/bertellimusic/" className="">
        <FontAwesomeIcon icon={["fab", "soundcloud"]} />
      </a>
      <a href="https://spoti.fi/2ml8YNg" className="">
        <FontAwesomeIcon icon={["fab", "spotify"]} />
      </a>
      <a href="https://www.radpandastudios.com" className="">
        <FontAwesomeIcon icon={["fas", "paw"]} />
      </a>
    </ContactMeContainer>
  )
}

export { ContactMe }
