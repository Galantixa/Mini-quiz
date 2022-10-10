// pada saat bermain memasukan nama dan peran
// untuk memulai bermain player harus memasukan variable nama dan peran
// jika tidak memasukan nama dan peran akan keluar warning "nama dan peran wajib diisi!!!"
// jika player memilih nama dan tidak memilih peran maka akan ada warning "silakan pilih peranmu!!!"
// terdapat 3 pemeran yaitu (witch, guardian, dan warewolf)

//todo membuat program untuk mengecek input dari pemain dan hasil respon dari game sesuai input yang dikirimkan


// menangkap pilihan player
let pickName = "";
while (pickName == null || pickName == "") {
    pickName = window.prompt("Maukan nama!!!");
}

let pickRole =""
while(pickRole == null|| pickRole == ""){
    pickRole=window.prompt("Masukan peranmu\n penyihir, guard, warewolf");
}
switch(pickRole){
    case "penyihir":
        alert(`${pickName} kamu berperan sebagai Penyihir`);
        break;
    case "guard":
        alert(`${pickName} kamu berperan sebagai Guard`);
        break;
    case "warewolf"|| "Warewolf":
        alert(`${pickName} kamu berperan sebagai Warewolf`);
        break;
    default:
        alert("Masukan peran!!!");
        break;
}
   