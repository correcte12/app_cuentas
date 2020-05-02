export function groupByDate (data) {
    let dates = [];
    data.forEach(e => {
        const [year, month] = e.date.split("/");
        const date = `${month}/${year}`;
        if ( !dates.includes(date)) {
            dates.push(date);
        }        
    });
    return dates;
}