import styled from "styled-components";
import SixScreenData from "/static/data/SixScreen.json";
import Button from "./Button";
import Fade from "react-reveal/Fade";

function getPeoples() {
    return [
        SixScreenData
    ]
}

const SixScreenWrapper = styled.div`
    background: url('/static/images/peoples/bg-six.png') center no-repeat;
`;
const Title = styled.h3`
    font-family: Muller;
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    color: #162441;
    margin: 0 auto 24px auto;
`;
const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #162543;
    max-width: 665px;
    margin: 0 auto;
`;

const People = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 4);
    margin: 60px auto 23px auto;
`;
const Avatar = styled.div`
    border-radius: 50%;
    width: 213px;
    height: 213px;
    position: relative;

    img {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);    
    }
`;
const Icon = styled.div``;
const Name = styled.div`
    font-family: Muller;
    font-size: 20px;
    line-height: 22px;
    color: #162441;
    margin: 43px 0 0px 0;
`;
const Vacancy = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;/* identical to box height */
    text-align: center;
    color: #162543;          
`;
const Peoples = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 75px auto 0 auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 90px 0;

    .button {
        text-transform: uppercase;
    }
`;

const Items = getPeoples().map.call(SixScreenData.peoples, (people, index) => {
    return <People key={index}>
        <Avatar style={{background: `url(${people.photo})`}}>
            <Icon>
                <img src='/static/images/peoples/tg.png'></img>
            </Icon>
        </Avatar>
        <Name>{people.name}</Name>
        <Vacancy>{people.vacancy}</Vacancy>
    </People>
});

const SixScreen = () => (
    <SixScreenWrapper>
        <Fade bottom delay={'200'}>
            <Title className={'tc'}>{SixScreenData.h3}</Title>
        </Fade>
        <Fade bottom delay={'400'}>
            <Text className={'tc'}>{SixScreenData.text}</Text>
        </Fade>

        <Fade bottom delay={'600'}>
            <Peoples>
                {Items}
            </Peoples>
        </Fade>

        <Fade bottom delay={'800'}>
            <ButtonWrapper>
                <Button value={SixScreenData.button}/>
            </ButtonWrapper>
        </Fade>
    </SixScreenWrapper>
);

export default SixScreen