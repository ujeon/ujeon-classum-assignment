import styled from 'styled-components/native';
import colors from '@themes/colors';

interface UserNameProps {
  fontSize?: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text<UserNameProps>`
  font-size: ${({fontSize}) => fontSize || '16px'};
  font-weight: bold;
  color: ${colors.black};
`;

export const Separator = styled.View`
  width: 5px;
  height: 5px;
  background-color: ${colors.darkGrey3};
  border-radius: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const UserType = styled(UserName)`
  font-size: ${({fontSize}) => fontSize || '16px'};
  font-weight: normal;
  color: ${colors.darkGrey3};
`;
