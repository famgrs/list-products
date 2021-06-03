import styled from 'styled-components';

export const WrapperButtonCart = styled.div`
  & .MuiButtonBase-root {
    background: #ff9100;
    color: #fff;
  }
`
export const WrapperMenu = styled.div`
  background: #fff;
  ${({ theme }) => `
    color: ${theme.palette.text.primary};
    padding: ${theme.spacing(1)}px;
  `}
`