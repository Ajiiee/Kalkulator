
class Kalkulator {
    tombol(nama){
        document.getElementById('hasil').innerHTML +=nama.toString()
    }
    hitung(){
        const display = document.getElementById('hasil')
        const hasil = eval(display.innerHTML)
        display.innerHTML = hasil
    }
    ubahDesimal(){
        document.getElementById('hasil').innerHTML += '.';
    }
    hapus(){
        document.getElementById('hasil').innerHTML = ''
    }
}
const calculator = new Kalkulator()