import styled from "styled-components"
import Logo from './Logo'
import Nav from './Nav'
import LangSwitcher from './LangSwitcher'

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: 36px;
    padding-left: 120px;
    padding-right: 118px;
`;

const HeaderWrapper = styled.div`
    max-width: 1920px;
    transform: translateZ(0);
    margin: 0 auto;
    width: 100%;
    display: block;
    position: relative;
`;

const Header = () => (
    <HeaderWrapper>
        <HeaderContainer className={"flex justify-between"}>
            <Logo/>
            <Nav/>
            <LangSwitcher/>
        </HeaderContainer>
    </HeaderWrapper>
);

export default Header