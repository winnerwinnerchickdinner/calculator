let id = 0;

export type HistoryItem = {
  id: number,
  amount: number,
  per: number,
  tip: number,
}

interface IState {
  historyList: HistoryItem[],
  amountInputVal: string,
  perInputVal: string,
}

export const initialState: IState = {
  historyList: [],
  amountInputVal: '',
  perInputVal: ''
};

type Action =
  | { type: 'CALC', amount: number, per: number, tip: number }
  | { type: 'DELETE_HISTORY', id: number }

export const calculatorReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'CALC':
      return {
        ...state,
        historyList: [...state.historyList, {
          id: id++,
          amount: action.amount,
          per: action.per,
          tip: action.tip,
        }]
      };
    case 'DELETE_HISTORY':
      return {
        ...state,
        historyList: state.historyList.filter(v => v.id !== action.id)
      };
    default:
      return state;
  }
};