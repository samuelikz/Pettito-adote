  
async function getContent(){
    try {
        const response = await fetch('https://json-serverikz.herokuapp.com/pets')
        
        const data = await response.json()

        show(data)


    } catch (error) {
        console.log(error)
    }
}

getContent()

function show(users , id) {
    let output = ''

    for(let user of users){
        output += `
            <div class="card-deck" style="max-width: 19rem; padding: 1rem; object-fit: cover;">
                <div class="card shadow" style="height: 500px; max-height: 400px; min-height: 400px;">
                    <figure style="text-align: center;">
                        <img src="${user.urlimage}" class="card-img-top" alt="Time" style="height: 200px; object-fit: cover;">
                    </figure>
                    <div class="card-body" style=" text-overflow:ellipsis;">
                        <h5 class="card-title text-wrap fs-6">${user.nome_pet} (${user.raca})</h5>
                        <p class="card-text text-muted fs-6">${user.descrincao}</p>
                    </div>
                    <section class="space text-center">
                        <a href="View.html?id=${user.id}" class="btn btn-success disabled">Vizualizar</a>
                    </section>
                </div>
            </div>
        `
    }

    
    document.getElementById('li').innerHTML = output
}
