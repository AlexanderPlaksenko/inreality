import styled from "styled-components"

const LangSwitcherItem = styled.a`
  color: #ffffff;
  font-family: Muller;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 14px;
  text-transform: uppercase;
  margin-left: 7px;
  
  span {
    opacity: ${props => props.primary ? "0.3" : "1"};
  }
`
const LangSwitcher = () => (
    <div>
        <LangSwitcherItem className="link dim" href="/ru">
            <span>РУС</span>
        </LangSwitcherItem>
        <LangSwitcherItem primary className="link dim" href="/eng">
            <span>ENG</span>
        </LangSwitcherItem>
    </div>
);

export default LangSwitcher