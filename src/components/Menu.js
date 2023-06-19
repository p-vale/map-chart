import { useState } from 'react'
import styled from "styled-components"
import Accordion from "./menu/Accordion"
import Score from "./menu/Score"
import CheckCategory from "./menu/CheckCategory"
import CheckClass from "./menu/CheckClass"

const Wrapper = styled.div`
  height: 100vh;
  max-width: 25%;
`
const List = styled.ul`
  list-style: none;
  padding: 1rem;
`
const SubList = styled.ul`
  list-style: none;
  padding-left: 15px;
`

const Menu = () => {
  const [filters, setFilters] = useState(false);
  const [services, setServices] = useState(false);
  return(
    <Wrapper>
      <div onClick={() => {setFilters(filters => !filters)}} >
        <Accordion title="FILTERS" isOpen={filters}/>
      </div>
      { filters && <Score />}
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
  )
}

export default Menu