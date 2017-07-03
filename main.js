let userSearchBar = document.getElementById('bandInput');
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(e) {
var searchInput = document.getElementById('bandInput').value

  console.log(searchInput)

let fetchAddress = "https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=" + (searchInput);


fetch(fetchAddress)
.then(
  function(response) {
    if(response.status !== 200) {
      console.log("Error" + response.status);
      return
    }

  response.json().then(function(data){
    function renderData(){
      let clientId = "/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94"
      return `
          ${data.map(data => `
            <ul class="track">
             <li>
               <button class="audioButton" type="button">
                  <img src="${data.artwork_url}" alt="No-Image-Available" id="${data.stream_url}${clientId}">
               </button>
             </li>
             <li>${data.title}</li>
             <li>${data.user.username}</li>
             </ul>
             `).join('')}
            `;
            }

        let markup = `
          <div class="results">
              ${renderData(data)}
          </div>
            `

      document.getElementById("results").innerHTML = markup;

      var parent = document.getElementById('results').addEventListener('click', function (event) {
          var triggers = document.getElementsByClassName('audioTrigger');
          event.target = triggers;
          let playTrack = `<audio src="${event.target.id}" id="audio" controls="controls"></audio>`
         return document.getElementById('audioCont').innerHTML = playTrack

      });


  });
})
});
