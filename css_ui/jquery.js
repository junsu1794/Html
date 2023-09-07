let hamMenuIcon = $('#ham-menu');
let navBar = $('#nav-bar');
let navLinks = $('li');

hamMenuIcon.click(function () {
    navBar.toggleClass('active');
    hamMenuIcon.toggleClass('fa-times');
})

navLinks.click(function(){
    navBar.remove('active');
    hamMenuIcon.toggle('fa-times');
})