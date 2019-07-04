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
    // Return closest matching item name if any exist
    export function closestMatch(array, nameItemPartial){
        var matches = [];
        for (var counter = 0; counter < array.length; counter++){
            if (array[counter].name.indexOf(nameItemPartial) === 0){
            return array[counter].name;
            }
        }
    }

  export default listComponentFromArray;