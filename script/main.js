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

function show(users) {
    let output = ''

    for(let user of users){
        output += `
            <div class="card-deck" style="width: 19rem; padding: 1rem;">
                <div class="card shadow" style="height: 500px; max-height: 400px; min-height: 400px;">
                    <figure style="text-align: center;">
                        <img src="${user.urlimage}" class="card-img-top" alt="Time">
                    </figure>
                    <div class="card-body">
                        <h5 class="card-title">${user.nome} (${user.raca})</h5>
                        <p class="card-text text-muted">${user.descrincao}</p>
                    </div>
                    <section class="container-fluid space text-center">
                        <a href="#" class="btn btn-success">Vizualizar</a>
                    </section>
                </div>
            </div>
        `
    }

    document.getElementById('li').innerHTML = output
}