var penumpang = []
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0){ // Jika angkot kosong
       penumpang.push(namaPenumpang); // tambah penumpang diawal array
       return penumpang; // kembalikan isi array & keluar dari function
    } else {
        for (i = 0; i < penumpang.length; i++){ // telusuri seluruh kursi dari awal

        if(penumpang[i] == undefined){ // jika ada kursi kosong
        penumpang[i] = namaPenumpang; // tambah penumpang di kursi tersebut
        return penumpang; // kembalikan isi array & keluar dari function

        }else if(namaPenumpang == penumpang[i]){ // jika sudah ada nama yang sama
        console.log(namaPenumpang + " Sudah di dalam angkot!"); // tampillkan pesan 
        return; // kembalikan isi array & keluar dari function

        }else if(i == penumpang.length - 1){ // jika seluruh kursi terisi
        penumpang.push(namaPenumpang); // tambah penumpang diakhir array
        return penumpang; // kembalikan isi array & keluar dari function
        }
      }
    }
} 