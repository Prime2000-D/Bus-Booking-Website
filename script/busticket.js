const busList = document.querySelector('.bus-list')
const seats = document.querySelectorAll('.seat')
const viewBtns = document.querySelectorAll('.view-btn')


busList.addEventListener('click', (e)=>{
    const item = e.target
    if(item.classList[0] === 'view-btn'){
        item.nextElementSibling.style.display = 'flex'
        if(item.innerText === 'View seat'){
            item.innerText = 'Hide seat'
            const busContent = item.previousElementSibling
            const seatPriceContainer = item.nextElementSibling
            const priceContainer = seatPriceContainer.querySelector('.price-container')
            const seatContainer = seatPriceContainer.querySelector('.seat-container')
            
            
            const busName = busContent.querySelector('.bus-name').innerText
            const busDeparture = busContent.querySelector('.bus-time').innerText
            const busArrival = busContent.querySelector('.bus-arrival').innerText
            const busSource = busContent.querySelector('.boarding').innerText
            const busDestianation = busContent.querySelector('.dropping').innerText
            const busType = busContent.querySelector('.bus-type').innerText
            const busDate= busContent.querySelector('.bus-date').innerText

            fillPriceContainer(priceContainer, busName, busType, busDate, busArrival, busDeparture, busSource, busDestianation)
            
            seatContainer.addEventListener('click', e => {
                const item = e.target
                // const selectedSeat = document.querySelectorAll('.row .seat.selected')
                const seatNo = priceContainer.querySelector('.seat-no')                
                if(item.classList.contains('seat') && !item.classList.contains('booked') && !item.parentElement.parentElement.classList.contains('showcase'))
                {
                    const ticketPrice = +busContent.querySelector('.bus-fare b').innerText
                    const confirmBtn = priceContainer.querySelector('.confirm-btn')
                    item.classList.toggle('selected')
                    updateSelectedSeat(seatPriceContainer, ticketPrice);
                    const price = +priceContainer.querySelector('.price').innerText
                    showBusFare(priceContainer)
                    confirmBtn.onclick = function (){
                        showPassengerDetail(seatNo, price)
                    }
                }
                if(seatNo.innerText.split(',')[0] === ''){
                    hideBusFare(priceContainer)
                }
            })

            
            closeBtn.onclick = function () {
                hidePassengerDetail()
            }
            
        }       
        else{
            item.innerText = 'View seat'
            item.nextElementSibling.style.display = 'none'
        }
    }
})




function updateSelectedSeat(document, ticketPrice = 0){
    const selectedSeat = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeat.length
    const seats = document.querySelectorAll('.seat')
    if(selectedSeatsCount <= 6){
        seats.forEach(ele => {
            if(!ele.classList.contains('selected'))
                ele.removeAttribute('style')
        });
        const seatsNo = [...selectedSeat].map(seat => seat.getAttribute('value'))
        document.querySelector('.price').innerText = selectedSeatsCount * ticketPrice
        document.querySelector('.seat-no').innerText = `${seatsNo.toString()}`
        if (selectedSeatsCount === 6) {
            seats.forEach(ele => {
                if(!ele.classList.contains('selected') && !ele.classList.contains('showcase'))
                    ele.setAttribute('style', 'pointer-events: none;')
            });
        }
    }
    
}

function showBusFare(document){
    const priceSeatContent = document.querySelector('.price-seat-content')
    const confirmBtn = document.querySelector('.confirm-btn')
    priceSeatContent.style.setProperty('display','flex')
    confirmBtn.style.setProperty('pointer-events', 'initial')
    confirmBtn.style.setProperty('background-color', '#fe5339')
}
function hideBusFare(document){
    const priceSeatContent = document.querySelector('.price-seat-content')
    const confirmBtn = document.querySelector('.confirm-btn')
    priceSeatContent.style.setProperty('display','none')
    confirmBtn.style.setProperty('pointer-events', 'none')
    confirmBtn.style.setProperty('background-color', 'grey')
}

function fillPriceContainer(document, busname, bustype, busdate, busarr, busdept, bussrc, busdes){

    document.querySelector('.bus-name-s').innerText = busname
    document.querySelector('.bus-type-s').innerText = bustype
    document.querySelector('.date-s').innerText = busdate
    document.querySelector('.time-s').innerText = `${busdept} - ${busarr}`
    document.querySelector('.source').innerText = bussrc
    document.querySelector('.destination').innerText = busdes
}



