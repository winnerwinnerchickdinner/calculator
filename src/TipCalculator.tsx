import React, { useContext, useState } from 'react'
import { Form, Input, Button, message, Alert } from 'antd';
import { Context } from './App'
import { HistoryItem } from './calculatorReducer'
interface IProps { }

const TipCalculator: React.FC<IProps> = () => {
  const { handleCalculator } = useContext(Context)

  const [lastItem, setLastItem] = useState<Omit<HistoryItem, 'id'> | null>(null)

  const onFinish = ({ amount, per }: any) => {
    console.log('Success:', { amount, per });

    if (!Number.isInteger(+amount)) {
      message.error('amount is not a number')
      return
    }
    if (!Number.isInteger(+per)) {
      message.error('per is not a number')
      return
    }

    const tip = +(+amount * +per / 100).toFixed(2);

    handleCalculator(+amount, +per, tip)

    setLastItem({ amount: +amount, per: +per, tip })
  };

  return (
    <div>
      <h1>Tip Calculator</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ amount: '', per: '' }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Amount($)"
          name="amount"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Percentage(%)"
          name="per"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Calulate
          </Button>
        </Form.Item>
      </Form>

      {lastItem && (
        <Alert message={`Amount: $${lastItem.amount}, Percentage: ${lastItem.per}%, Tip: $${lastItem.tip}`} type="info" />
      )}
    </div>
  );
}

export default TipCalculator;
