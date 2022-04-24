import styled from 'styled-components';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function() {
  return (
    <StyledSection>
      <StyledAside>
        <span className="section-header font-green">My Web 3.0 Stack</span>
        <span className="secondary-text font-brown">How I Keep Myself Productive</span>
        <StyledLogo>
          <img src="/assets/icons/html.svg" alt="HTML Logo" />
          <img src="/assets/icons/css.svg" alt="CSS Logo" />
          <img src="/assets/icons/javascript.svg" alt="Javascript Logo" />
          <img src="/assets/icons/reactjs.svg" alt="ReactJS Logo" />
          <img src="/assets/icons/nextjs.svg" alt="NextJS Logo" />
          <img src="/assets/icons/metamask.svg" alt="MetaMask Logo" />
          <img src="/assets/icons/ethereum.svg" alt="Ethereum Logo" />
          <img src="/assets/icons/solidity.svg" alt="Solidity Logo" />
          <img src="/assets/icons/polygon.svg" alt="Plygon Logo" />
          <img src="/assets/icons/hardhat.svg" alt="Hardhat Logo" />
          <img src="/assets/icons/mocha.svg" alt="Mocha Logo" />
          <img src="/assets/icons/waffle.svg" alt="Waffle Logo" />
          <img src="/assets/icons/alchemy.svg" alt="Alchemy Logo" />
        </StyledLogo>
      </StyledAside>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 10vh 0;
  display: grid;
  justify-content: center;
`

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

const StyledLogo = styled.span`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  img {
    margin: 20px;
    display: block;
    height: 10vh;
    opacity: 0.8;
    transition: transform 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
      opacity: 1;
      transform: skew(20deg, -10deg) translateY(-10px) scale(1.1);
    }
  }
`;

const StyledP = styled.p`
  padding: 0 5vw;
  text-align: center;
`;