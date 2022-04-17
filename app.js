const hover_circle = document.querySelectorAll('.hover-circle');
const border_hover = document.querySelectorAll('.hover-border')
const first_box = document.querySelectorAll('.first-box')
const image = document.querySelector('.image');

//getting height and width of an image 
const image_width = image.offsetWidth;
const image_height = image.offsetHeight;

//start of small screen hover
const hover_sm = document.querySelectorAll('.hover-text-sm');

//code for many hover circle 
hover_circle.forEach((each_hover_circle, idx) => {
    let hover_left = each_hover_circle.offsetLeft
    let hover_top = each_hover_circle.offsetTop

    if(first_box[idx].classList.contains('left')){
        border_hover[idx].style.width = (hover_left + 15) + 'px'
    } else if (first_box[idx].classList.contains('right')){
        border_hover[idx].style.width =  (image_width - hover_left - 15) + 'px'
    } else if (first_box[idx].classList.contains('top')){
        border_hover[idx].style.height = (hover_top + 15) + 'px'
    } else if (first_box[idx].classList.contains('bottom')){
        border_hover[idx].style.height =  (image_height - hover_top - 15) + 'px'
    }

    each_hover_circle.addEventListener('mouseover', () => {
        hover_sm[idx].classList.remove('hide-sm-text')
    })
    each_hover_circle.addEventListener('mouseleave', () => {
        hover_sm[idx].classList.add('hide-sm-text')
    })
})








