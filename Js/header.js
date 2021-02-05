
// insert the navigation's items

if(navList) {
    navbarItem.forEach((item,index) => {
        index === 0 
        ?  insertNavbarItems(item,"active")
        :  insertNavbarItems(item,null);
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

