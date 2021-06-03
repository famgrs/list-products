import styled from 'styled-components';
import card from "@material-ui/core/Card";

interface CardProps {
  small: boolean
}

export const Card = styled(card)<CardProps>`
  && {
    ${({ small }) => small && `
      display: flex;
      flex-direction: row-reverse;
    `}
  }
`
