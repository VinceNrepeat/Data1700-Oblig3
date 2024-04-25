function validerFilm(film){
    if (!film) {
        $("#filmFeil").html(" Velg en film ");
        return false;
    }
    else {
        $("#filmFeil").html("");
        return true;
    }
}

function validerAntall(antall){
    if (isNaN(parseInt(antall)) || parseInt(antall) <= 0) {
        $("#antallFeil").html(" Skriv inn gyldig antall ");
        return false;
    }
    else {
        $("#antallFeil").html("");
        return true;
    }
}

function validerFornavn(navn){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(navn);

    if (!ok) {
        $("#fornavnFeil").html("<td class='feil-melding'> Vennligst fyll inn feltet ordentlig </td>");
        return false;
    }
    else {
        $("#fornavnFeil").html("");
        return true;
    }
}

function validerEtternavn(navn){
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}$/;
    const ok = regexp.test(navn);

    if (!ok) {
        $("#etternavnFeil").html("<td class='feil-melding'> Vennligst fyll inn feltet ordentlig </td>");
        return false;
    }
    else {
        $("#etternavnFeil").html("");
        return true;
    }
}

function validerTelefonnr(telefonnr){
    const telefonnrRegex = /^[0-9]{8}$/;
    const ok = telefonnrRegex.test(telefonnr);

    if (!ok) {
        $("#telefonnrFeil").html("<td class='feil-melding'> Skriv inn gyldig telefonnummer </td>");
        return false;
    }
    else {
        $("#telefonnrFeil").html("");
        return true;
    }
}

function validerEpost(epost){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const ok = emailRegex.test(epost);

    if (!ok) {
        $("#epostFeil").html("<td class='feil-melding'> Skriv inn gyldig epost </td>");
        return false;
    }
    else {
        $("#epostFeil").html("");
        return true;
    }
}

function sjekkFeilEndring(){
    var film = $("#velgFilm").val();
    var antall = $("#antall").val();
    var fornavn = $("#fornavn").val();
    var etternavn = $("#etternavn").val();
    var telefonnr = $("#telefonnr").val();
    var epost = $("#epost").val();

    var filmValid = validerFilm(film);
    var antallValid = validerAntall(antall);
    var fornavnValid = validerFornavn(fornavn);
    var etternavnValid = validerEtternavn(etternavn);
    var telefonnrValid = validerTelefonnr(telefonnr);
    var epostValid = validerEpost(epost);

    return !(!filmValid || !antallValid || !fornavnValid || !etternavnValid || !telefonnrValid || !epostValid);
}

function sjekkFeil(){
    var film = $("#velgFilm").val();
    var antall = $("#antall").val();
    var fornavn = $("#fornavn").val();
    var etternavn = $("#etternavn").val();
    var telefonnr = $("#telefonnr").val();
    var epost = $("#epost").val();

    var filmValid = validerFilm(film);
    var antallValid = validerAntall(antall);
    var fornavnValid = validerFornavn(fornavn);
    var etternavnValid = validerEtternavn(etternavn);
    var telefonnrValid = validerTelefonnr(telefonnr);
    var epostValid = validerEpost(epost);

    if (!filmValid || !antallValid || !fornavnValid || !etternavnValid || !telefonnrValid || !epostValid) {
        return false;
    }
    else {
        kjøpBillett(film, antall, fornavn, etternavn, telefonnr, epost);
        return true;
    }
}