const url = "http://localhost:5500/api"

function getUsers(){
  fetch(url)
  .then(response => response.json())
  .then(data => renderApiResults.textContent = JSON.stringify(data))
  .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
  .then(response => response.json())
  .then(data =>  [
    userName.textContent = data.name,
    userCity.textContent = data.city,
    userAvatar.src = data.avatar
  ]
  )
  .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then( response => response.json())
  .then( data => alertApi.textContent = data)
  .catch( error => console.error(error))

}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then( data => alertApi.textContent = data)
  .catch( error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }})
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
  }

deleteUser(6)

const newUser = {
  name: 'Newton',
  avatar: "https://picsum.photos/200/300",
  city: "Belem, Para"
}

//addUser(newUser)

const updatedUser = {
  name: "Cardas",
  avatar:"https://picsum.photos/200/300",
  city: "Belem, Para"
}

//updateUser(updatedUser, 6)

getUsers()
getUser(2)
