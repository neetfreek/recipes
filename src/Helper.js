import React from 'react';

function listComponentFromArray(array, className){
    const listItems = array.map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className={className}><ul>{listItems}</ul></div>
    );
  }

  export function findItemByName(array, nameItem){
    for (var counter = 0; counter < array.length; counter++){
      if (array[counter].name === nameItem){
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