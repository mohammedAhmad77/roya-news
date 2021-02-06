// variables
const newsDescMaxLength = 45;
let showWeatherNews = true;




// Panel navbar switch handler
if (panelNav) {
    panelNav.addEventListener('click',(event) => {
        const navItem = event.target.closest(".panel__nav__list-item");

        if(navItem) {
            Array.from(panelNavList.children).forEach(item => {
                item.classList.remove("panel__nav__list-item-active");
            });

            navItem.classList.add("panel__nav__list-item-active");
        }


        if(navItem.id === "panel-nav-newest") {
            insertPanelNewsHandler(newestData);
           
        } else if (navItem.id === "panel-nav-most-watched") {
            insertPanelNewsHandler(mostWatchedData);
        }
    })
}




// insert panel news list handler
const insertPanelNewsHandler = (data) => {
    panelNewsList.innerHTML = '';

    data.forEach((item) => {
        panelNewsList.insertAdjacentHTML('beforeend', `
            <li class="panel__news__list-item">
                <div class="panel__news__list-item-desc">
                    <a href="/">
                        <p>
                        ${item.description.length > newsDescMaxLength ? item.description.substring(0,newsDescMaxLength) + ' ....' : item.description}
                        </p>
                    </a>
                </div>
                <div class="panel__news__list-item-type">
                    <a href="/">
                        <span>                       
                            ${item.category}  
                        </span>
                        ${item.publishedTime ? `<span>${item.publishedTime}</span>` : '' }
                    
                    </a>
                </div>
            </li>
        `
        )
    });
    
};

// additional panel group button Handler 

if(panelGroup) {
    panelGroup.addEventListener('click', (event) => {
        const additionalButton = event.target.closest('.panel-group__heading');
        
        if(additionalButton) {
            showWeatherNews = !showWeatherNews;
            if(showWeatherNews) {
                insertWeatherNewsList(weatherNewsList);
                switchAdditionalBtnIcon(additionalButton,"./assets/icons/minus.png");

            } else {
                panelGroup.removeChild(panelGroup.lastElementChild);
                switchAdditionalBtnIcon(additionalButton,"./assets/icons/plus.png");
            }
        }


    })
}


// insert weather news list handler

const insertWeatherNewsList = (data) => {

    const markup =  `
    <div class="panel-group__content" id="panel-weather-list">
        <ul class="panel-group__content__list">
            ${data.map((item) => (
                `<li class="panel-group__content__list-item">
                    <a href="/">
                        <p> 
                            ${item}
                        </p>
                    </a>
                </li>`
            )).join('')}
        </ul>
        <div class="panel-group__button">
            <button>
                <a href="/">
                    <span>
                        المزيد من الطقس
                    </span>
                </a>
            </button>
        </div>
    </div>
    `;

    panelGroup.insertAdjacentHTML('beforeend',markup);
    
};






insertPanelNewsHandler(newestData);
insertWeatherNewsList(weatherNewsList);