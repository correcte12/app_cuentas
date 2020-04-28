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
    return incomes.sort( compareFn: function(a,b){
        return new Date(a.date) - new Date(b.data);
    }
    )   
}