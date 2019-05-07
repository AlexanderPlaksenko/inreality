import styled from "styled-components"

const ButtonItem = styled.a`
  background-color: ${props => props.theme.bgStyle || '#00b2ff'};
  border: ${props => props.theme.borderStyle || ''};
`;

const Button = props => (
    <ButtonItem className={'button link dim'}>
        {props.value}
    </ButtonItem>
);

export default Button