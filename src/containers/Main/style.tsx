import styled from 'styled-components';

export default {
  Wrapper: styled.div`
    ${({ theme }) => theme.breakpoints.up('md')} {
      padding: 6em 10em 0;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
      padding: 6em 1em 0;
    }
  `
}
