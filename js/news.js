// -----------------------  news category--------------------------------------------
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data))
        .catch(error => console.log(error))
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
        .catch(error => console.log(error))

}
const allNews = (code) => {
    fetch(`https://openapi.programming-hero.com/api/news/${code}`)//${code}
        .then(res => res.json())
        .then(data => displayAllNews(data))
        .catch(error => console.log(error))
    // console.log(data)
}
const newsFeild = document.getElementById('allNews');

const displayNewsNum = (newsNo) => {
    const newses = newsNo.data;
    //console.log(newses)
    newses.sort((a, b) => {
        return b.total_view - a.total_view;
    });
    //console.log(newses)
    //start loader
    toggleSpinner(true);

    const blockNewsNo = document.getElementById('newsNo');

    blockNewsNo.innerHTML = '';

    const newsNoDiv = document.createElement('div');

    newsNoDiv.classList.add('p-2');
    newsNoDiv.classList.add('text-center');
    //newsNoDiv.classList.add('d-sm-inline-block');
    if (newsNo.data.length == 0) {
        toggleSpinner(false);
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


    newses.forEach(news => {
        allNews(news._id)



    });



}

// -----------------------  news --------------------------------------------
const obj = [];
const view = [];

const displayAllNews = (allNews) => {

    //author name : allNews.data[0].author.name
    //publish date: allNews.data[0].author.published_date
    //auther image :allNews.data[0].author.img
    //news image: allNews.data[0].thumbnail_url
    // news details: allNews.data[0].details
    // headline: allNews.data[0].title
    // views:allNews.data[0].total_view
    //rating :allNews.data[0].rating.number



    try {
        const newsDiv = document.createElement('div');

        newsDiv.classList.add('p-2');
        newsDiv.classList.add('m-5');
        newsDiv.innerHTML = `
    <div class="m-5">
    <div class="row">
        <div class="col-lg-12">
            <div class="card mb-3 " style="max-width: 100%;">

            </div>
        </div>
    </div>
    <div class="row g-1">
        <div class="col-md-6 justify-content-center">
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
                            <div style="line-height : 15px;">
                                <p class="fw-bold my-3 px-2">${allNews.data[0].author.name ? allNews.data[0].author.name : 'No author found'}</p>
                                <p class="text-muted my-3 px-2">${allNews.data[0].author.published_date ? allNews.data[0].author.published_date : 'no date found'}</p>
                            </div>
                        </div>
                        <div class="d-flex">
                            <i class="fa-regular fa-eye mx-2 my-1"></i>
                            <p class="fw-bold ">${allNews.data[0].total_view ? allNews.data[0].total_view : 'No view found'}</p>
                        </div>
                        <div class="d-flex">
                            <i class="fa-solid fa-star filled mx-2 my-2"></i>
                            <p class="fw-bold  px-2">${allNews.data[0].rating.number}</p>
                            

                        </div>
                        <button onclick="newsDetails('${allNews.data[0]._id}')" href="#" class="btn" data-bs-toggle="modal" data-bs-target="#newsDetailModal">Show Details</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
         `

        toggleSpinner(false);

        newsFeild.appendChild(newsDiv);
    }
    catch (error) {
        console.log(error);
    }
    // console.log(allNews.data[0].details)

}
console.log(typeof (obj))




const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

const newsDetails = (code) => {
    fetch(`https://openapi.programming-hero.com/api/news/${code}`)//${code}
        .then(res => res.json())
        .then(data => displayNewsDetails(data))
        .catch(error => console.log(error))
    //console.log(`https://openapi.programming-hero.com/api/news/${code}`)
}
const displayNewsDetails = news => {
    try {
        console.log(news.data[0].author.name.length)
        const newsDetails = document.getElementById('news-details');
        newsDetails.innerHTML = `
        <h3>Details:</h3>
        <p> ${news.data[0].details}</p>
        <hr>
        <p>Author Name: ${news.data[0].author.name ? news.data[0].author.name : 'No author found'}</p>
        <p>User View: ${news.data[0].total_view ? news.data[0].total_view : 'No view found'}</p>
        <p>Published date: ${news.data[0].author.published_date ? news.data[0].author.published_date : 'no date found'}</p>
         
    `;
    }
    catch (error) {
        console.log(error)
    }
}

NewsNumLoad('08');