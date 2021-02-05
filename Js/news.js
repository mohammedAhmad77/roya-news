
// main
const newsData = [
    {
        id:'news-01',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/VmewyR0MC6hKKEOShcVngWHLVyJVgL8EaUNI5KM1.png",
        description: "الأمن يحرر في أسبوع 17558 مخالفة فردية و259 مخالفة للمنشآت",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-02',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/6sHCLQvsBJ29SD0NsSWxQDXkEqMCdCMrzrT70SBR.png",
        description: "قروض للأردن بقيمة إجمالية 31.2 مليون دولار",
        category: "اقتصاد",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-03',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/GSKKJxSVDLLQjh3xFnPrDuBX1hy1chbfEx4On1EG.png",
        description: "العمل تعلن عن توفر 110 فرص عمل في القطاع الخاص",
        category: "اقتصاد",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-04',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/I8VQVV4Mp67FwuOu3gzYSOmJXeWWKzcOcf9I1ZJw.png",
        description: "بايدن يتجه إلى إعلان إنهاء الدعم الأمريكي في حرب اليمن",
        category: "عربي دولي",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-05',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/d5FbjYAc6cMNirlMcNtP9VajoHQSTS39uY46l03N.png",
        description: "المفرق.. اغلاق نفق حوشا بسبب الامطار الغزيرة",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-01',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size328Q40/news/20210204/81mdNc9bDCNg8efbfwgeyiQSFRtW58iCitaTsez5.png",
        description: "عضو مجلس أعيان يكشف الرقم الحقيقي لعدد من تلقوا مطعوم كورونا في ....",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
];

const localNewsData = [
    {
        id:'news-01',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/auej8cTEDV15YJoGf5btwNWLJX3d26C3dmEBfa5w.png",
        description: "انفجار بابور غاز في خيمة لبيع الخضار",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-02',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/f9HjUtnjGLqS8CInXbTmUY0nSfRB9ygDjlCASMFq.png",
        description: "محافظ المفرق لـ رؤيا: العثور على جثامين الأشخاص المفقودين",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-03',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/lZQiEd8YtISQZJ6P8J7EaoSBd54MwyHTEgaZ7F5Y.png",
        description: "الملكة تشارك في قمة وارويك الاقتصادية 2021",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-04',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/NVYWvjRgLfgAQFnKV4mIUQdOY4vDLQQAuOoly267.png",
        description: "الدفاع المدني ينقذ شخصا حاصرته السيول- فيديو",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-05',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/krVwYeAMu17WnCURA9VTs4GOJzp51bOi5nQGdo3s.png",
        description: "الحكومة تدعو المواطنين للابتعاد عن مجاري السيول والاودية",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
    {
        id:'news-01',
        imgUrl : "https://cdnimg.royanews.tv/imageserv/Size228Q40/news/20210205/FSiY9VK0FpLYCoE0wvbMDWRATD7kccAnb8QVtpm4.png",
        description: "تضامن: لا نساء قاضيات في القضاء الشرعي",
        category: "محليات",
        publishedTime:"منذ ساعة",
    },
];

const descMaxLength = 63;
let showGroupNews = true;


// document variable
const newsList = document.getElementById('news-list');
const newsGroupList = document.getElementById('news-group-list');
const newsGroup = document.getElementById('news-group');




const insertListOfNews = (data,doc) => {
    data.forEach((item) => {
        doc.insertAdjacentHTML('beforeend',
            ` <li class="news__list__wrapper-item">
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
        );
    })
}



// insert the main news list handler
if (newsList) {
    insertListOfNews(newsData,newsList);
}

if(newsGroupList) {
    insertListOfNews(localNewsData,newsGroupList);

}



if(newsGroup) {
    newsGroup.addEventListener('click', (event) => {
        const additionalButton = event.target.closest('.news__group__heading');
        console.log(additionalButton);
        if(additionalButton) {
            showGroupNews = !showGroupNews;
            if(showGroupNews) {
                insertListOfNews(localNewsData,newsGroupList);
                additionalButton.childNodes[3].childNodes[1].src = "./assets/icons/minus.png";
            } else {
                newsGroupList.innerHTML = '';
                additionalButton.childNodes[3].childNodes[1].src = "./assets/icons/plus.png";
            }
        }


    })
}



