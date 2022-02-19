fetch ("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
.then(res => res.json())
.then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `Photo by: ${data.user.name}`
})

.catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDQ0MjUyNTU&ixlib=rb-1.2.1&q=85)`
})

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Qualcosa è andato storto")
        }
        
        return res.json()
    })

    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name} </span> `
        /*console.log(data)*/
        
        
        document.getElementById("crypto").innerHTML += `
        <p>🎯: €${data.market_data.current_price.eur}</p>
        <p>👆: €${data.market_data.high_24h.eur}</p>
        <p>👇: €${data.market_data.low_24h.eur}</p>  `
        })

        .catch(err => console.error(err))


        fetch("https://api.coingecko.com/api/v3/coins/ethereum")
        .then(res => {
            if (!res.ok) {
                throw Error("Qualcosa è andato storto")
            }
            
            return res.json()
        })
    
        .then(data => {
            document.getElementById("eth-crypto").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name} </span> `
            document.getElementById("eth-crypto").innerHTML += `
            <p>🎯: €${data.market_data.current_price.eur}</p>
            <p>👆: €${data.market_data.high_24h.eur}</p>
            <p>👇: €${data.market_data.low_24h.eur}</p>  `

            })
    
            .catch(err => console.error(err))


            fetch("https://api.coingecko.com/api/v3/coins/solana")
            .then(res => {
                if (!res.ok) {
                    throw Error("Qualcosa è andato storto")
                }
                
                return res.json()
            })
        
            .then(data => {
                document.getElementById("sol-crypto").innerHTML = `
                <img src=${data.image.small} />
                <span>${data.name} </span> `
                document.getElementById("sol-crypto").innerHTML += `
                <p>🎯: €${data.market_data.current_price.eur}</p>
                <p>👆: €${data.market_data.high_24h.eur}</p>
                <p>👇: €${data.market_data.low_24h.eur}</p>  `
    
                })
        
                .catch(err => console.error(err))


function getCurrentTime () {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("it", {timeStyle: "medium"})
}

setInterval(getCurrentTime, 1000)



navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Meteo non disponibile")
        }
        return res.json()
    })
    .then(data => {
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}°</p>
            <p class="weather-city">${data.name}</p> `
    })  
    .catch(err => console.error(err))
    })


    const quoteEl = document.getElementById("quote")
    const getQuote = async () => {
        try {
            const res = await fetch("https://api.quotable.io/random")
            if ( !res.ok ) {
                throw Error("<span>Qualcosa è andato storto.</span><br />Per favore, prova ad aggiornare la pagina.")
            }
            const data = await res.json()
    
            quoteEl.innerHTML += `<q>${data.content}</q><small> - ${data.author}</small>`
        } catch(err) {
            quoteEl.innerHTML = `<p class="error">${err}</p>`
        }
    }
    getQuote()


   