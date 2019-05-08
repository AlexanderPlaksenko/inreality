import styled, {ThemeProvider} from "styled-components"
import Button from "./Button"
import SevenScreenData from "/static/data/SevenScreen.json"
import Fade from "react-reveal/Fade";

const SevenScreenWrapper = styled.div`
  background-image: url("/static/images/bg-seven.png");
  padding: 128px 0 115px 0;
`;

const Form = styled.form`
  
`;

const H3 = styled.h3`
  color: #ffffff;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
    margin: 0 0 22px 0;
`;

const Text = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
      margin: 0 0 90px 0;
`;

const Input = styled.input`
  width: 260px;
  color: #ffffff;
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 14px;
  border: none;
  border-bottom: 1px solid white;
  background: none;
  padding: 10px 0;
  outline: none;
  
  &:not(:last-child) {
    margin-right: 76px;
  }
  
  ::placeholder {
      color: rgba(255,255,255,0.3);
  }
`;

const FormContainer = styled.div`
    margin-bottom: 66px;
`;

const SevenScreen = () => (
    <SevenScreenWrapper>
        <Fade bottom delay={'200'}>
            <H3 className={'tc'}>{SevenScreenData.h3}</H3>
        </Fade>
        <Fade bottom delay={'400'}>
            <Text className={'tc'}>{SevenScreenData.text}</Text>
        </Fade>
        <Form className={'flex flex-column items-center'}>
            <Fade bottom delay={'600'}>
                <FormContainer className={'flex justify-center'}>
                    <Input placeholder={SevenScreenData.placeholder[0].name}></Input>
                    <Input placeholder={SevenScreenData.placeholder[1].name}></Input>
                </FormContainer>
            </Fade>
            <Fade bottom delay={'800'}>
                <div className={'w-100 tc'}>
                    <Button value={SevenScreenData.button}/>
                </div>
            </Fade>
        </Form>
    </SevenScreenWrapper>
);

export default SevenScreen