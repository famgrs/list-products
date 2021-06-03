import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    ${({ theme }) => theme.breakpoints.up('md')} {
      padding: 0 10em;
      padding-top: 80px;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 0 1em;
      padding-top: 50px;
    }
  `
}
