import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DevStack from './DevStack';
import Workflow from './Workflow';
import ProjectPrev from './ProjectPrev';
import { pIdx, projects } from '../content/projects';
import { eIdx, experiments } from '../content/experiments';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';


const NUM_PROJ_TO_SHOW = 2;

export default function Home() {
  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <StyledHeader>
        <span id="headline" className='homepage-header font-white'>404 Page <span className="font-green">Not Found</span></span>
      </StyledHeader>

      <Navbar page={"Home"} />
    </>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    span {
      font-size: 22px
    }
  }
`;
