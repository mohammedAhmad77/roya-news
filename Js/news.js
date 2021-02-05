
// variables
const descMaxLength = 63;
let showGroupNews = true;



const insertListOfNews = (data,doc) => {
    const markup = `
        <div class="news__list">
            <ul class="news__list__wrapper" id="news-list">
                ${data.map((item) => (
                    `<li class="news__list__wrapper-item">
                            <a href="/">
                                <img src=${item.imgUrl} alt=${item.id}/>
                                <div class="news__list__wrapper-item-desc">
                                    <p>${item.description.length > descMaxLength ? item.description.substring(0,descMaxLength) + ' ....' : item.description}</p>
                                </div>
                            </a>
                            <a href="/"> 
                                <div class="news__list__wrapper-item-status">
                                    <span>${item.category}</span>
                                    <span>${item.publishedTime}</span>
                                </div>
                            </a>
                    </li>`
                )).join('')}
            </ul>
        </div>
    `;

    doc.insertAdjacentHTML('beforeend',markup)



    // data.forEach((item) => {
    //     doc.insertAdjacentHTML('beforeend',
    //         ` <li class="news__list__wrapper-item">
    //             <a href="/">
    //                 <img src=${item.imgUrl} alt=${item.id}/>
    //                 <div class="news__list__wrapper-item-desc">
    //                     <p>${item.description.length > descMaxLength ? item.description.substring(0,descMaxLength) + ' ....' : item.description}</p>
    //                 </div>
    //             </a>
    //             <a href="/"> 
    //                 <div class="news__list__wrapper-item-status">
    //                     <span>${item.category}</span>
    //                     <span>${item.publishedTime}</span>
    //                 </div>
    //             </a>
    //         </li>`
    //     );
    // })
}



// insert the main news list handler
if (MainNews) {
    insertListOfNews(newsData,MainNews);
}

if(newsGroup) {
    insertListOfNews(localNewsData,newsGroup);

}



if(newsGroup) {
    newsGroup.addEventListener('click', (event) => {
        const additionalButton = event.target.closest('.news__group__heading');
        if(additionalButton) {
            showGroupNews = !showGroupNews;
            if(showGroupNews) {
                insertListOfNews(localNewsData,newsGroup);
                switchAdditionalBtnIcon(additionalButton,"./assets/icons/minus.png");
            } else {
                newsGroup.removeChild(newsGroup.lastElementChild);
                switchAdditionalBtnIcon(additionalButton,"./assets/icons/plus.png");
            }
        }


    })
}



