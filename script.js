function createCalendar(elem, year, month) {
    const array = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
    let table = document.createElement("table")
    let date = new Date(year, month, 0)
    let dayOfWeek = new Date(year,month-1).getDay() === 0 ? 6 : new Date(year,month-1).getDay()-1
    let numberRows = date.getDate() > 28 ? 6 : 5 
    let valueday=0
    for (let i = 0; i < numberRows; i++) {
        let tr = document.createElement("tr")
        if (i === 0) {
                for(let j = 0; j < 7; j++){
                    let th = document.createElement("th")
                    th.textContent = array[j]
                    tr.append(th)
                }
        }else if(i === 1){
            for(let j = 0; j < 7; j++){
                let td = document.createElement("td")
                if(j>=dayOfWeek){
                    valueday++
                    td.textContent = valueday
                }
                tr.append(td)
            }
        }else{
            for(let j = 0; j < 7; j++){
                let td = document.createElement("td")
                if(valueday<date.getDate()){
                    valueday++
                    td.textContent = valueday
                }
                tr.append(td)
            }
        }
        table.append(tr)
    }

    elem.append(table)
}

createCalendar(calendar, 2012, 10);