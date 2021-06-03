import styled from 'styled-components';
import card from "@material-ui/core/Card";
import cardMedia from "@material-ui/core/CardMedia";

export const Card = styled(card)`
  && {
    height: 100%;
    display: flex;
  }
`

export const CardMedia = styled(cardMedia)`
  && {
    height: 0;
    padding-top: 56.25%;
    background-size: contain;
  }
`
