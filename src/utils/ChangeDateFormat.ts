export function ChangeDateFormat(date: any){
    let days = date.getDate();
    let year = date.getFullYear();
    let month = (date.getMonth()+1);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    //let strTime = days + '/' + month + '/' + year + '/ '+hours + ':' + minutes;
    let strTime = year + '-' + month + '-' + days + ' '+hours + ':' + minutes;
    return strTime;
  }