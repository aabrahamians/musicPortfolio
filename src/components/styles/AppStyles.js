import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .c {
    display: block;
    position: absolute;
  }
  p {
    display: black;
    align-self: flex-start;
  }
  @media (max-width: 768px) {
    height: 95vh;
    margin-bottom: 5px;
  }
`

export default AppContainer
