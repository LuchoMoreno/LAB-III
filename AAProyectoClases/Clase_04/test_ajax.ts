function Test(): void
{
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "BACKEND/test.php", true);

  xhttp.send();

  xhttp.onreadystatechange = () =>
    {
      console.log(xhttp.readyState);
      if (xhttp.readyState == 4 && xhttp.status == 200)
        {
          alert(xhttp.responseText);
        }
      }
}


window.onload = function()
{
  Test();
}



function EnviarParametro(): void
{
  var recuperado : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;

  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "BACKEND/test_params.php?txtNombre="+recuperado, true);

  xhttp.send();

  xhttp.onreadystatechange = () =>
    {
      console.log(xhttp.readyState);
      if (xhttp.readyState == 4 && xhttp.status == 200)
        {
          alert(xhttp.responseText);
        }
      } 



}