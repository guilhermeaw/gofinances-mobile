import styled, { css } from 'styled-components/native';

interface TransactionButtonTypeProps {
  isSelected: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContentWrapper = styled.View`
  padding: 0 25px;
`;

export const RegisterTitleText = styled.Text`
  font-size: 20px;
  line-height: 30px;
  color: #000;
  margin: 24px 0;
`;

export const TransactionTypeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const IncomeButton = styled.TouchableOpacity<TransactionButtonTypeProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px solid rgba(150, 155, 180, 0.2);
  margin-right: 4px;
  height: 50px;

  ${props =>
    props.isSelected &&
    css`
      background: rgba(18, 164, 84, 0.1);
    `}
`;

export const IncomeButtonText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
  margin-left: 14px;
`;

export const OutcomeButton = styled.TouchableOpacity<
  TransactionButtonTypeProps
>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px solid rgba(150, 155, 180, 0.2);
  margin-left: 4px;
  height: 50px;

  ${props =>
    props.isSelected &&
    css`
      background: rgba(232, 63, 91, 0.1);
    `}
`;

export const OutcomeButtonText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
  margin-left: 14px;
`;

export const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 50px;
  background: #ff872c;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #fff;
`;
