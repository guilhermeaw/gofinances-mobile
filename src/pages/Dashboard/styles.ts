import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

interface TransactionPanelProps {
  type?: 'default' | 'total';
}

interface TransactionValueTextProps {
  type: string;
}

interface Transaction {
  id: string;
  title: string;
  type: string;
  value: number;
  created_at?: Date;
  category: {
    title: string;
  };
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const TransactionPanelList = styled.ScrollView`
  margin: -150px 0 0 0;
`;

export const TransactionPanel = styled.View<TransactionPanelProps>`
  justify-content: space-between;

  padding: 20px 25px 42px 25px;
  border-radius: 5px;
  background: #ffffff;
  width: 300px;
  height: 200px;
  margin-left: 16px;

  ${props =>
    props.type === 'total' &&
    css`
      background: #ff872c;
      margin-right: 25px;
    `}
`;

export const PanelTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PanelTypeText = styled.Text<TransactionPanelProps>`
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;

  ${props =>
    props.type === 'total' &&
    css`
      color: #fff;
    `}
`;

export const PanelValueWrapper = styled.View``;

export const PanelValueText = styled.Text<TransactionPanelProps>`
  font-size: 30px;
  line-height: 45px;
  color: #363f5f;

  ${props =>
    props.type === 'total' &&
    css`
      color: #fff;
    `}
`;

export const PanelLastTransactionDateText = styled.Text<TransactionPanelProps>`
  font-size: 12px;
  line-height: 18px;
  color: #969cb3;

  ${props =>
    props.type === 'total' &&
    css`
      color: #fff;
    `}
`;

export const ContentWrapper = styled.View`
  padding: 0 25px;
`;

export const TransactionListText = styled.Text`
  margin-top: 40px;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<Transaction>,
)``;

export const TransactionBox = styled.View`
  justify-content: space-between;

  margin-bottom: 15px;
  padding: 20px 25px;
  border-radius: 5px;
  width: 100%;
  min-height: 130px;
  background: #ffffff;
`;

export const TransactionBoxHeader = styled.View``;

export const TransactionTitle = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #363f5f;
`;

export const TransactionValueText = styled.Text<TransactionValueTextProps>`
  margin-top: 2px;
  font-size: 20px;
  line-height: 30px;
  color: #12a454;

  ${props =>
    props.type === 'outcome' &&
    css`
      color: #e83f5b;
    `}
`;

export const TransactionBoxFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TransactionCategoryWrapper = styled.View`
  flex-direction: row;
`;

export const TransactionCategoryText = styled.Text`
  margin-left: 15px;
  font-size: 14px;
  line-height: 21px;
  color: #969cb3;
`;

export const TransactionDateText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #969cb3;
`;
