function hitungBMI() {
    var height = document.getElementById("bmiheight").value;
    var weight = document.getElementById("bmiweight").value;

    var result = (weight / (height * height) * 10000).toFixed(2);
    var result2 = (weight / (height * height) * 10000).toFixed(1);
    
    if(!isNaN(result)){
        document.getElementById("hasil-bmi").innerHTML = result;
        document.getElementById("hasil-6").innerHTML = result2;
        if(result < 18.5){
            document.getElementById("hasil-kualitas").innerHTML = "Berat Badan Kurang";
            document.getElementById("hasil-keterangan").innerHTML = "Anda kekurangan berat badan";
            document.getElementById("hasil-1").innerHTML = "Berat rendah dapat menyebabkan berbagai masalah penyakit";
            document.getElementById("hasil-2").innerHTML = "Infertilitas";
            document.getElementById("hasil-3").innerHTML = "Anemia";
            document.getElementById("hasil-4").innerHTML = "Osteoporosis";
            document.getElementById("hasil-5").innerHTML = "Sistem Imun Lemah";
            document.getElementById("hasil-7").innerHTML = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
        }
        else if(result < 24.9){
            document.getElementById("hasil-kualitas").innerHTML = "Normal";
            document.getElementById("hasil-keterangan").innerHTML = "Anda memiliki berat badan ideal, Good job!!";
            document.getElementById("hasil-1").innerHTML = "Berat Badan Normal";
            document.getElementById("hasil-2").innerHTML = "Tetap pertahankan berat badan Anda";
            document.getElementById("hasil-3").innerHTML = "Jaga berat badan Anda dengan mengatur keseimbangan antara pola makan";
            document.getElementById("hasil-4").innerHTML = "Jaga berat badan Anda dengan mengatur keseimbangan aktivitas fisik Anda";
            document.getElementById("hasil-5").innerHTML = "Good Job!!";
            document.getElementById("hasil-7").innerHTML = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
        }
        else if(result < 29.9){
            document.getElementById("hasil-kualitas").innerHTML = "Berat badan Berlebih";
            document.getElementById("hasil-keterangan").innerHTML = "Anda memiliki berat badan berlebih";
            document.getElementById("hasil-1").innerHTML = "Beberapa penyakit yang berasal dari kegemukan";
            document.getElementById("hasil-2").innerHTML = "Diabetes";
            document.getElementById("hasil-3").innerHTML = "Hipertensi";
            document.getElementById("hasil-4").innerHTML = "Sakit Jantung";
            document.getElementById("hasil-5").innerHTML = "Osteoarthritis";
            document.getElementById("hasil-7").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        }
        else{
            document.getElementById("hasil-kualitas").innerHTML = "Obesitas";
            document.getElementById("hasil-keterangan").innerHTML = "Anda berada dalam kategori obesitas";
            document.getElementById("hasil-1").innerHTML = "Beberapa penyakit yang berasal dari kegemukan";
            document.getElementById("hasil-2").innerHTML = "Diabetes";
            document.getElementById("hasil-3").innerHTML = "Hipertensi";
            document.getElementById("hasil-4").innerHTML = "Sakit Jantung";
            document.getElementById("hasil-5").innerHTML = "Osteoarthritis";
            document.getElementById("hasil-7").innerHTML = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
        }
    }
    var bmiName = document.getElementById("bminame").value;

    document.getElementById("bminame-result").innerHTML = bmiName;
}


function resetBMI() {
    document.getElementById("form").reset();
}