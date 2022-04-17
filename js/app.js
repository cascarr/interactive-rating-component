const rtBtns = document.querySelectorAll('.cir-btn');
const submit = document.querySelector('.btn');

rtBtns.forEach(function(btn) {
    
    btn.addEventListener('click', function(e) {

        e.preventDefault();

        let value = '';
        const clkEle = e.target;

        if (clkEle.classList.contains('one')) {
            
            value += clkEle.id +' ';

        } 
        else if (clkEle.classList.contains('two')) {

            value += clkEle.id +' ';

        }
        else if (clkEle.classList.contains('three')) {

            value += clkEle.id +' ';

        }
        else if (clkEle.classList.contains('four')) {

            value += clkEle.id +' ';

        }
        else if (clkEle.classList.contains('five')) {

            value += clkEle.id +' ';

        }

        const rate = value;
        localStorage.setItem('rateResult', rate);
        console.log(rate);

    });

});