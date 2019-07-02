import React from 'react';

function listComponentFromArray(array){
    const list = array;
    var listArray = [];

    for(var counter = 0; counter < list.length; counter++){
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

  export default listComponentFromArray;