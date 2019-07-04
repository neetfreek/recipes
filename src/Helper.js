import React from 'react';

// Return react element <div> containing <ul> of <li> array items 
function listComponentFromArray(array, className){
    const listItems = array.map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className={className}><ul>{listItems}</ul></div>
    );
  }

  // Return specified item from array
  export function findItemByName(array, nameItem){
    for (var counter = 0; counter < array.length; counter++){
      if (array[counter].name === nameItem){
        return array[counter];
      }
    }
    return null;
  }    

  // Return whether specified item exists in array
    export function itemExists(array, nameItem){
        for (var counter = 0; counter < array.length; counter++){
            if (array[counter].name === nameItem){
            return true;
            }
        }
        return false;
    }

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