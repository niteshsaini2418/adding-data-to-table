var addbutton = document.getElementById("add-button");
addbutton.addEventListener('click', addValue);
function addValue()
{
    
    var name = document.getElementById("name").nodeValue;
    var data1 = document.createElement("td");
    var textnode1 = document.createTextNode(name);
    data1.appendChild(textnode1);

    var row = document.createElement("tr");
    row.appendChild(data1);
    
    var email = document.getElementById("email").nodeValue;
    var data2 = document.createElement("td");
    var textnode2 = document.createTextNode(email);
    data2.appendChild(textnode2);
    row.appendChild(data2);


    var number = document.getElementById("number").nodeValue;
    var data3 = document.createElement("td");
    var textnode3 = document.createTextNode(number);
    data3.appendChild(textnode3);
    row.appendChild(data3);


    var address = document.getElementById("address").nodeValue;
    var data4 = document.createElement("td");
    var textnode4 = document.createTextNode(address);
    data4.appendChild(textnode4);
    row.appendChild(data4);

    document.getElementById("display-table").appendChild(row);


}