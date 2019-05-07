import styled from "styled-components"
import footer from "/static/data/footer.json"
import Logo from "/components/Logo"
import Nav from "/components/Nav"
import LangSwitcher from './LangSwitcher'
import Social from './Social'

function getSocialItems() {
    return [
        footer
    ]
}

const FooterWrapper = styled.footer`
  background-color: #162441;
  padding: 57px 0 71px 0;
  
  .FooterNav {
    margin: 0 -16px;
  }
`;

const LogoText = styled.div`
  color: rgba(255,255,255,0.51);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  margin-top: 6px;
`;

const FooterItem = styled.a`
  color: rgba(255,255,255,0.5);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 16px;
`;

const FooterContainer = styled.div`
  padding-left: 9%;
  
  .FooterLinks {
      margin-top: 22px;
  }
`;

const footerItems = getSocialItems().map.call(footer.items, function (item) {
    return <FooterItem className={`link ${item.style || ''}`} key={item.id} href={item.link}>{item.title}</FooterItem>
});

const Footer = () => (
    <FooterWrapper>
        <div className="wrapper flex justify-between">
            <div>
                <Logo/>
                <LogoText>
                    InRealty, 2019.<br/>
                    Все права защищены.
                </LogoText>
            </div>
            <FooterContainer className={'flex-auto'}>
                <div className={'flex justify-between'}>
                    <Nav className={'FooterNav'}/>
                    <LangSwitcher/>
                </div>
                <div className={'FooterLinks flex justify-between'}>
                    <div>
                        {footerItems}
                    </div>
                    <div className={'flex align-center'}>
                        <Social/>
                    </div>
                </div>
            </FooterContainer>
        </div>
    </FooterWrapper>
);

export default Footer