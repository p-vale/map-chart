import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1rem;
`

const MinMax = styled.div`
  height: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`
const Slider = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 15px;
  position: relative;
  background-color: rgb(56, 56, 56);
  border-radius: 5px;
`
const Progress = styled.div`
  height: 4px;
  position: absolute;
  left: 0%;
  right: 0%;
  background-color: #000000;
  border-radius: 5px;
`

const RangeInput = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 4px;
    position: absolute;
    top: -5px;
    background: none;
    -webkit-appearance: none;
    pointer-events: none;
}
  input[type="range"]::-webkit-slider-thumb {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    -webkit-appearance: none;
    background-color: #000000;
    pointer-events: auto;
    margin-top: 2px; /* center vertically */
  }
`

const Range = () => {
  return(
    <Wrapper>
      <MinMax>
          <p>range: </p>
          <p id="minTxt">0</p>
          <p> - </p>
          <p id="maxTxt">1</p>
      </MinMax>
      <Slider>
          <Progress />
      </Slider>
      <RangeInput>
        <input type="range" name="min-score" min="0" max="1" defaultValue="0" step=".01" />
        <input type="range" name="max-score" min="0" max="1" defaultValue="1" step=".01" />
      </RangeInput>
    </Wrapper>
  )
}

export default Range