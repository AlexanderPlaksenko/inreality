import styled from "styled-components"

const HeaderLogo = styled.a`
  color: #ffffff;
  font-family: Muller;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  span {
    font-weight: 800;
  }
`
const Logo = () => (
    <HeaderLogo className="link dim" href="/">
        <span>IN.</span>REALTY
    </HeaderLogo>
);

export default Logo