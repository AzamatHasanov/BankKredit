function krediMounth() {
    let Qaytaracaq, AyliqDerecesi;
    let AyliqFaiz, oDenilecekToplam;

    Qaytaracaq = document.querySelector("#krediMin").value;

    let ay = document.querySelector("#mounthList");
    AyliqDerecesi = ay.options[ay.selectedIndex].value;

    if (AyliqDerecesi == 12) {
        AyliqFaiz = Qaytaracaq * 1.2;
    } else if (AyliqDerecesi == 24) {
        AyliqFaiz = Qaytaracaq * 1.3;
    } else if (AyliqDerecesi == 36) {
        AyliqFaiz = Qaytaracaq * 1.4;
    } else {
        AyliqFaiz = Qaytaracaq * 1.5;
    }

    document.querySelector("#toplmaDeyer").innerHTML =
        "Kredit Muddeti: " +
        AyliqDerecesi +
        "AY" +
        "<br>" +
        "Qaytaracaqiniz Miqdar : " +
        AyliqFaiz.toFixed(2);
    // toFixed Sonsuz dovrlu reqem yaratmaqdan qcinmaqucundur....s
}