import { useState } from 'react'
import styled from "styled-components"
import Accordion from "./menu/Accordion"
import Score from "./menu/Score"
import PublicPrivate from "./menu/PublicPrivate"
import CheckCategory from "./menu/CheckCategory"
import CheckClass from "./menu/CheckClass"

const Wrapper = styled.div`
  height: 100vh;
  margin-top: 2rem;
  h2 {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`
const List = styled.ul`
  list-style: none;
  padding: 1rem;
`
const SubList = styled.ul`
  list-style: none;
  padding-left: 15px;
`
const Opener = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: -2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: red;
  border-radius: 0 50% 50% 0;
  z-index: 9999;
  p {
    margin-top: 0.3rem;
  }
`

const Menu = () => {
  const [filters, setFilters] = useState(false);
  const [services, setServices] = useState(false);
  return(
    <>
      <Wrapper>
        <h2>MENU</h2>
        <div onClick={() => {setFilters(filters => !filters)}} >
          <Accordion title="FILTERS" isOpen={filters}/>
        </div>
        { filters && <>
          <PublicPrivate />
          <Score />
        </>}
        <div onClick={() => {setServices(services => !services)}} >
          <Accordion title="SERVICES" isOpen={services}/>
        </div>
        { services && <List>
          <li>
            <CheckCategory category="test" />
            <SubList>
              <CheckClass class="test1" />
              <CheckClass class="test2" />
            </SubList>
          </li>
          <CheckCategory category="another layer" />
        </List>
        }
        
      </Wrapper>
      <Opener>
        <p>{'>'}</p>
      </Opener>
    </>
  )
}

export default Menu