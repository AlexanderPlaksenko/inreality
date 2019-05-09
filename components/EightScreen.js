import styled, {ThemeProvider} from "styled-components"
import EightScreenData from "/static/data/EightScreen.json"
import Button from "./Button";
import Fade from "react-reveal/Fade";

function getItems() {
    return [
        EightScreenData
    ]
}

const themeBlue = {
    borderStyle: '2px solid #00b2ff'
};

const EightScreenWrapper = styled.div`
    background-color: #f5f7f9;
    padding: 97px 0 142px 0;
`;

const Item = styled.div`
    max-width: 430px;
    
    &:not(:last-child) {
      margin-right: 73px;
    }
`;

const H3 = styled.div`
  color: #162441;
  font-family: Muller;
  font-size: 40px;
  font-weight: 300;
  line-height: 56px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 430px;
`;

const Date = styled.div`
  color: rgba(22,36,65,0.3);
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
  line-height: 14px;
  margin: 35px 0 15px 0;
`;

const Link = styled.div`
  color: #00b2ff;
  font-family: Muller;
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
`;

const Text = styled.div`
  color: #162543;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const ItemsWrapper = styled.div`
`;
const ItemsContent = styled.div`
  margin: 71px 52px 98px 124px;
`;

const Items = getItems().map.call(EightScreenData.items, function (item) {
    return <Item className={`w-third link`} key={item.id} href={item.link}>
        <Image src={item.image}/>
        <Date>{item.date}</Date>
        <Link href={item.title} target={'_blank'}>{item.title}</Link>
        <Text>{item.text}</Text>
    </Item>
});

const EightScreen = () => (
    <EightScreenWrapper id={'blog'}>
        <Fade bottom delay={'200'}>
            <H3>
                {EightScreenData.h3}
            </H3>
        </Fade>

        <ItemsWrapper className={'wrapper'}>
            <Fade bottom delay={'400'}>
                <ItemsContent className={'flex'}>
                    {Items}
                </ItemsContent>
            </Fade>
        </ItemsWrapper>

        <ThemeProvider theme={themeBlue}>
            <Fade bottom delay={'600'}>
                <div className={'tc'}>
                    <Button value={EightScreenData.moreItems}/>
                </div>
            </Fade>
        </ThemeProvider>
    </EightScreenWrapper>
);

export default EightScreen