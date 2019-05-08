import styled, {ThemeProvider} from "styled-components"
import DataFirstScreen from "/static/data/FIrstScreen.json"
import PlayButton from "/components/PlayButton"
import Button from "/components/Button"
import Fade from "react-reveal/Fade"

const themeWhite = {
    borderStyle: '2px solid #ffffff',
    bgStyle: 'transparent'

};
const themeBlue = {
    borderStyle: '2px solid #00b2ff'
};

const Wrapper = styled.div`
    background: url("${DataFirstScreen.image.banner}");
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-color: #000000;
    padding: 233px 0 280px 0;
    overflow: hidden;
`;

const H1 = styled.h1`
  color: #ffffff;
  font-family: Muller;
  font-size: 60px;
  font-weight: 300;
  line-height: 72px;
  margin: 0;
`;

const H2 = styled.h2`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  margin: 40px 5px 65px 2px;
`;

const PlayButtonWrapper = styled.div`
    margin: 180px 218px 0 0;
`;

const FirstItem = styled.div`
  max-width: 650px;
`;

const FirstScreen = () => (
    <Wrapper>
        <div className={'wrapper flex justify-between'}>
            <FirstItem>
                <Fade bottom cascade>
                    <H1>
                        {DataFirstScreen.h1}
                    </H1>
                    <H2>
                        {DataFirstScreen.h2}
                    </H2>
                </Fade>
            </FirstItem>

            <PlayButtonWrapper>
                <Fade bottom delay={'400'}>
                    <PlayButton ripple={true} text={true}/>
                </Fade>
            </PlayButtonWrapper>
        </div>

        <Fade bottom delay={'400'}>
            <div className={'wrapper flex'}>
                <ThemeProvider theme={themeBlue}>
                    <Button value={DataFirstScreen.buyButton}/>
                </ThemeProvider>
                <ThemeProvider theme={themeWhite}>
                    <Button value={DataFirstScreen.whiteButton}/>
                </ThemeProvider>
            </div>
        </Fade>
    </Wrapper>
);

export default FirstScreen