import React, { useContext } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Context } from './App'
import './History.css'

interface IProps { }

const History: React.FC<IProps> = () => {
  const context = useContext(Context)
  const { historyList, deleteHistory } = context;

  return (
    <div className='history'>
      <h1>History</h1>
      {
        historyList.map(({ id, amount, per, tip }) => {
          return (
            <li key={id}>
              <span>Amount: ${amount}, Percentage: {per}%, Tip: ${tip}</span>
              <div className="icon" onClick={() => deleteHistory(id)}><DeleteOutlined /></div>
            </li>
          )
        })
      }
    </div>
  );
}

export default History;
