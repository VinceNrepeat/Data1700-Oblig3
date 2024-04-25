<!-- Function for å fylle ut billettliste arrayet -->
function kjøpBillett(film, antall, fornavn, etternavn, telefonnr, epost) {
    const nybestilling = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    }
    $.post("/lagre",nybestilling, function (){
        getList()
        $("#infoBillett")[0].reset();
    })
}

function getList() {
    $.get("/hentAlle", function (data){
        formatList(data)
    })

}


<!-- Function for å vise lista, aktiveres når listen oppdateres eller skal slettes -->

function formatList(data) {
    let ut = "<table class='table table-striped'><thtr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "<tr>";

    for (const bestilling of data){
        ut+="<tr>";
        ut+="<td>"+bestilling.film+"</td><td>"+bestilling.antall+"</td><td>"+bestilling.fornavn+"</td>";
        ut+="<td>"+bestilling.etternavn+"</td><td>"+bestilling.telefonnr+"</td><td>"+bestilling.epost+"</td>";
        ut+="<td><button class='btn btn-primary' onclick='endreBestilling("+bestilling.id+")'>Endre</button></td>"
        ut+="<td> <button class='btn btn-danger' onclick='slettEnBestilling("+bestilling.id+")'>Slett</button></td>"
        ut+="</tr>";
    }
    ut+="</table>";
    $("#billettListe").html(ut);
}

<!-- Function for å slette alle registrerte billetter  -->

function deleteBillett() {
    $.get( "/slettAlle", function() {
        getList();
    });
}

function slettEnBestilling(id) {
    const url = "/slettEnBestilling?id=" + id;
    $.get(url, function () {
        window.location.href = "/index.html";
    })
}

    function endreBestilling(id){
        window.location.href = "/endreBestilling.html?"+id;
    }
