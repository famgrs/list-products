import styled from 'styled-components';
import card from "@material-ui/core/Card";
import cardMedia from "@material-ui/core/CardMedia";
import cardContent from "@material-ui/core/CardContent";
import cardActions from "@material-ui/core/CardActions";

export const Card = styled(card)`
  && {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const CardMedia = styled(cardMedia)`
  && {
    height: 0;
    padding-top: 56.25%;
    background-size: contain;
  }
`
export const CardContent = styled(cardContent)`
  && {
    flex-grow: 1;
    padding-top: 0;
  }
`
export const CardActions = styled(cardActions)`
  && {
    justify-content: space-between;
  }
`
export const WrapperImage = styled.div`
  height: 0;
  padding-top: 56.25%;
  background: lightgray;
`
