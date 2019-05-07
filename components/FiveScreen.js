import styled from 'styled-components';
import FiveScreenData from 'static/data/FiveScreen.json';

let getSteps = () => {
    return [
        FiveScreenData
    ]
}

const FiveScreenWrapper = styled.div`
    background-image: linear-gradient(to bottom, #293d64 0 20%, #ffffff 20% 100%);
`;

const FiveScreenContainer = styled.div`
  box-shadow: 0 20px 80px rgba(41, 61, 100, 0.12);
  border-radius: 12px;
  background-color: #ffffff;
  margin: 0 243px;
  overflow: hidden;
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
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 500%;
    height: 2px;
    background-color: rgba(41,61,100,0.2);
  }
`;

const StepItem = styled.div`
  margin: 0;
`;

const StepTextContent = styled.div``;

const Steps = getSteps().map.call(FiveScreenData.steps, (step,  index) => {
    return <StepItem className={'w-third'}>
        <StepTextContent>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.text}</StepText>
        </StepTextContent>
        <StepImage className={'flex items-center justify-center'}>
            <img src={step.image} alt={step.title}/>
        </StepImage>
    </StepItem>
});

const FiveScreen = () => (
    <FiveScreenWrapper>
        <FiveScreenContainer>
            <Title className={'tc'}>{FiveScreenData.h3}</Title>

            <div className={'flex'}>{Steps}</div>
        </FiveScreenContainer>
    </FiveScreenWrapper>
);

export default FiveScreen