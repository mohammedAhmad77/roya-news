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
];



// document variable
const navbar = document.getElementById('navbar');
const MainNews = document.getElementById('main-news');
const navList = document.getElementById('nav-list');
const newsList = document.getElementById('news-list');
const newsGroupList = document.getElementById('news-group-list');
const newsGroup = document.getElementById('news-group');
const panelNav = document.getElementById('panel-nav');
const panelNavList = document.getElementById('panel-nav-list');
const panelNewsList = document.getElementById('panel-news-list');
const panelGroup = document.querySelector('.panel-group');
const panelWeatherList = document.getElementById('panel-weather-list');




const switchAdditionalBtnIcon = (button,src) => {
    button.childNodes[3].childNodes[1].src = src;
};

// insert the items of navbar handler
const insertNavbarItems = (item,active) => {

    const markup = `
        <li class="navbar__list-item ${active && "navbar__list-item-active"}">
            <a href="/">${item}</a>
        </li>
    `;

    navList.insertAdjacentHTML('beforeend',markup);
       
}