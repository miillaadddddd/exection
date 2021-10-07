document.addEventListener('DOMContentLoaded',async()=>{
    const linksList=document.getElementById('linksList');
    const url='https://nakhll.com/api/v1/landing/most-discount-prec-products/';

    try{
        const res=await fetch(url)
        const data = await res.json();
        const all= data.map((e)=>(`
        <div class="contetnt">
        
        <h4>${e.title}</h4>
        <h5>${e.price}</h5>
        
        </div>
        
        
        
        `)).join('')

        linksList.innerHTML=all
    }catch(err){
        console.error(err)
    }
})