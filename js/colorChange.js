function selectSeat(selectSeatID){
    const getSelectSeatID = document.getElementById(selectSeatID);
    getSelectSeatID.classList.remove('bg-slate-200')
    getSelectSeatID.classList.add('bg-[#1DD100]')
    getSelectSeatID.classList.add('text-white')
}