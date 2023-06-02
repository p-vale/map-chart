import styled from "styled-components"
import Menu from './components/Menu'
import Map from './components/Map'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

function App() {
  return (
    <Wrapper>
      <Menu />
      <Map />
    </Wrapper>
  );
}

export default App;
