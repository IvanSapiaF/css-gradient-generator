import styled from 'styled-components';

import BackgroundColor from './Components/BackgroundColor';
import SideBarContainer from './Components/LeftMenu/SideBarContainer';

function App() {
  const Container = styled.div`
    display: flex;
    height: 100vh;
  `;

  return (
    <Container>
      <SideBarContainer />
      <BackgroundColor />
    </Container>
  );
}

export default App;
