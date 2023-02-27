//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['India','USA','Germany']
const country = countries.includes('Ethiopia') // true

let a = "Ethiopia"
if(country == true){
    
    console.log(a.toLocaleUpperCase())
}else{
    console.log(countries.push(a))
    console.log(countries)
}

