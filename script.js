const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce972534bde29b84acf91d86342de93c&page=1';
const IMAGEPATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=ce972534bde29b84acf91d86342de93c&query=";

const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url){
  fetch(url).then(res=>res.json())
  .then(function (data){
    console.log(data.results);
    data.results.forEach(element=>{
      const div_card=document.createElement("div");
      div_card.setAttribute("class","card");
      const div_row=document.createElement("div");
      div_row.setAttribute("class","row")
      const div_column=document.createElement("div");
      div_column.setAttribute("class","column")
      const div_image=document.createElement("img");
      div_image.setAttribute("class","thumbnail")
      div_image.setAttribute("id","image");
      const title=document.createElement("h3");
      title.setAttribute("id","title");
      const center=document.createElement("centre");

      title.innerHTML=`${element.title}`;
      div_image.src=`${IMAGEPATH + element.poster_path}`;
      center.appendChild(div_image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);
      main.appendChild(div_row);
    });
  });

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML='';

    const searchItem=search.value;
    if(searchItem){
      return returnMovies(SEARCHAPI+searchItem);
      search.value='';
    }
  })


  
}