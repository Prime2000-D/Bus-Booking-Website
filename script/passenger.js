const passengerContainer = document.querySelector('.passenger-container')
// const confirmBtn = document.querySelector('.confirm-btn')
const closeBtn = document.querySelector('.close-btn')
const passengerDetail = document.querySelector('.passenger-detail')




function showPassengerDetail(seatno, amount){
    passengerContainer.style.setProperty('display', 'flex')
    const seatList = seatno.innerText.split(',')
    createPassengerContent(seatList)
    passengerContainer.querySelector('.amount').innerText = amount
}
function hidePassengerDetail(){
    passengerContainer.style.setProperty('display', 'none')
    const passengerContent = document.querySelectorAll('.passenger-content')
    passengerContent.forEach(ele => {
        passengerContent[ele.remove()]    
    });
}



/* <div class="passenger-content">
    <p>Seat No. L2</p>
    <div class="name-c">
        <label for="">Name</label>
        <input type="text" name="name" class="passenger-name">
    </div>
    <div class="gender-c">
        <label for="">Gender</label>
        <div class="gender">
            <input type="radio" name="gender" id="passenger-male"><label for="passenger-male">Male</label>
            <input type="radio" name="gender" id="passenger-female"><label for="passenger-female">Female</label>
        </div>
    </div>
    <div class="age-c">
        <label for="">Age</label>
        <input type="number" name="age" id="passenger-age">
    </div>
</div> */

function createPassengerContent(seatNoArr){
    for (let index = 0; index < seatNoArr.length; index++) {
            
        const passengerContent = document.createElement('div')
        passengerContent.classList.add('passenger-content')
        const seatNo = document.createElement('p')
        seatNo.innerText = `Seat No. ${seatNoArr[index]}` 
        passengerContent.appendChild(seatNo)
        const nameC = document.createElement('div')
        nameC.classList.add('name-c')
        passengerContent.appendChild(nameC)

        const  labelName = document.createElement('label')
        labelName.innerText = 'Name'
        nameC.appendChild(labelName)
        const passengerName = document.createElement('input')
        passengerName.className = 'passenger-name'
        passengerName.type = 'text'
        passengerName.name = 'name'
        nameC.appendChild(passengerName) 

        const genderC = document.createElement('div')
        genderC.className = 'gender-c'
        passengerContent.appendChild(genderC)

        const labelGender = document.createElement('label')
        labelGender.innerText = 'Gender'
        genderC.appendChild(labelGender)

        const gender = document.createElement('div')
        gender.className = 'gender'
        genderC.appendChild(gender)
        const passengerMale = document.createElement('input')
        passengerMale.id = 'passenger-male'
        passengerMale.type = 'radio'
        passengerMale.name = 'gender'
        gender.appendChild(passengerMale)
        const labelGender1 = document.createElement('label')
        labelGender1.innerText = 'Male'
        labelGender1.setAttribute('for','passenger-male')
        gender.appendChild(labelGender1)

        const passengerFemale = document.createElement('input')
        passengerFemale.id = 'passenger-female'
        passengerFemale.type = 'radio'
        passengerFemale.name = 'gender'
        gender.appendChild(passengerFemale)
        const labelGender2 = document.createElement('label')
        labelGender2.innerText = 'Female'
        labelGender2.setAttribute('for', 'passenger-female')
        gender.appendChild(labelGender2)

        const ageC = document.createElement('div')
        ageC.className = 'age-c'
        const labelAge = document.createElement('label')
        labelAge.innerText = 'Age'
        ageC.appendChild(labelAge)
        const passengerAge = document.createElement('input')
        passengerAge.id = 'passenger-age'
        passengerAge.type = 'number'
        passengerAge.name = 'age'
        ageC.appendChild(passengerAge) 
        passengerContent.appendChild(ageC)

        passengerDetail.appendChild(passengerContent)
    }
}

function updateAmount(amount){

}