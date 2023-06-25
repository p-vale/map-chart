import { useState } from 'react'
import styled from "styled-components"
import Menu from './components/Menu'
import Map from './components/Map'
import dataDefault from "./references/data.geojson"
import settingsDefault from "./references/settings"
import taxonomyDefault from "./references/taxonomy"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

function App() {
  const [data, setData] = useState(dataDefault);
  const [settings, setSettings] = useState(settingsDefault);
  const [taxonomy, setTaxonomy] = useState(taxonomyDefault);
  const setRangeMin = (x) => {
    setSettings({
      ...settings,
      rangeMin: x
    })
  }
  const setRangeMax = (x) => {
    setSettings({
      ...settings,
      rangeMax: x
    })
  }
  const setPublic = () => { setSettings({
      ...settings,
      public: !settings.public
    })
  }
  const setPrivate = () => { setSettings({
      ...settings,
      private: !settings.private
    })
  }

  return (
    <Wrapper>
      <Menu />
      <Map />
    </Wrapper>
  );
}

export default App;
