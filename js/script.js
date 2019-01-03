
function show_hide()
{
    if(document.getElementById("icons").style.visibility == "hidden")
        {
            document.getElementById("icons").style.visibility = "visible";
            document.getElementById("button2").textContent = "VIEW LESS";
        }
    else
        {
            document.getElementById("icons").style.visibility = "hidden";
            document.getElementById("button2").textContent = "VIEW MORE";
        }
}