let string="";
let buttons=document.getElementsByTagName("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            try{
            document.body.querySelector("#search").value=eval(string)
            string=eval(string).toString()}
            catch(err){
                document.body.querySelector("#search").value="Error"
                string=""
            }
        }
        else if(e.target.innerHTML=="AC"){
            string=""
            document.body.querySelector("#search").value=string
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.slice(0,-1)
            document.body.querySelector("#search").value=string
        }
        else{
        string+=e.target.innerHTML
        document.body.querySelector("#search").value=string
       
    }
    

    })

})