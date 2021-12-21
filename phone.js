var url="https://api-mobilespecs.azharimm.site/v2/brands";
document.body.innerHTML=`
<div class="header"><h1>Brands</h1></div>
<div class="result"></div>`;

//Display all the necessary details of phone
function displayResult(){
    let result=document.querySelector('.result');
    result.innerHTML="";
    fetch(url)
    .then(data=>data.json())
    .then(res=>{        
        res.data.forEach(element => {
            result.innerHTML+=`
            <div class="container">
            Brand Id:${element.brand_id}<br>
            Brand Name:${element.brand_name}<br>
            Device Count:${element.device_count}<br>
            </div>`;
        });
    })
    .catch(err=>{
        result.innerHTML+=`
        <div class="catch">
        There is some problem like ${err}
        </div>`;
    })
}
displayResult();
