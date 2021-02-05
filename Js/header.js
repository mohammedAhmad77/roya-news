
// main 
const navbarItem = [
    "الرئيسية",
    "محليات",
    "فلسطين",
    "عربي دولي",
    "اقتصاد",
    "رياضة",
    "هنا وهناك",
    "مقالات",
    "كتاب",
    "وفيّات",
    "فيديو",
    "الطقس",
    "كاريكاتير",
    "الاحداث السابقة",
];



// document variable
const navbar = document.getElementById('navbar');
const navList = document.getElementById('nav-list');





// insert the navigation's items

if(navList) {

    navbarItem.forEach((item,index) => {

        if(index === 0) {
            navList.insertAdjacentHTML('beforeend',
            `<li class="navbar__list-item navbar__list-item-active">
                <a href="/">${item}</a>
            </li>`
        );
        } else {
            navList.insertAdjacentHTML('beforeend',
                `<li class="navbar__list-item">
                    <a href="/">${item}</a>
                </li>`
            );
        }
        
    })
      
}



// navigation click handler
if(navbar) {
    navbar.addEventListener('click', (event) => {
        event.preventDefault();
        const navItem = event.target.closest(".navbar__list-item");

        if(navItem) {
            Array.from(navList.children).forEach(item => {
                item.classList.remove("navbar__list-item-active")
            });
            navItem.classList.add("navbar__list-item-active");
        }

       
    })
}

