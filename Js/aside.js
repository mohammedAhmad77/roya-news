// main

const newestData= [
    {
        id:"news-01",
        description: "تراجع معدل البطالة في أمريكا",
        category:"رياضة",
        publishedTime:"منذ 6 دقائق",
    },
    {
        id:"news-02",
        description: "إصابات كورونا الجديدة في أدنى مستوياتها منذ تشرين الأول",
        category:"عربي دولي",
        publishedTime:"منذ 10 دقائق",
    },
    {
        id:"news-03",
        description: "تعيين الملياردير مايكل بلومبورغ مجدداً مبعوثاً أممياً خاصاً للمناخ",
        category:"عربي دولي",
        publishedTime:"منذ 15 دقائق",
    },
    {
        id:"news-04",
        description: "أسئلة مهمة وإجابات علمية حول جرعات لقاح كورونا",
        category:"هنا وهناك",
        publishedTime:"منذ 21 دقائق",
    },
    {
        id:"news-05",
        description: "انفجار بابور غاز في خيمة لبيع الخضار",
        category:"محليات",
        publishedTime:"منذ 25 دقائق",
    },
    {
        id:"news-06",
        description: "لبنان: لجنة كورونا توصي بإعادة الفتح تدريجيا",
        category:"عربي دولي",
        publishedTime:"منذ 27 دقائق",
    },
];



const mostWatchedData = [
    {
        id:"news-01",
        description: "فيديو متداول لسيول في منطقة العينة بين محافظتي الكرك والطفيلة",
        category:"محليات",
    },
    {
        id:"news-02",
        description: "إعلان نتائج التوجيهيالدورة التكميلية.. رابط",
        category:"محليات",
    },
    {
        id:"news-03",
        description: "ما حقيقة تخبئة عجوز في الأردن على الاف الدنانير بـ قواوير زريعة؟ - صور",
        category:"محليات",
    },
    {
        id:"news-04",
        description: "عبيدات يتحدث عن الحظر الشامل وعودة المدارس",
        category:"محليات",
    },
    {
        id:"news-05",
        description: "السيول تجرف مركبة داخلها 3 أشخاص غرب الرويشد.. تفاصيل",
        category:"محليات",
    },
    {
        id:"news-06",
        description: "محافظ المفرق لرؤيا: وفاة شقيق أحد المفقودين في سيول الرويشد",
        category:"محليات",
    },
];

const weatherNewsList = [
    "طقس العرب: قوة الحالة الجوية غير المستقرة بدأت تبتعد عن الأردن فيديو",
    "استمرار تأثر الأردن بحالة عدم الاستقرار الجوي وتتركز في جنوب البلاد",
    "تجدد حالة عدم الاستقرار الليلة وأمطار رعدية تطال المناطق الجنوبية فجراً (طقس العرب)",
]


const newsDescMaxLength = 50;
let showWeatherNews = true;

// document variable

const panelNav = document.getElementById('panel-nav');
const panelNavList = document.getElementById('panel-nav-list');
const panelNewsList = document.getElementById('panel-news-list');
const panelGroup = document.querySelector('.panel-group');
const panelWeatherList = document.getElementById('panel-weather-list');



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


if(panelGroup) {
    panelGroup.addEventListener('click', (event) => {
        const additionalButton = event.target.closest('.panel-group__heading');

        if(additionalButton) {
            showWeatherNews = !showWeatherNews;
            if(showWeatherNews) {
                insertWeatherNewsList(weatherNewsList);
                weatherButtonHandler(additionalButton,"./assets/icons/minus.png");

            } else {
                panelWeatherList.childNodes[1].innerHTML = '';
                weatherButtonHandler(additionalButton,"./assets/icons/plus.png");
            }
        }


    })
}


// insert weather news list handler

const insertWeatherNewsList = (data) => {
    data.forEach((item) => {
        panelWeatherList.childNodes[1].insertAdjacentHTML('beforeend', `
           
                <li class="panel-group__content__list-item"> 
                    <a href="/">
                        <p>
                            ${item}   
                        </p>
                    </a>
                </li>
            
        `) 
    });

    panelWeatherList.childNodes[1].insertAdjacentHTML('beforeend', `
           
        <li class="panel-group__button">
            <button>
                <a href="/">
                    <span>
                        المزيد من الطقس
                    </span>
                </a>
            </button>
        </li>

    `) 
    
}


const weatherButtonHandler = (button,src) => {

    if(showWeatherNews) {
        button.childNodes[3].childNodes[1].src = src;
    } else {
        button.childNodes[3].childNodes[1].src = src;
    }
}


insertPanelNewsHandler(newestData);
insertWeatherNewsList(weatherNewsList);