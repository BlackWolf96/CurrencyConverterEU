const getDataFromXML = () => {
    const req = new XMLHttpRequest();
    req.open("GET", "https://www.nbp.pl/kursy/xml/a044z220304.xml", false);
    req.send();
    var res = req.responseXML;
}
const cce = async () => {
    const xmlData = await getDataFromXML();
}
window.addEventListener('load', cce);