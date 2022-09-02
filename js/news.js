const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategory(data))
}
const displayCategory = cat => {
    const blockCategory = document.getElementById('category');
    console.log(cat);
    const category = cat.data.news_category;//.category_name;
    for (const catElement of category) {
        const catDiv = document.createElement('div');
        catDiv.classList.add('mx-5');
        catDiv.classList.add('text-secondary');
        catDiv.innerHTML = `

        <p> ${catElement.category_name}</p>
    
        `
        blockCategory.appendChild(catDiv);
        // console.log(catElement.category_name);
    }
    // console.log(cat);//.data.news_category[0].category_name)
}
loadCategory();