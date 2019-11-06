function parseJson(){  
 $.getJSON("http://localhost:8080/web%20development//data/demographic_info.json",function(json) {
        var address = json.members[0].firstName;
        alert(address);
        });
}   