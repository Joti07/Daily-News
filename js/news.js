// -----------------------  news category--------------------------------------------
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data))
}
const displayCategory = cat => {
    const blockCategory = document.getElementById('category');

    const category = cat.data.news_category;//.category_name;
    for (const catElement of category) {
        //console.log(catElement);
        //name = catElement.category_name;
        const catDiv = document.createElement('div');
        catDiv.classList.add('mx-5');
        catDiv.classList.add('text-secondary');
        // catDiv.classList.add('d-sm-inline-block');
        catDiv.innerHTML = `

        <p onclick="NewsNumLoad('${catElement.category_id}')"> ${catElement.category_name}</p>
    
        `
        blockCategory.appendChild(catDiv);
        // console.log(catElement.category_id);
        //onclick="loadCountryDetail('${catElement.category_id}')"
    }
    //  console.log(cat.data.news_category[0].category_id)
}
loadCategory();

// -----------------------  news Numbers--------------------------------------------
const NewsNumLoad = (code) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${code}`)
        .then(res => res.json())
        .then(data => displayNewsNum(data))
    console.log(code);
}
const allNews = (code) => {
    fetch(`https://openapi.programming-hero.com/api/news/${code}`)//${code}
        .then(res => res.json())
        .then(data => displayAllNews(data))
    // console.log(code)
}
const newsFeild = document.getElementById('allNews');
const views = [];
const displayNewsNum = (newsNo) => {

    const blockNewsNo = document.getElementById('newsNo');

    blockNewsNo.innerHTML = '';

    const newsNoDiv = document.createElement('div');

    newsNoDiv.classList.add('p-2');
    newsNoDiv.classList.add('text-center');
    //newsNoDiv.classList.add('d-sm-inline-block');
    if (newsNo.data.length == 0) {
        newsNoDiv.innerHTML = `
        No news found for this Category
        `

    }
    else if (newsNo.data.length == 26) {
        newsNoDiv.innerHTML = `
        ${newsNo.data.length} news found for All News Category 
        `

    }
    else {
        newsNoDiv.innerHTML = `
         ${newsNo.data.length} news found for this Category 
        `

    }


    blockNewsNo.appendChild(newsNoDiv);
    // console.log(newsNo)
    newsFeild.innerHTML = '';
    const newses = newsNo.data;

    newses.forEach(news => {
        allNews(news._id)



    });



}

// -----------------------  news --------------------------------------------


const displayAllNews = (allNews) => {
    //author name : allNews.data[0].author.name
    //publish date: allNews.data[0].author.published_date
    //auther image :allNews.data[0].author.img
    //news image: allNews.data[0].thumbnail_url
    // news details: allNews.data[0].details
    // headline: allNews.data[0].title
    // views:allNews.data[0].total_view
    //rating :allNews.data[0].rating.number

    // console.log(allNews.data[0].rating.number);
    //blockNewsNo.innerHTML = '';
    //newsFeild.innerHTML = '';
    views.push(allNews.data[0].total_view);
    const newsDiv = document.createElement('div');

    newsDiv.classList.add('p-2');
    newsDiv.classList.add('m-5');
    //newsNoDiv.classList.add('text-center');
    //newsNoDiv.classList.add('d-sm-inline-block');

    newsDiv.innerHTML = `
    <div class="m-5">
    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-3 " style="max-width: 100%;">

            </div>
        </div>
    </div>
    <div class="row g-0">
        <div class="col-md-6">
            <img src="${allNews.data[0].thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-6 d-flex align-items-center">
            <div>
                <div class="card-body p-5">
                    <h2 class="card-title fw-bold">${allNews.data[0].title}</h2>
                    <p class="card-text text-muted">
                        <small>
                            ${allNews.data[0].details.slice(1, 310)} . . . 

                        </small>
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex">
                            <img src="${allNews.data[0].author.img}" class="rounded-circle news-img " alt="">
                            <div style="line-height : 10px;">
                                <p class="fw-bold my-3 px-2">${allNews.data[0].author.name}</p>
                                <p class="text-muted my-3 px-2">${allNews.data[0].author.published_date}</p>
                            </div>
                        </div>
                        <div class="d-flex">
                            <i class="fa-regular fa-eye mx-2 my-1"></i>
                            <p class="fw-bold ">${allNews.data[0].total_view}</p>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-star filled mx-2 my-2"></i>
                            <p class="fw-bold  px-2">${allNews.data[0].rating.number}</p>
                            

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
         `




    newsFeild.appendChild(newsDiv);


}
for (const view of views)
    console.log(view)


NewsNumLoad('08');