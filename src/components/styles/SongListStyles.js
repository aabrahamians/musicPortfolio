import styled from "styled-components"
import { animated } from "react-spring"

const SongListContainer = styled(animated.div)`
  position: relative;
  display: grid;
  height: 50vh;
  background-color: red;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  grid-gap: 5px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  cursor: ${props => (props.open ? `pointer` : null)};
  will-change: width, height;
  .playWrapper {
    grid-column: 1 / span 3;
    width: 100%;
  }
`

const Item = styled(animated.div)`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  will-change: transform, opacity;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export { SongListContainer, Item }
