function result(...params) {
    let paramObj = {};
    for (let param of params) {
         console.log(`${typeof param}: ${param}`);
         if (paramObj[typeof param]) {
             paramObj[typeof param]++;
         } else {
             paramObj[typeof param] = 1;
         }
    }
    Object.keys(paramObj).sort((a, b) => paramObj[b] - paramObj[a]).forEach(x => console.log(`${x} = ${paramObj[x]}`));
}

// result(42, 'cat', 15, 'kitten', 'tomcat');