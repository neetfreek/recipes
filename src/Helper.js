import React from 'react';

function listComponentFromArray(array){
    const list = array;
    var listArray = [];

    for (var counter = 0; counter < list.length; counter++){
      var itemName = list[counter];
      var listItem = React.createElement('li', {}, itemName);
      listArray.push(listItem);
    }
    var listElement = React.createElement('ul', {}, [listArray]);
    var listContainer = React.createElement('div', {className: "listIngredients"}, [listElement]);

    return (
      listContainer
    );
  }

  export function findItemByName(array, nameItem){
    for (var counter = 0; counter < array.length; counter++){
      if (array[counter].name == nameItem){
        return array[counter];
      }
    }
    return null;
  }    

  export function itemExists(array, nameItem){
    for (var counter = 0; counter < array.length; counter++){
        if (array[counter].name === nameItem){
          return true;
        }
      }
      return false;
    }

  export default listComponentFromArray;