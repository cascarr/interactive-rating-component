const rateDisplay = document.querySelector('.show');

document.addEventListener('DOMContentLoaded', rated);

function rated() {

    const ratedVal = localStorage.getItem('rateResult');

    let showTxt = `You selected ${ratedVal} out of 5.`;

    rateDisplay.innerHTML = showTxt;
    console.log(rateDisplay.innerHTML);

}