"use strict";

app.factory("mushroomFactory", function($q, $http){

  let getShrooms = () => {
    let items = [];
    return $q((resolve,reject) => {
      $http.get('https://mushrooms-b8a9a.firebaseio.com/.json')
      .then((itemObject) => {
        let itemCollection = itemObject.data;
        let mushroomCollection = itemCollection.mushrooms;
        console.log("itemCollection", mushroomCollection);
        for (let item in mushroomCollection) {
          let currentShroom = mushroomCollection[item];
          items.push(currentShroom);
        }
        console.log("items Array", items);
        resolve(items);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  return {getShrooms};
});

// app.run(function($rootScope, $location, FIREBASE_CONFIG) {
//   firebase.initializeApp(FIREBASE_CONFIG);
// });
