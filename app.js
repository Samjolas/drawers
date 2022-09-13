
{
  let Box = document.querySelector("#share-box");
  let icon = document.querySelector("#share-icon");

  icon.addEventListener("click", function(){
    Box.style.display === "flex" ? Box.style.display = "none" : Box.style.display = "flex";
  }
  )
}