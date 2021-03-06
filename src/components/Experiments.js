import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { experiments, eIdx} from '../content/experiments';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function Experiments() {
  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"Experiments"} />
      <StyledPage>
        <StyledBody>
          <StyledHeader id="headline" className="page-header font-green">Experiments</StyledHeader>
          {
            eIdx.map(i => {
              const currProj = experiments[i];
              if (i % 2 === 0) {
                // even
                return (
                  <StyledProjSection key={i} >
                    <StyledMobileProject>
                      <img src={currProj.thumbnail} alt="Project Thumbnail"/>
                      <div className="gradient-div-top"></div>
                    </StyledMobileProject>
                    <aside>
                      <StyledAsideHeader>
                        <div>
                          <h1 className="section-header" >{ currProj.name }</h1>
                          <span className="secondary-text">{ currProj.network }</span>
                        </div>
                        <StyledLink to={`/experiments/${i}`} className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read more about the Project</StyledLink>
                      </StyledAsideHeader>
                      <p className="body-text">{ currProj.description }</p>
                      <h2 className="nav-main-link">{ currProj.role }</h2>
                      <h3 className="secondary-text">Role</h3>
                    </aside>
                    <StyledProject src={currProj.thumbnail}>
                      <img alt="Thumbnail of Project" src={currProj.thumbnail} />
                      <div className="gradient-div-right"></div>
                    </StyledProject>
                  </StyledProjSection>
                )
              }

              return (
                <StyledProjSection key={i} >
                  <StyledMobileProject>
                    <img src={currProj.thumbnail} alt="Project Thumbnail"/>
                    <div className="gradient-div-top"></div>
                  </StyledMobileProject>
                  <StyledProject>
                    <img src={currProj.thumbnail} alt="Project Thumbnail"/>
                    <div className="gradient-div-left"></div>
                  </StyledProject>
                  <aside>
                    <StyledAsideHeader>
                      <div>
                        <h1 className="section-header" >{ currProj.name }</h1>
                        <span className="secondary-text">{ currProj.network }</span>
                      </div>
                      <StyledLink to={`/experiments/${i}`} className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read more about the Project</StyledLink>
                    </StyledAsideHeader>
                    <p className="body-text">{ currProj.description }</p>
                    <h2 className="nav-main-link">{ currProj.role }</h2>
                    <h3 className="secondary-text">Role</h3>
                  </aside>
                </StyledProjSection>
                )
            })
          }
        </StyledBody>
      </StyledPage>
      <Footer />
    </>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const StyledBody = styled.div`
  width: 80vw;

`;

const StyledHeader = styled.header`
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3vw;
  padding: 20vh 0;

  @media (max-width: 768px) {
    padding: 5vh 0;
    margin-top: 20vh;
    justify-content: start;
    text-align: center;
    align-items: center;

    font-size: 50px !important;
  }

  @media (max-width: 411px) {
    font-size: 34px !important;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: ${GREEN};
  }

  p {
  }
`;

const StyledProjSection = styled.section`
  padding: 0 0 20vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;

  aside > * {
    color: ${GREEN};
    padding: 0;
    margin: 0;
  }

  h2 {
    color: ${WHITE};
  }

  aside > p {
    margin: 2vh 0;
    color: ${BROWN};
    padding: 0;
    margin: 5vh 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 411px) {
  }
`;

const StyledAsideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h1 {
    margin: 0;
    color: ${WHITE};
  }
`;

const StyledGreater = styled.span`
  color: ${GREEN};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};

  &:hover {
    cursor: pointer;
    color: ${GREEN};
  }

  @media (max-width: 1366px) {
    margin-top: 3vh;
  }

`;

const StyledMobileProject = styled.div`
  display: none;
  position: relative;

  img {
    width: 100%;
  }

  div.gradient-div-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 411px) {
  }
`;

const StyledProject = styled.aside`
  position: relative;

  img {
    width: 100%;
  }

  div.gradient-div-right {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
  }

  div.gradient-div-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
  }

  &:hover {
    .gradient-div-right, .gradient-div-left, .gradient-div-top {
      display: none;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 411px) {
  }
`;

