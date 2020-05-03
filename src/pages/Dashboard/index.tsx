import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import { useTransaction } from '../../hooks/transaction';

import {
  Container,
  ContentWrapper,
  TransactionPanelList,
  TransactionPanel,
  PanelTitleWrapper,
  PanelTypeText,
  PanelValueWrapper,
  PanelValueText,
  PanelLastTransactionDateText,
  TransactionListText,
  TransactionsList,
  TransactionBox,
  TransactionBoxHeader,
  TransactionTitle,
  TransactionValueText,
  TransactionBoxFooter,
  TransactionCategoryWrapper,
  TransactionCategoryText,
  TransactionDateText,
} from './styles';
import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

const Dashboard: React.FC = () => {
  const { transactions } = useTransaction();

  const incomeBalance = useMemo(() => {
    const value = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(
        (accumulator, transaction) => accumulator + Number(transaction.value),
        0,
      );

    return value;
  }, [transactions]);

  const outcomeBalance = useMemo(() => {
    const value = transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce(
        (accumulator, transaction) => accumulator + Number(transaction.value),
        0,
      );

    return value;
  }, [transactions]);

  const totalBalance = useMemo(() => {
    const totalValue = incomeBalance - outcomeBalance;

    return totalValue;
  }, [incomeBalance, outcomeBalance]);

  return (
    <Container>
      <Header />

      <View>
        <TransactionPanelList horizontal showsHorizontalScrollIndicator={false}>
          <TransactionPanel style={{ marginLeft: 25 }}>
            <PanelTitleWrapper>
              <PanelTypeText>Entradas</PanelTypeText>
              <Icon name="arrow-up-circle" size={35} color="#12A454" />
            </PanelTitleWrapper>

            <PanelValueWrapper>
              <PanelValueText>{formatValue(incomeBalance)}</PanelValueText>
              <PanelLastTransactionDateText>
                Última entrada dia 13 de abril
              </PanelLastTransactionDateText>
            </PanelValueWrapper>
          </TransactionPanel>

          <TransactionPanel>
            <PanelTitleWrapper>
              <PanelTypeText>Saídas</PanelTypeText>
              <Icon name="arrow-down-circle" size={35} color="#E83F5B" />
            </PanelTitleWrapper>

            <PanelValueWrapper>
              <PanelValueText>{formatValue(outcomeBalance)}</PanelValueText>
              <PanelLastTransactionDateText>
                Última entrada dia 13 de abril
              </PanelLastTransactionDateText>
            </PanelValueWrapper>
          </TransactionPanel>

          <TransactionPanel type="total">
            <PanelTitleWrapper>
              <PanelTypeText type="total">Total</PanelTypeText>
              <Icon name="dollar-sign" size={35} color="#fff" />
            </PanelTitleWrapper>

            <PanelValueWrapper>
              <PanelValueText type="total">
                {formatValue(totalBalance)}
              </PanelValueText>
              <PanelLastTransactionDateText type="total">
                Última entrada dia 13 de abril
              </PanelLastTransactionDateText>
            </PanelValueWrapper>
          </TransactionPanel>
        </TransactionPanelList>
      </View>

      <ContentWrapper>
        <TransactionListText>Listagem</TransactionListText>

        <TransactionsList
          data={transactions}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 400,
          }}
          renderItem={({ item }) => (
            <TransactionBox>
              <TransactionBoxHeader>
                <TransactionTitle>{item.title}</TransactionTitle>
                <TransactionValueText type={item.type}>
                  {item.type === 'outcome'
                    ? formatValue(item.value * -1)
                    : formatValue(item.value)}
                </TransactionValueText>
              </TransactionBoxHeader>

              <TransactionBoxFooter>
                <TransactionCategoryWrapper>
                  <Icon name="dollar-sign" size={20} color="#969CB3" />
                  <TransactionCategoryText>
                    {item.category.title}
                  </TransactionCategoryText>
                </TransactionCategoryWrapper>

                <TransactionDateText>
                  {item.created_at &&
                    new Date(item.created_at).toLocaleDateString()}
                </TransactionDateText>
              </TransactionBoxFooter>
            </TransactionBox>
          )}
        />
      </ContentWrapper>
    </Container>
  );
};

export default Dashboard;
