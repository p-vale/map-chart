import styled from "styled-components"
import Score from "./menu/Score"
import CheckCategory from "./menu/CheckCategory"
import CheckClass from "./menu/CheckClass"

const Wrapper = styled.div`
  height: 100vh;
  max-width: 25%;
  padding: 20px;
`
const List = styled.ul`
  list-style: none;
  padding: 0px;
`
const SubList = styled.ul`
  list-style: none;
  padding-left: 15px;
`

const Menu = () => {
  return(
    <Wrapper>
      <Score />
      <h3>SERVICES</h3>
      <List>
        <li>
          <CheckCategory category="test" />
          <SubList>
            <CheckClass class="test1" />
            <CheckClass class="test2" />
          </SubList>
        </li>
        <CheckCategory category="another layer" />
      </List>
      
    </Wrapper>
  )
}

export default Menu