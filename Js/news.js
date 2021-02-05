
// main
const newsItem = [
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

const descMaxLength = 63;



// document variable
const newsList = document.getElementById('news-list');

if (newsList) {

    newsItem.forEach((item) => {
        newsList.insertAdjacentHTML('beforeend',
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