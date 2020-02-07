import styled from "styled-components"

const LogoContainer = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .logoPart1,
  .logoPart2,
  .logoBackground {
    position: absolute;
    background-size: cover;
    background-position: center center;
    will-change: transform;
  }
  .logoPart1 {
    position: absolute;
    width: 250px;
    height: 250px;
    background-image: url("/logolayer1.svg");
  }

  .logoPart2 {
    width: 250px;
    height: 250px;
    background-image: url("/logolayer2.svg");
  }
  .logoBackground {
    width: 350px;
    height: 350px;
    background-image: url("/logolayer3.svg");
  }
`
export default LogoContainer
