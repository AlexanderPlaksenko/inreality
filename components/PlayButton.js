import styled from "styled-components"
import PlayButtonData from "static/data/PlayButton.json"

const PlayButtonWrapper = styled.div`
    flex-shrink: 0;
    max-width: 288px;
`;

const PlayButtonText = styled.div`
  color: #ffffff;
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 16px;
  text-transform: uppercase;
  margin-left: 17px;
`;

const PlayButtonItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 100%;
  flex-shrink: 0;
  position: relative;
  
  img {
    width: 41px;
    margin-left: 7px;
    margin-top: 8px;
  }
`;

const RippleWrapper = styled.div`

`;
const Ripple = styled.div`
  position: absolute;
  border-radius: 50%;
      left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
  width: 328px;
  height: 328px;
  border: 1px solid rgba(255,255,255,0.31);
`;
const Ripple1 = styled.div`
  position: absolute;
  border-radius: 50%;
      left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
  width: 705px;
  height: 705px;
  border: 1px solid rgba(255,255,255,0.31);
`;
const Ripple2 = styled.div`
  position: absolute;
      left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
  border-radius: 50%;
  width: 1392px;
  height: 1392px;
  border: 1px solid rgba(255,255,255,0.31);
`;

const PlayButton = props => (
    <PlayButtonWrapper className={"flex items-center"}>
        <PlayButtonItem className={"flex justify-center items-center"}>
            <img src={PlayButtonData.image.banner} alt={PlayButtonData.text}/>

            {
                props.ripple ? <Ripple><Ripple1><Ripple2></Ripple2></Ripple1></Ripple> : ''
            }
        </PlayButtonItem>
        {
            props.text ? <PlayButtonText>{PlayButtonData.text}</PlayButtonText> : ''
        }

    </PlayButtonWrapper>
);

export default PlayButton