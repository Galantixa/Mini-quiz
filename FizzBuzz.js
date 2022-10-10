/*
*   Cetak angka 1 - 15
*   Angka kelipatan 3 cetak "Fizz"
*   Angka kelipatan 5 cetak "Buzz"
*   Angka kelipatan 3 dan 5 cetak "FizzBuzz"
*   Hasil output yang diharapkan 1,2,fizz(3),4,buzz(5),fizz(6),7,8,fizz(9),buzz(10),11,fizz(12),13,14,fizzbuzz(15)
*/


    let cetakAngka = function(niliAwal, nilaiAkhir) {
    
        for(var i = niliAwal; i <= nilaiAkhir; i++) {
            
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            
            }else if(i % 3 == 0) {
                console.log("Fizz");
            
            }else if(i % 5 == 0) {
                console.log("Buzz");
            }else {
                console.log(`Angka ke ${i}`);
            }
        }
    }

cetakAngka(1, 15);