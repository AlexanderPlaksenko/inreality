import styled from "styled-components"
import SecondScreenData from "/static/data/SecondScreen.json"
import PlayButton from "/components/PlayButton"

const SecondScreenWrapper = styled.div`
  background-image: url("${SecondScreenData.image.banner}");
  background-repeat: no-repeat;
  background-position: 535px 143px;
`;

const SecondScreenImage = styled.div`
    margin-right: auto;
    margin-left: 19em;
`;

const SecondScreenItem = styled.div`
  padding-top: 142px;
  padding-bottom: 152px;
`;

const Title = styled.h3`
  width: 330px;
  height: 48px;
  color: #162441;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
  margin: 0 0 30px 0;
`;

const Text = styled.p`
  width: 492px;
  height: 197px;
  color: #162543;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin: 0 2px;
`;
const TextWrapper = styled.div`
    background: white;
    margin: 130px 0 130px 90px;
    padding: 90px 86px 96px 35px;
`;

const SecondScreen = () => (
    <SecondScreenWrapper className={"wrapper"}>
        <SecondScreenItem className={"flex justify-center items-center"}>
            <TextWrapper>
                <Title>{SecondScreenData.h3}</Title>
                <Text>{SecondScreenData.text}</Text>
            </TextWrapper>

            <SecondScreenImage>
                <PlayButton ripple={false} text={false}/>
            </SecondScreenImage>
        </SecondScreenItem>
    </SecondScreenWrapper>
);

export default SecondScreen