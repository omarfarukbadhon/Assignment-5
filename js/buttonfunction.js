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
    }
}

function selectedSeatDetails(selectedSeatDetailsID){
    const getSelectSeatDetailsID = document.getElementById(selectedSeatDetailsID);
    getSelectSeatDetailsID.classList.remove('hidden');
    getSelectSeatDetailsID.classList.add('flex');
}

function addSeat(selectSeatID){
    const getSelectSeatID = document.getElementById(selectSeatID);
    const getSeatPosition = getSelectSeatID.innerText;
    let availableSeatValue = document.getElementById('availableSeat').innerText;
    if(availableSeatValue == 40){
        document.getElementById('SelectedSeatPositionOne').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsOne');
    }
    if(availableSeatValue == 39){
        document.getElementById('SelectedSeatPositionTwo').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsTwo');
    }
    if(availableSeatValue == 38){
        document.getElementById('SelectedSeatPositionThree').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsThree');
    }
    if(availableSeatValue == 37){
        document.getElementById('SelectedSeatPositionFour').innerText = getSeatPosition;
        selectedSeatDetails('selectedSeatDetailsFour');
    }
}

function totalPrice(){
    let selectedSeatValue = document.getElementById('selectedSeat').innerText;
    let selectedSeatNumber = parseInt(selectedSeatValue);
    const totalSelectedSeatPrice = (selectedSeatNumber+1)*550;
    document.getElementById('totalPrice').innerHTML = totalSelectedSeatPrice;
}
