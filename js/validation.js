const inputs=document.querySelectorAll("input");

for(let i=0;i<inputs.length;i++)
{

  inputs[i].addEventListener("focus",function(){
    if(this.placeholder=="Email Address" && this.classList.contains("error_input"))
      this.value="";
    this.classList.remove("error_input");
    this.nextElementSibling.innerHTML="";
    this.nextElementSibling.style.display="none";
    this.style.setProperty("--color_placeholder","hsla(249, 10%, 26%,.8)");
  });

  inputs[i].addEventListener("invalid",function(e){
      e.preventDefault();
      this.classList.add("error_input");
      if(this.value=="")
      {
        this.nextElementSibling.innerHTML= this.placeholder+" can not be empty";
        this.nextElementSibling.style.display="block";
        this.style.setProperty("--color_placeholder","transparent");
      }
      else{
        if(this.placeholder=="Email Address")
        {
         this.value="email@example/com";
         this.nextElementSibling.innerHTML=" Looks like this is not an email";
        }
      }  
  });

}