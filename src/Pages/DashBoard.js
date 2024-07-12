import React, { useState } from 'react'

import Header from '../Components/Header'
import Cards from '../Components/Cards'
import AddExpenseModal from '../Components/Modals/AddExpense';
import AddIncomeModal from '../Components/Modals/AddIncome'
function DashBoard() {
  const [isExpenseModalVisible, setIsExpenseModalVisible] = useState(false);
  const [isIncomeModalVisible, setIsIncomeModalVisible] = useState(false);
  const showExpenseModal = () => {
    setIsExpenseModalVisible(true);
  };

  const showIncomeModal = () => {
    setIsIncomeModalVisible(true);
  };

  const handleExpenseCancel = () => {
    setIsExpenseModalVisible(false);
  };

  const handleIncomeCancel = () => {
    setIsIncomeModalVisible(false);
  };

  const onFinish = (values, type) => {
    console.log('onFinish',values, type)
  }

  return (
    <div>
      <Header />
      <Cards 
        showExpenseModal = {showExpenseModal}
        showIncomeModal = {showIncomeModal}
      />
      <AddExpenseModal
        isExpenseModalVisible={isExpenseModalVisible}
        handleExpenseCancel={handleExpenseCancel}
        onFinish={onFinish}
      />
      <AddIncomeModal
        isIncomeModalVisible={isIncomeModalVisible}
        handleIncomeCancel={handleIncomeCancel}
        onFinish={onFinish}
      />
    </div>
  )
}

export default DashBoard