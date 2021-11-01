window.onload = function() //As soon as you start the window
{
    var button = document.querySelectorAll("button")[0];
    var httprequest;
    
    button.addEventListener("click",function(event) //When subscribe is clickec
    {
        
        httprequest = new XMLHttpRequest();
        var url = "https://localhost/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php";

        httprequest.open('GET', url);
        httprequest.send();
    }
    );   
}