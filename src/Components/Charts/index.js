import React from 'react';
import { Line, Pie } from '@ant-design/charts';

function ChartComponents({sortedTransactions}) {
    const data = sortedTransactions.map((item) => {
        return {
            data: item.date,
            amount: item.amount
        };
    })

    const spendingData = sortedTransactions.filter(
        (transaction) => {
        if(transaction.type == 'expense'){
            return{
                tag: transaction.tag,
                amount: transaction.amount
            }
        }
    })

    let finalSpendings = spendingData.reduce((acc, obj) => {
        let key = obj.tag;
        if(!acc[key]){
            acc[key] = {
                tag: obj.tag,
                amount: obj.amount
            };
        } else{
            acc[key].amount += obj.amount;
        }
        return acc;
    }, {});

    const config = {
        data: data,
        width:100,
        xField: 'data',
        yField: 'amount',
    };

    const spendingConfig = {
        data: Object.values(finalSpendings),
        width: 100,
        angleField: 'amount',
        colorField: 'tag',
    };

  return (
    <div className='charts-wrapper'>
        <div>
            <h2 style={{marginTop: 0}}>Your Analytics</h2>
            <Line {...config}/>
        </div>
        <div>
            <h2>Your Spending</h2>
            <Pie {...spendingConfig} />
        </div>
    </div>
  )
}

export default ChartComponents