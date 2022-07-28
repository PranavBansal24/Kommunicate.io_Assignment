// Function to reverse a number

function reverseNumber(num){
    let reverseNum=0;

    while(num !=0){
        reverseNum=(reverseNum * 10) + (num % 10);
        num=parseInt(num/10);
    }
    console.log(reverseNum)
}

reverseNumber(149)