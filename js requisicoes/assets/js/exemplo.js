let get = document.querySelector('#botao');

get.addEventListener('click', async ()=>{
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    alert(json[0].title);
    alert("Clicou");
});

let post = document.querySelector("#inserir");
post.addEventListener('click',async ()=>{
   let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de teste',
                body: 'Corpo de teste',
                userId: 2
            })
        });
    let json = await response.json();
    console.log(json);
});
