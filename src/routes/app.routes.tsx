import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import TransactionRegister from '../pages/TransactionRegister';

const Tab = createMaterialBottomTabNavigator();

const AppRoutes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Dashboard"
    activeColor="#FF872C"
    inactiveColor="#363F5F"
    barStyle={{
      backgroundColor: '#fff',
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Listagem',
        tabBarIcon: () => <Icon name="list" size={24} />,
      }}
    />
    <Tab.Screen
      name="TransactionRegister"
      component={TransactionRegister}
      options={{
        tabBarLabel: 'Cadastrar',
        tabBarIcon: () => <Icon name="dollar-sign" size={24} />,
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
