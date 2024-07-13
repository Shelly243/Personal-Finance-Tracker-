import React, { useState } from 'react';
import { Table, Select, Radio } from "antd";
import searchImg from '../../assets/search.svg';

function TransactionsTable({ transactions }) {

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [sortKey, setSortKey] = useState('');
  const { Option } = Select;

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  let filteredTransactions = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) && item.type.includes(typeFilter)
  );

  let sortedTransactions = filteredTransactions.sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortKey === "amount") {
      return a.amount - b.amount;
    } else {
      return 0;
    }
  });

  return (
    <div
      style={{
        width: "100%",
        padding: "0rem 2rem",
      }}
    >
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "1rem",
            }}
        >
            <div className="input-flex">
            <img src={searchImg} width="16" />
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search By Name'
            />
            </div>
            
            <Select
                className="select-input"
                onChange={(value) => setTypeFilter(value)}
                value={typeFilter}
                placeholder="Filter"
                allowClear
            >
                <Option value="">All</Option>
                <Option value="income">Income</Option>
                <Option value="expense">Expense</Option>
            </Select>
        </div>
        <div>
            <div className="my-table">
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "1rem",
                }}
                >
                    <h2>My Transactions</h2>

                    <Radio.Group
                        className="input-radio"
                        onChange={(e) => setSortKey(e.target.value)}
                        value={sortKey}
                    >
                        <Radio.Button value="">No Sort</Radio.Button>
                        <Radio.Button value="date">Sort by Date</Radio.Button>
                        <Radio.Button value="amount">Sort by Amount</Radio.Button>
                    </Radio.Group>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        width: "400px",
                        }}
                    >
                        <button className="btn">
                        Export to CSV
                        </button>
                        <label for="file-csv" className="btn btn-blue">
                        Import from CSV
                        </label>
                        <input
                        
                        id="file-csv"
                        type="file"
                        accept=".csv"
                        required
                        style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div>
            
            <Table dataSource={sortedTransactions} columns={columns} />
        </div>
    </div>
  );
}

export default TransactionsTable;
