function FunkciaTabulka() {
    console.log("Button stlaceny");
    fetch("http://localhost:1025/pocasie")
        .then(response => response.json())
        .then(data => {
            console.log("Nacitane data o pocasi:", data);
            var table = '<table class="TABLE"><tr><th>Mesto</th><th>Teplota</th><th>Vietor</th><th>Vlhkosť</th></tr>';
            data.mesto.forEach(mesto => {
                table += "<tr>";
                table += "<td>" + mesto.meno + "</td>";
                table += "<td>" + mesto.pocasie.teplota + "</td>";
                table += "<td>" + mesto.pocasie.vietor + "</td>";
                table += "<td>" + mesto.pocasie.vlhkost + "</td>";
                table += "</tr>";
            });
            table += "</table>";
            document.querySelector('#pocasieTabulka').innerHTML = table;
        })
        .catch(error => console.log("Chyba pri nacitani dat:", error));
}
