import styled from "styled-components"
import ThirdScreenData from "/static/data/ThirdScreen.json"

function getMenuItems() {
    return [
        ThirdScreenData
    ]
}

const ThirdScreenWrapper = styled.div`
  background-image: linear-gradient(#162034 0%, #162645 100%);
  padding: 107px 0 144px 0;
`;
const Title = styled.div`
  color: #ffffff;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 28px;
  text-align: center;
`;
const Text = styled.p`
  color: rgba(255,255,255,0.71);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  max-width: 578px;
  margin: 0 auto;
  text-align: center;
  
  + p {
      margin-top: 22px;
  }
`;
const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 37px 45px 0px 45px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  font-family: Muller;
  margin-left: 6px;

  &:first-child {
    margin-right: 36px;
  }
`;

const ItemTitle = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 14px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const ItemPrice = styled.div`
  color: #3195de;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 14px;
  text-transform: uppercase;
`;

const Img = styled.img`
    margin: 24px 0 15px 5px;
`;

const Items = getMenuItems().map.call(ThirdScreenData.items, function (item) {
    return <Item key={item.id}>
        <img src={item.icon} alt=""/>
        <Img src={item.image} alt=""></Img>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>{item.price}</ItemPrice>
    </Item>
});

const ThirdScreen = () => (
    <ThirdScreenWrapper>
        <div className={"wrapper"}>
            <Title>
                {ThirdScreenData.h3}
            </Title>
            <Text>
                {ThirdScreenData.text}
            </Text>
            <Text>
                {ThirdScreenData.text2}
            </Text>

            <ItemsWrapper>
                {Items}
            </ItemsWrapper>
        </div>
    </ThirdScreenWrapper>
);

export default ThirdScreen