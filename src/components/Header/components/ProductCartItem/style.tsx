import styled from 'styled-components';
import avatar from "@material-ui/core/Avatar";

export const Avatar = styled(avatar)`
  & .MuiAvatar-img {
    object-fit: contain;
  }
`
export const WrapperProductTitle = styled.div`
  max-width: 200px;
`