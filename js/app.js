const bill = document.getElementById('inp-bill');

bill.addEventListener('input', setBillValue);

let billValue = 0.0; //default value

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }
    if(!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length-1);
    }
    // lines 16-18 make it so that user cannot put letters in. it automatically
    // deletes the letters before they are able to even show up in the box. pretty cool


    // lines 21-25 are an example of validating if the input value under the 
    // bill is a valid number and not any letters. not being used but useful to know
    // Above here is the actual code we will use which deletes any invalid characters
    // automatically
    // if(validateFloat(bill.value)) {
    //     console.log('valid');          
    // } else {
    //     console.log('invalid');
    // }

    billValue = parseFloat(bill.value);
    console.log(billValue);
}

console.log(bill.value);