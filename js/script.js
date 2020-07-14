function carusel() {

    let butPrev = document.querySelector('.but_prev'),
        butNext = document.querySelector('.but_next'),
        carusel = document.querySelector('.carusel_list'),
        list = document.querySelectorAll('.carusel_item'),
        firstItem = list[0],
        i = 0,
        sumWidth = 0;

    for (let i = 0; i < list.length; i++) {
        sumWidth += list[i].clientWidth + 10;
    }
  
    const next = function() {
        let width = list[i].clientWidth,
            marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0;

        if ((marginLeft + carusel.clientWidth) >= sumWidth) return;
        else firstItem.style.marginLeft = (-(marginLeft + width + 10)) + 'px';
        
        if(i == list.length - 1) return;
        else i += 1;
    };

    const prev = function() {
        let marginLeft = Math.abs(parseInt(firstItem.style.marginLeft)) || 0;
        if(marginLeft == 0) return;

        let width = list[i - 1].clientWidth;
        
        if (marginLeft != 0) firstItem.style.marginLeft = (-(marginLeft - width -10)) + 'px';

        if(i <= 0) return;
        else i -= 1;
    };

    butNext.addEventListener('click', next);
    butPrev.addEventListener('click', prev);
}

window.addEventListener('load', carusel);


