
    function app(){
    const url = document.getElementById("exampleFormControlInput1").value;
    const count = url.length;

    if(!url || count < 22){
        alert("Please enter valid url");
        return;
    }

    const shorturl2 = 'https://short.ly/' + btoa(url).substring(0, 8);

    document.getElementById("shorturl").innerHTML = `Short URL : <a href = "${url}" target ="_blank" style= "color:#55AD9B; text-decoration:none; "> ${shorturl2}</a>`;

  };

