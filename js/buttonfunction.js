function selectSeat(selectSeatID) {
    const getSelectSeatID = document.getElementById(selectSeatID);
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