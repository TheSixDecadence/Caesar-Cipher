//Shift, and the input of the console log are the ones that can be changed
//The input of the function is the string that you want to encrypt or decrypt
//The shift is the number of positions that you want to shift the alphabet
//The console log will print the encrypted or decrypted string

function ceaser_encrypt(input) {
    abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

    var shift = 4; //you can change this value according to the shift you want

    for (var i = 0; i < input.length; i++) {
        
        //This condition will check if the character is a space
        if(input[i] == " "){
            continue; //If it is a space, it will continue with the next iteration
        }

        //This will get the index of the character in the alphabet array
        var index = abc.indexOf(input[i]);

        //This will get the new index of the character after the shift
        var newIndex = (index + shift) % abc.length;

        //This will replace the character with the new character
        input = input.substring(0, i) + abc[newIndex] + input.substring(i + 1);
    }

    console.log(input);
}

function ceaser_decrypt(input) {
    abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

    var shift = 4;

    for (var i = 0; i < input.length; i++) {
        
        if(input[i] == " "){
            continue;
        }

        var index = abc.indexOf(input[i]);
        var newIndex = (index - shift) % abc.length; //the difference between the encrypt and decrypt is the subtraction at the index/shift

        input = input.substring(0, i) + abc[newIndex] + input.substring(i + 1); 
    }

    console.log(input);
}

ceaser_encrypt("a b")

ceaser_decrypt("e f")

