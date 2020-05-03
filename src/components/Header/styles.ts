import styled, { css } from 'styled-components/native';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.View<ContainerProps>`
  background: #5636d3;

  ${props =>
    props.size === 'small'
      ? css`
          padding: 30px 0;
        `
      : css`
          padding: 30px 0 200px 0;
        `}
`;

export const HeaderTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 25px;
`;

export const HeaderDateText = styled.Text`
  font-size: 14px;
  opacity: 0.6;
  color: #ffffff;
`;
