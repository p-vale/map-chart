import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1rem;
`
const CheckInput = styled.input`
  margin-right: 5px;
`

const PublicPrivate = () => {
  return(
    <Wrapper>
      <h4>Type of services</h4>
      <div>
          <CheckInput type="checkbox" id="public" name="public" value="public" />
          <label htmlFor="public">public</label>
        </div>
        <div>
          <CheckInput type="checkbox" id="private" name="private" value="private" />
          <label htmlFor="private">private</label>
        </div>
    </Wrapper>
  )
}

export default PublicPrivate