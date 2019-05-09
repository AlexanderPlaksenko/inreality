import styled from "styled-components"
import Logo from './Logo'
import Nav from './Nav'
import LangSwitcher from './LangSwitcher'
import React from "react";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    width: 100%;
    
    &.isScrolling .HeaderFixed {
        background-color: rgba(0, 38, 64, 0.35);
        padding-top: 16px;
        padding-bottom: 16px;
    }
`;

const HeaderFixed = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: 36px;
    padding-bottom: 0;
    z-index: 2;
    background-color: rgba(0, 38, 64, 0);
    transition: all .15s linear;
`;

const HeaderContainer = styled.header`
    width: 100%;
    padding-left: 6.15%;
    padding-right: 6.15%;
    max-width: 1920px;
    margin: 0 auto;
`;

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0,
        }
    }

    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }

    handleScroll = () => {
        const scrollPositionY = +window.scrollY
        return this.setState({scrollPositionY})
    }
    render = () => {
        const isScrolling = !!this.state.scrollPositionY
        return (
            <HeaderWrapper className={(isScrolling) ? 'isScrolling' : 'isNormal'}>
                <HeaderFixed className={'HeaderFixed'}>
                    <HeaderContainer className={"flex justify-between"}>
                        <Logo/>
                        <Nav/>
                        <LangSwitcher/>
                    </HeaderContainer>
                </HeaderFixed>
            </HeaderWrapper>
        );
    };
}

export default Header