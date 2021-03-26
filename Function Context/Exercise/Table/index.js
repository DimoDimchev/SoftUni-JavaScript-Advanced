function solve(){
    let tableRows = document.getElementsByTagName('tr');
    let rowsArray = Array.from(tableRows);

    rowsArray.forEach((element) => {
        if (rowsArray.indexOf(element) !== 0) {
            element.addEventListener('click', () =>{
               if (element.hasAttribute('style')) {
                   rowsArray.forEach((element) => {
                       element.removeAttribute('style');
                   })
               } else {
                   rowsArray.forEach((element) => {
                       element.removeAttribute('style');
                   })
                   element.style.backgroundColor = "#413f5e";
               }
            });
        }
    })
}
