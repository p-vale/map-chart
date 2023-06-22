import { useState } from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`
const CheckInput = styled.input`
  margin-right: 5px;
`
const BufferSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  input { 
    opacity: 0;
    width: 0;
    height: 0;
}
`
const Toggle = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(36, 36, 36);
    border-radius: 20px;
    -webkit-transition: .4s;
    transition: .4s;
    background-color: {checked ? "red" : "blue"};
  :before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: rgb(200, 200, 200);
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
`

const CheckCategory = (props) => {
  const [checked, setChecked] = useState(false);
  return(
    <Wrapper id={props.category + "-toggle"}>
      <div>
          <CheckInput type="checkbox" id={props.category} name={props.category} value={props.category} />
          <label htmlFor={props.category}>{props.category}</label>
      </div>
      <BufferSwitch>
          <input type="checkbox" id={"buff" + props.category} />
          <Toggle isOpen={checked} onClick={() => {setChecked(checked => !checked)}} />
      </BufferSwitch>
    </Wrapper>
  )
}

export default CheckCategory