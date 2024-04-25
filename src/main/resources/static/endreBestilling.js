$(document).ready(function(){
    const id = window.location.search.substring(1);
    const url = "/hentEnBestilling?id="+id;
    $.get(url,function(bestilling){
        $("#id").val(bestilling.id);
        $("#velgFilm").val(bestilling.velgFilm);
        $("#antall").val(bestilling.antall);
        $("#fornavn").val(bestilling.fornavn);
        $("#etternavn").val(bestilling.etternavn);
        $("#telefonnr").val(bestilling.telefonnr);
        $("#epost").val(bestilling.epost);
    })
})

function endreBestilling2() {
    const bestilling = {
        id: $("#id").val(),
        film: $("#velgFilm").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val(),
    }

    if(sjekkFeilEndring()){
        $.post("/endreBestilling", bestilling, function () {
            window.location.href = "/index.html";
        });
    }
    else{
        return false;
    }

}