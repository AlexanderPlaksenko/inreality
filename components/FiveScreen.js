import styled from 'styled-components';
import FiveScreenData from 'static/data/FiveScreen.json';
import Fade from "react-reveal/Fade";

let getSteps = () => {
    return [
        FiveScreenData
    ]
}

const FiveScreenWrapper = styled.div`
    background-image: linear-gradient(to bottom,#293d64 0 70%,#ffffff 70% 100%);
`;

const FiveScreenContainer = styled.div`
  box-shadow: 0 20px 80px rgba(41, 61, 100, 0.12);
  border-radius: 12px;
  background-color: #ffffff;
  margin: 0 12.66%;
  overflow: hidden;
  padding: 70px 0 120px 0;
  margin-bottom: 120px;
`

const Title = styled.h3`
  color: #162441;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
  line-height: 56px;
  margin: 0;
`;

const StepTitle = styled.div`
  color: #162441;
  font-family: Muller;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  margin: 0 0 18px 0;
`;

const StepText = styled.div`
  color: rgba(22,36,66,0.7);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const StepImage = styled.div`
  width: 102px;
  height: 102px;
  box-shadow: 1px 4px 30px rgba(41, 61, 100, 0.2);
  background-color: #ffffff;
  border-radius: 50%;
  position: relative;
  margin-left: 24px;
  margin-bottom: 57px;
  position: relative;
  z-index: 1;
`;

const StepItem = styled.div`
  margin: 0;
  padding: 0 5%;
  position: relative;

  &.imageTop {
    margin-top: 264px;
  }

  &.imageBottom {
    margin-top: 52px;

    .StepImage {
      order: 1;
      margin-top: 62px;
    }
    .StepTextContent {
      order: 0;
    }
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(41,61,100,0.2);
    bottom: 255px;
  }
`;

const StepTextContent = styled.div`
  height: 150px;
`;
const StepsContainer = styled.div``;

const Steps = getSteps().map.call(FiveScreenData.steps, (step, index) => {
    return <StepItem key={index}
                     className={`flex flex-column w-third ${step.order === true ? 'imageBottom' : 'imageTop'}`}>
        <StepImage className={'flex items-center justify-center StepImage'}>
            <img src={step.image} alt={step.title}/>
        </StepImage>
        <StepTextContent className={'StepTextContent'}>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.text}</StepText>
        </StepTextContent>
    </StepItem>
});

const FiveScreen = () => (
    <FiveScreenWrapper>
        <FiveScreenContainer>
            <Fade bottom delay={'200'}>
                <Title className={'tc'}>{FiveScreenData.h3}</Title>
            </Fade>

            <Fade bottom delay={'400'}>
                <StepsContainer className={'flex'}>
                    {Steps}
                </StepsContainer>
            </Fade>
        </FiveScreenContainer>
    </FiveScreenWrapper>
);

export default FiveScreen