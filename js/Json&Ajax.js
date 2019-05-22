window.onload = function(){
  document.getElementById('btn-starwar').addEventListener("click", getStarWar)
}

function getStarWar(){
  let starwarRequest = new XMLHttpRequest();
  starwarRequest.open('get', 'js/starwar.json',true);
  starwarRequest.onreadystatechange = function(){
    if(starwarRequest.readyState === 4 && starwarRequest.status === 200 ){
        let starwarData = JSON.parse(starwarRequest.responseText);
        let size = starwarData.movies.length;
        let data = starwarData.movies;
        let displayData = "";
        for (let i = 0; i < size; i++){
      displayData +=
              `<table>
              <tr>
                    <td>"Title" </td>
                    <td> <h1> ${data[i].title}</h1>
              </tr>
              <tr>
                    <td>"Episode NO" </td>
                    <td>  <h3> ${data[i].episode_number}</h3></td>
                </tr>
                <tr>
                    <td> "Character" </td>
                    <ul>
                              <li>${data[i].main_characters[i]} </li>
                     </ul>
                </tr>
                    <td>"Description" </td>
                    <td>"Poster" </td>
                    <td> "Hero Image" </td>

              </tr>          
            <div> ${data[i].description}<div>
              <div> ${data[i].poster}</div>
              <div> ${data[i].hero_image} </div>
              </div>`
          }
        let insertPoint = document.getElementById('btn-starwar');
        insertPoint.insertAdjacentHTML('afterend', displayData);
        insertPoint.style.display = "none";
    }//end readyState check
  };//end readyState change
  starwarRequest.send();
};//end ready getDegrees
