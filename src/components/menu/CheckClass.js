import styled from "styled-components"

const Wrapper = styled.li`
  margin-bottom: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
`
const CheckInput = styled.input`
  margin-right: 5px;
`

const CheckClass = (props) => {
  return(
    <Wrapper id={props.class + "-toggle"}>
        <CheckInput type="checkbox" id={props.class} name={props.class} value={props.class} />
        <label htmlFor={props.class}>{props.class}</label>
    </Wrapper>
  )
}

export default CheckClass