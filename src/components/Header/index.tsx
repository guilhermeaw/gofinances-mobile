import React from 'react';

import { Image } from 'react-native';

import { Container, HeaderTitleWrapper, HeaderDateText } from './styles';
import logoImg from '../../assets/logo.png';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <HeaderTitleWrapper>
        <Image source={logoImg} />
        <HeaderDateText>{new Date().toLocaleDateString()}</HeaderDateText>
      </HeaderTitleWrapper>
    </Container>
  );
};

export default Header;
