export const getUsers = () => {
  return fetch(
    'https://cors-anywhere.herokuapp.com/http://dev.frevend.com/json/users.json'
  )
    .then(res => res.json())
    .then(res => res.users)
    .catch(err => err);
};
