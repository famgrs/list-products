import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box !important;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
  }

  .fullHeight {
    height: 100%;
  }
  .fullWidth {
    width: 100%;
  }

  .no-scroll {
    overflow: hidden;
  }
  .scroll-x {
    overflow-x: auto;
  }
`
