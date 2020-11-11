import $ from 'jquery';
import store from './store';

  let BASE_URL = 'https://thinkful-list-api.herokuapp.com';
  let get = `${BASE_URL}/daniel/bookmarks`;
  let post = `${BASE_URL}/daniel/bookmarks`;
  let patch = `${BASE_URL}/daniel/bookmarks/`;
  let deleteIt = `${BASE_URL}/daniel/bookmarks/`;


//fetch post
function saveBookmark(){
  let name = $('#siteName').val();
  let siteLink = $('#siteURL').val();
  let description = $('#description').val();
  let rating = $('input[type="radio"]:checked').val();
  return fetch(post, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "title": name,
      "url": siteLink,
      "desc": description,
      "rating": rating
    })
  })
.then(response => response.json())
.then(postedJson => store.store.bookmarks.push(postedJson))
.catch(error => alert('Give it your A game'));
}

//fetch get
function showBookmarks(){
  return fetch(get)
  .then(response => response.json())
  .then(getJson =>  store.store.bookmarks = getJson)
  .catch(error => alert('Something went wrong, try again.'));
  }

//fetch delete
  function deleteBookmarks(id){
  return fetch(`${deleteIt}${id}`, {
    method: 'DELETE'
  })
}

//fetch delete 
function editBookmarks(id, name, rating, description) {

  fetch(patch + id, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "title": name,
      "desc": description,
      "rating": rating
    })
  })
  .then(response => response.json())
  .then(patchJson => console.log(patchJson))
  .catch(error => alert('Something went wrong, try again.'));
}


export default{
  saveBookmark,
  showBookmarks,
  deleteBookmarks, 
  editBookmarks, 
}
