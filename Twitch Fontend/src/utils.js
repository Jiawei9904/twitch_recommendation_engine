const SERVER_ORIGIN = "";

const loginUrl = `${SERVER_ORIGIN}/login`;

export const login = (credential) => {
  const formData = new FormData();
  formData.append("username", credential.username);
  formData.append("password", credential.password);

  /* 
  The credentials: "include" option in the fetch() method is used to include the user's credentials
  (such as cookies, HTTP authentication, and client-side SSL certificates) in the request to the server.

  If this option is not specified, cookies and authentication data will not be included in the request, 
  and the server may reject the request due to lack of authentication.
  */

  return fetch(loginUrl, {
    method: "POST",
    credentials: "include",
    body: formData,
  }).then((response) => {
    if (response.status !== 204) {
      throw Error("Fail to log in");
    }
  });
};

/*
 Promise: an object representing the eventual completion or failure of an asynchronous operation (异步，不等你).

 What you need to know:
 1. you can chain multiple .then() and .catch() to a Promise
 2. pass in a function to .then() to handle the successful completion of a Promise
 3. pass in a function to .catch() to handle the failure of a Promise

 Additional Details:
 An asynchronous function does not block the program from running. Instead, it runs in the background. 
 Synchronous functions block the execution of code until they are finished

 Promises have three states:
    1. Pending: initial state, neither fulfilled nor rejected.
    2. Fulfilled: meaning that the operation was completed successfully.
    3. Rejected: meaning that the operation failed.


This is how you create a new Promise:
const myPromise = new Promise((resolve, reject) => {
  // some asynchronous code here
  // if the code is successful, call resolve with a value
  // if the code fails, call reject with an error
});

This is how you use a Promise:
myPromise.then((result) => {
  // handle successful completion of Promise
}).catch((error) => {
  // handle error
});

Further reading: promise vs. async/await
*/

const registerUrl = `${SERVER_ORIGIN}/register`;

export const register = (data) => {
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // to indicate that we're sending JSON dat
    },
    body: JSON.stringify(data), // converts a JavaScript object or value into a JSON string.
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

const logoutUrl = `${SERVER_ORIGIN}/logout`;

export const logout = () => {
  return fetch(logoutUrl, {
    method: "POST",
    credentials: "include",
  }).then((response) => {
    if (response.status !== 204) {
      throw Error("Fail to log out");
    }
  });
};

const topGamesUrl = `${SERVER_ORIGIN}/game`;

export const getTopGames = () => {
  return fetch(topGamesUrl).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get top games");
    }

    // parses the response body as JSON and returns a promise that resolves to a JavaScript object.
    // If the response body is not valid JSON, the promise will be rejected.
    return response.json();
  });
};

const getGameDetailsUrl = `${SERVER_ORIGIN}/game?game_name=`;

const getGameDetails = (gameName) => {
  return fetch(`${getGameDetailsUrl}${gameName}`).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to find the game");
    }

    return response.json();
  });
};

const searchGameByIdUrl = `${SERVER_ORIGIN}/search?game_id=`;

export const searchGameById = (gameId) => {
  return fetch(`${searchGameByIdUrl}${gameId}`).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to find the game");
    }
    return response.json();
  });
};

export const searchGameByName = (gameName) => {
  return getGameDetails(gameName).then((data) => {
    if (data && data[0].id) {
      return searchGameById(data[0].id);
    }

    throw Error("Fail to find the game");
  });
};

const favoriteItemUrl = `${SERVER_ORIGIN}/favorite`;

export const addFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ favorite: favItem }),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to add favorite item");
    }
  });
};

export const deleteFavoriteItem = (favItem) => {
  return fetch(favoriteItemUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ favorite: favItem }),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to delete favorite item");
    }
  });
};

export const getFavoriteItem = () => {
  return fetch(favoriteItemUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get favorite item");
    }

    return response.json();
  });
};

const getRecommendedItemsUrl = `${SERVER_ORIGIN}/recommendation`;

export const getRecommendations = () => {
  return fetch(getRecommendedItemsUrl, {
    credentials: "include",
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to get recommended item");
    }

    return response.json();
  });
};
