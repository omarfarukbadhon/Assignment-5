const button = document.getElementById('couponID');
button.disabled = true;

function selectSeat(selectSeatID) {
    const getSelectSeatID = document.getElementById(selectSeatID);
    addSeat(selectSeatID);
    totalPrice();
    getSelectSeatID.classList.remove('bg-slate-200');
    getSelectSeatID.classList.add('bg-[#1DD100]');
    getSelectSeatID.classList.add('text-white');
    availableSeat();
    selectedSeat();
    removeClickFunction();
}

function removeClickFunction(selectSeatID) {
    const getSelectSeatID = document.getElementById(selectSeatID);
    getSelectSeatID.removeAttribute('onclick');
}

function availableSeat() {
    let availableSeatValue = document.getElementById('availableSeat').innerText;
    let availableSeatNumber = parseInt(availableSeatValue);
    let availableSeat = availableSeatNumber - 1;
    document.getElementById('availableSeat').innerHTML = availableSeat;
}

function selectedSeat() {
    let selectedSeatValue = document.getElementById('selectedSeat').innerText;
    let selectedSeatNumber = parseInt(selectedSeatValue);
    let selectedSeat = selectedSeatNumber + 1;
    document.getElementById('selectedSeat').innerHTML = selectedSeat;
    if (selectedSeat === 4) {
        var elementsWithOnClick = document.querySelectorAll('[onclick]');

        elementsWithOnClick.forEach(function (element) {
            element.removeAttribute('onclick');
        });
        const button = document.getElementById('couponID');
        button.disabled = false;
        button.onclick = couponTest;
    } else {
        const button = document.getElementById('couponID');
        button.disabled = true;
    }
}

function selectedSeatDetails(selectedSeatDetailsID) {
    const getSelectSeatDetailsID = document.getElementById(selectedSeatDetailsID);
    getSelectSeatDetailsID.classList.remove('hidden');
    getSelectSeatDetailsID.classList.add('flex');
}

function addSeat(selectSeatID) {
    const getSelectSeatID = document.getElementById(selectSeatID);
    const getSeatPosition = getSelectSeatID.innerText;
    let availableSeatValue = document.getElementById('availableSeat').innerText;
    if (availableSeatValue == 40) {
        document.getElementById('SelectedSeatPositionOne').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsOne');
    }
    if (availableSeatValue == 39) {
        document.getElementById('SelectedSeatPositionTwo').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsTwo');
    }
    if (availableSeatValue == 38) {
        document.getElementById('SelectedSeatPositionThree').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsThree');
    }
    if (availableSeatValue == 37) {
        document.getElementById('SelectedSeatPositionFour').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsFour');
    }
}

function totalPrice() {
    let selectedSeatValue = document.getElementById('selectedSeat').innerText;
    let selectedSeatNumber = parseInt(selectedSeatValue);
    const totalSelectedSeatPrice = (selectedSeatNumber + 1) * 550;
    document.getElementById('totalPrice').innerHTML = totalSelectedSeatPrice;
}

function couponTest() {
    const givenCoupon = document.getElementById('coupon').value;
    const originCoupleCoupon = document.getElementById('couple').innerText;
    const originNewCoupon = document.getElementById('new').innerText;
    const totalPrice = document.getElementById('totalPrice').innerText;
    if (originCoupleCoupon == givenCoupon) {
        document.getElementById('grandTotal').innerHTML = parseInt(totalPrice - (totalPrice * 0.2));
    } else if (originNewCoupon == givenCoupon) {
        document.getElementById('grandTotal').innerHTML = parseInt(totalPrice - (totalPrice * 0.15));
    } else {
        document.getElementById('grandTotal').innerHTML = totalPrice;
    }
}

function finish(){
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const nameArray = name.split('');
    const phoneArray = phone.split('');
    // console.log(nameArray.length, phoneArray.length)

    if(nameArray.length >= 3 && phoneArray.length === 11){
        if(phoneArray[0] == 0 && phoneArray[1] == 1){
            window.location.href = 'done.html'
        }else{
            alert('Enter correct phone number');
        }
    }else{
        alert('please fill the name and phone number properly');
    }
}
