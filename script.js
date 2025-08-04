function cekJawaban() {
    let skor = 0;

    let jawaban1 = document.getElementById ("jawaban1").value;
    if (jawaban1.toLowerCase() === "Mark") {
        skor++;
    }

    let jawaban2 = document.getElementById ("jawaban2").value;
    if (jawaban2.toLowerCase() === "7") {
        skor++;
    }

    let jawaban3 = document.getElementById ("jawaban3").value;
    if (jawaban3.toLowerCase() === "Jisung") {
        skor++;
    }

    let jawaban4 = document.getElementById ("jawaban4").value;
    if (jawaban4.toLowerCase() === "25 Agustus 2016") {
        skor++;
    }

    let jawaban5 = document.getElementById ("jawaban5").value;
    if (jawaban5.toLowerCase() === "23 April 2000") {
        skor++;
    }

    let jawaban6 = document.getElementById ("jawaban6").value;
    if (jawaban6.toLowerCase() === "Main Vocalist, Main Dancer") {
        skor++;
    }

    let jawaban7 = document.getElementById ("jawaban7").value;
    if (jawaban7.toLowerCase() === "SM") {
        skor++;
    }

    let jawaban8 = document.getElementById ("jawaban8").value;
    if (jawaban8.toLowerCase() === "Mark") {
        skor++;
    }

    let jawaban9 = document.getElementById ("jawaban9").value;
    if (jawaban9.toLowerCase() === "China") {
        skor++;
    }

    let jawaban10 = document.getElementById ("jawaban10").value;
    if (jawaban10.toLowerCase() === "NCTzen") {
        skor++;
    }

    document.getElementById("score").innerText = "Your score: " + skor + "/10";
}
