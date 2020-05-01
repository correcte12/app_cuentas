import {groupByDate} from "../../utils/helper";

export function totalIncomes (state) {
    return state.incomes.reduce((a, b) => {
        return a+b['amount'];
    }, 0);
}

export function forList (state) {
    if(state.filters.date) {
      incomes = incomes.filter(i => {
        const [year, month] = i.date.split("/");
        const date = `${month}/${year}`;
        return state.filters.date === date;
        })
    }
    return incomes.sort( function(a,b){
        return new Date(a.date) - new Date(b.data);
    });   
}
export function find (state) {
    return function (id) {
      return state.incomes.filter(i => i.id === id)[0];
    }
  }
  
  export function groupedByDate (state) {
    return groupByDate(state.incomes);
  }