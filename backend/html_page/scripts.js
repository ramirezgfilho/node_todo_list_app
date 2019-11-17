const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

// criando a variável da requisição
var request = new XMLHttpRequest()

// abrindo a conexão usando uma resposta GET
request.open('GET', 'http://localhost:3000/tasks', true)

//carregando data
request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(task => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = task.name

            const p = document.createElement('p')
            task.urgence = task.urgence
            p.textContent = "Urgencia: " + task.urgence

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)

        });
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }

}

request.send()


