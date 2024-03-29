import React from "react"
import styled from "styled-components"
import FourScreenData from "../static/data/FourScreen.json";
import Fade from "react-reveal/Fade";

let getItems = () => {
    return [
        FourScreenData
    ]
};

const FourScreenWrapper = styled.div`
  padding: 87px 0 93px 0;
  background-color: #293d64;
`;

const Title = styled.h3`
  color: #ffffff;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
  line-height: 56px;
  margin: 0 0 19px 0;
`;

const Text = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;

  &.bottom-text {
    margin: 110px 0 6px 0;
  }
`;

const GraphButton = styled.div`
  border-radius: 4px;
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 14px;
  text-transform: uppercase;
  padding: 15px 38px 13px 38px;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  &:not(:last-child) {
    margin: 0 20px 0 0;
  }
  
  background-color: ${props => props.active ? '#00b2ff' : '#34476c'};
  color: ${props => props.active ? '#ffffff' : 'rgba(255,255,255,0.5)'};
`;

const GraphContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  img {
    max-width: 100%;
  }
`;

const GraphButtonsContainer = styled.div`
    margin: 62px 0 52px 0;
`;

class FourScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active
        };
    }

    setActive = index => {
        if (index === 0) {
            index = this.props.active;
        }
        this.setState({active: index});
    };

    isActive = index => {
        if (index === 0) {
            index = this.props.active;
        }
        return this.state.active === index;
    };

    render = () => {
        const GraphButtons = getItems().map.call(FourScreenData.items, (item, index) => {
            return <React.Fragment key={index}>
                <GraphButton key={index} onClick={() => this.setActive(index)}
                             active={this.isActive(index)}>{item.title}</GraphButton>
            </React.Fragment>
        });
        const GraphContents = getItems().map.call(FourScreenData.items, (item, index) => {
            return <React.Fragment key={index}>
                <GraphContent key={index} active={this.isActive(index)}>
                    <img src={item.image} alt={item.title}/></GraphContent>
            </React.Fragment>
        });
        return (
            <FourScreenWrapper id={'inreality'}>
                <div className={"wrapper"}>
                    <Fade bottom delay={'200'}>
                        <Title className={'tc'}>
                            {FourScreenData.h3}
                        </Title>
                    </Fade>
                    <Fade bottom delay={'400'}>
                        <Text className={'tc'}>
                            {FourScreenData.text}
                        </Text>
                    </Fade>
                    <Fade bottom delay={'600'}>
                        <GraphButtonsContainer className={'tc'}>{GraphButtons}</GraphButtonsContainer>
                    </Fade>
                    <Fade bottom delay={'800'}>
                        <div>{GraphContents}</div>
                    </Fade>

                    <Fade bottom delay={'1000'}>
                        <Text className={'tc bottom-text'}>
                            {FourScreenData.text2}
                        </Text>
                    </Fade>
                </div>
            </FourScreenWrapper>
        );
    };
}

export default FourScreen