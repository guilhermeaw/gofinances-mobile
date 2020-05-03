import React, { useState, useRef, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Alert } from 'react-native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useTransaction } from '../../hooks/transaction';

import {
  Container,
  ContentWrapper,
  RegisterTitleText,
  TransactionTypeWrapper,
  IncomeButton,
  IncomeButtonText,
  OutcomeButton,
  OutcomeButtonText,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';

interface RegisterFormData {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: {
    title: string;
  };
}

const TransactionRegister: React.FC = () => {
  const { addTransaction } = useTransaction();

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleRegister = useCallback(
    async (data: RegisterFormData) => {
      const formData = {
        ...data,
        type: selectedButtonIndex === 0 ? 'income' : 'outcome',
      };

      try {
        const schema = Yup.object().shape({
          title: Yup.string().required('Nome obrigatório'),
          value: Yup.number().required('Valor obrigatório'),
          type: Yup.string().required('Tipo obrigatório'),
          category: Yup.string().required('Categoria obrigatória'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        addTransaction({
          title: formData.title,
          type: formData.type,
          value: formData.value,
          category: formData.category,
        });

        Alert.alert(
          'Transação registrada com sucesso!',
          'Sua transação foi registrada com sucesso',
        );

        formRef.current?.clearField('title');
        formRef.current?.clearField('value');
        formRef.current?.clearField('category.title');

        navigation.goBack();
      } catch (err) {
        Alert.alert(
          'Erro no registro!',
          'Ocorreu um erro no registro da sua transação, tente novamente',
        );
      }
    },
    [navigation, selectedButtonIndex, addTransaction],
  );

  return (
    <Container>
      <Header size="small" />

      <ContentWrapper>
        <RegisterTitleText>Cadastro</RegisterTitleText>

        <Form ref={formRef} onSubmit={handleRegister}>
          <Input name="title" autoCapitalize="words" placeholder="Nome" />

          <Input name="value" placeholder="Valor" keyboardType="numeric" />

          <TransactionTypeWrapper>
            <IncomeButton
              isSelected={selectedButtonIndex === 0}
              onPress={() => setSelectedButtonIndex(0)}
            >
              <Icon name="arrow-up-circle" size={20} color="#12A454" />
              <IncomeButtonText>Entrada</IncomeButtonText>
            </IncomeButton>

            <OutcomeButton
              isSelected={selectedButtonIndex === 1}
              onPress={() => setSelectedButtonIndex(1)}
            >
              <Icon name="arrow-down-circle" size={20} color="#E83F5B" />
              <OutcomeButtonText>Saída</OutcomeButtonText>
            </OutcomeButton>
          </TransactionTypeWrapper>

          <Input
            name="category.title"
            placeholder="Categoria"
            autoCapitalize="words"
          />

          <SubmitButton
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            <SubmitButtonText>Enviar</SubmitButtonText>
          </SubmitButton>
        </Form>
      </ContentWrapper>
    </Container>
  );
};

export default TransactionRegister;
