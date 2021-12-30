import CircleImage from '@components/CircleImage';
import React from 'react';
import {Container, Separator, UserName, UserType} from './styles';
import Space from '@components/Space';
import {USER_TYPE} from '@customTypes/user';
import images from '@themes/images';

interface NameTagProps {
  fontSize?: string;
  imageSource: any;
  imageWidth?: string;
  imageHeight?: string;
  userName: string;
  userType: USER_TYPE;
}

const NameTag: React.FC<NameTagProps> = ({
  fontSize,
  imageSource,
  imageWidth,
  imageHeight,
  userName,
  userType,
}) => {
  return (
    <Container>
      <CircleImage
        source={imageSource}
        width={imageWidth}
        height={imageHeight}
        defaultSource={images.imgProfileFive}
      />
      <Space width="8px" />
      <UserName fontSize={fontSize}>{userName}</UserName>
      <Separator />
      <UserType fontSize={fontSize}>{userType}</UserType>
    </Container>
  );
};

export default NameTag;
