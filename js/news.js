
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data))
}
const displayCategory = cat => {
    const blockCategory = document.getElementById('category');

    const category = cat.data.news_category;//.category_name;
    for (const catElement of category) {
        // console.log(catElement.category_name);
        //name = catElement.category_name;
        const catDiv = document.createElement('div');
        catDiv.classList.add('mx-5');
        catDiv.classList.add('text-secondary');
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


const NewsNumLoad = (code) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${code}`)
        .then(res => res.json())
        .then(data => displayNewsNum(data))
}
const displayNewsNum = (newsNo) => {

    const blockNewsNo = document.getElementById('newsNo');
    //console.log(name);
    blockNewsNo.innerHTML = '';
    const newsNoDiv = document.createElement('div');

    newsNoDiv.classList.add('p-2');
    newsNoDiv.classList.add('text-center');
    console.log(blockNewsNo.childNodes)
    newsNoDiv.innerHTML = `
    <p>${newsNo.data.length} found for this Category </p>
    `
    blockNewsNo.appendChild(newsNoDiv);


}
//NewsNumLoad();