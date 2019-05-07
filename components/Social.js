import styled from "styled-components"
import SocialData from "/static/data/Social.json"
import nav from "../static/data/Nav";

function getSocialItems() {
    return [
        SocialData
    ]
}

const SocialWrapper = styled.div`

`;

const SocialItem = styled.a`
  opacity: .4;
  transition: opacity .25s linear;
  
  &:not(:first-child) {
    margin-left: 25px;
  }
  
  &:hover {
    opacity: 1;
  }
`;

const socialItems = getSocialItems().map.call(SocialData.items, function(item) {
    return <SocialItem className="link dim" key={item.id} href={item.link}>
        <img src={item.icon} alt=""/>
    </SocialItem>
});

const Social = () => (
    <SocialWrapper>
        { socialItems }
    </SocialWrapper>
);

export default Social