fetch('https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=eric clapton')
  .then(function(response) {
    if (response.status !== 200) {
      console.log('ooops error. Status Code: ' + response.status);
      return;
    }

    response.json().then(function(data) {
      for(let i = 0; i < data.length; i++) {
        console.log("show each title", data[i].title);
        let markup = `
        <div class="artist_wrapper">
          <div class="pic_wrapper">
            <img class="pic" src=${data[i].user.avatar_url}>
          </div>
          <div class="info">
          <ul>
            <li class="song_title">${data[i].title}</li>
            <li class="artist">${data[i].user.username}</li>
          </ul>
          </div>
         </div>
         `

         document.getElementById("results").innerHTML += markup;
      }

    });
}
)
//
//       append(li, img);
//       append(li, names);
//       append(li, span);
//       append(ul, li);
//     })
//   })
// .catch(function(error) {
//   console.log(error);
//    });




// function createNew(element) {
//     return document.createElement(element);
//   }
//
//   function append(parent, el) {
//     return parent.appendChild(el);
//   }
//
// let ul = document.getElementById('bands');
// let url = 'http://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94';
// fetch(url)
//   .then((resp) => resp.json())
//   .then(function(data) {
//     let bands = data.results;
//     return bands.map(function(bands) {
//       let li = createNew('li'),
//           img = createNew('img'),
//           span = createNew('span')
//           names = createNew('names');
//       // img.src = http:i1.sndcdn.com/avatars-000011353294-n0axp1-large.jpg;
//       img.src = tracks.avatar_url;
//       span.innerHTML = `${tracks.id} ${tracks.comments}`;
//       names.innerHTML = `${tracks.genre} ${tracks.title}`;
//       append(li, img);
//       append(li, names);
//       append(li, span);
//       append(ul, li);
//     })
//   })
// .catch(function(error) {
//   console.log(error);
//    });
//
//
//   'use strict';

  // when user hits submit button, make a search request
  // link the api so that it responds to search
  // once you have that data, "fetch" specific date and use the results to diplay a listing of songs related to the search term
  // make it so when a user clicks on a song, it should play in an <audio> tag that i must also add to the page
