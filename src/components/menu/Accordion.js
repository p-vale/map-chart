import styled from "styled-components"

const Title = styled.div`
  background-color: pink;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-top: -1px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  :hover {
    background-color: purple;
  }
`

const Accordion = (props) => {
  return(
    <>
      <Title>
        <h3>{ props.title }</h3>
        <p>{ props.isOpen ? "-" : "+" }</p>
      </Title>
    </>
  )
}

export default Accordion