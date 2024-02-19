function availableSeat(){
    let availableSeatValue = document.getElementById('availableSeat').innerText;
    let availableSeatNumber = parseInt(availableSeatValue);
    let availableSeat = availableSeatNumber - 1;
    document.getElementById('availableSeat').innerHTML = availableSeat;
}