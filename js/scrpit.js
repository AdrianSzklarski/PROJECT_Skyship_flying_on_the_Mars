document.addEventListener('DOMContentLoaded', function() {
    
    const navigation = document.querySelector('.navbar')

    function addBack() {
        if (window.scrollY >= 1) {
            navigation.classList.add('add-back')
        } else {
            navigation.classList.remove('add-back')
        }
    }
    window.addEventListener('scroll', addBack)
})

