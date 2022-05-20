import { useState, createContext, useReducer } from 'react'
import { initialState, calculatorReducer, HistoryItem } from './calculatorReducer'
import TipCalculator from './TipCalculator'
import History from './History'
import './App.css'

interface InitialContext {
  historyList: HistoryItem[],
  deleteHistory: (id: number) => void,
  handleCalculator: (amount: number, per: number, tip: number) => void,
}

const initialContext: InitialContext = {
  historyList: [],
  deleteHistory: () => { },
  handleCalculator: () => { }
}

export const Context = createContext(initialContext);

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)
  const deleteHistory = (id: number) => dispatch({ type: 'DELETE_HISTORY', id })
  const handleCalculator = (amount: number, per: number, tip: number) => dispatch({ type: 'CALC', amount, per, tip })
  console.log('historyList', state.historyList)
  return (
    <Context.Provider value={{
      historyList: state.historyList,
      deleteHistory,
      handleCalculator,
    }}>
      <div className="App">
        <TipCalculator />
        {state.historyList.length > 0 && <History />}
      </div>
    </Context.Provider>
  )
}

export default App
