//Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

const array =[25,79,74,66,53,82,76,87,77,37,37,74,86,10,94,60,33,97,62,79]

console.log("Odd Numbers")
for(var i=0; i<array.length; i++){
    if(array[i] % 2 != 0){
        console.log(array[i])
    }
}

console.log("Even Numbers")
for(i=0; i<array.length; i++){
    if(array[i]%2==0){
        console.log(array[i])
    }
}