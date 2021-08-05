function scrollAppear(){
    var scroll = document.querySelector('.scroll')
    var scrollTwo = document.querySelector('.scroll2')
    var scrollThree = document.querySelector('.scroll3')

    var scrollPosition = scroll.getBoundingClientRect().top
    var scrollPositionTwo = scrollTwo.getBoundingClientRect().top
    var scrollPositionThree = scrollThree.getBoundingClientRect().top

    var screenPosition = window.innerHeight/1.5
    
    if (scrollPosition < screenPosition){
         scroll.classList.add('scrollAppear')
    }

    if (scrollPositionTwo < screenPosition){
        scrollTwo.classList.add('scrollAppear')
    }

    if (scrollPositionThree < screenPosition){
        scrollThree.classList.add('scrollAppear')
    }
}

    window.addEventListener('scroll', scrollAppear)

    
