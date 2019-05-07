import React from "react"
import styled from "styled-components"
import FourScreenData from "../static/data/FourScreen.json";

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
`;

const Text = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
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
        this.setState({ active: index});
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
                <GraphButton key={index} onClick={() => this.setActive(index)} active={this.isActive(index)}>{item.title}</GraphButton>
            </React.Fragment>
        });
        const GraphContents = getItems().map.call(FourScreenData.items, (item, index) => {
            return <React.Fragment key={index}>
                <GraphContent key={index} active={this.isActive(index)}>
                    <img src={item.image} alt={item.title}/></GraphContent>
            </React.Fragment>
        });
        return (
            <FourScreenWrapper>
                <div className={"wrapper"}>
                    <Title className={'tc'}>
                        {FourScreenData.h3}
                    </Title>
                    <Text className={'tc'}>
                        {FourScreenData.text}
                    </Text>

                    <div className={'tc'}>{GraphButtons}</div>
                    <div>{GraphContents}</div>

                    <Text className={'tc'}>
                        {FourScreenData.text2}
                    </Text>
                </div>
            </FourScreenWrapper>
        );
    };
}

export default FourScreen