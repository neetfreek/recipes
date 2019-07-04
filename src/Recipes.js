import React from 'react';
import './Recipes.css';
import listComponentFromArray from './Helper';
import RecipeCollection from './data/RecipeCollection';
import Form from './Form';
import {findItemByName} from './Helper';
import {itemExists} from './Helper';
import {closestMatch} from './Helper';

   class Recipes extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          searchText: "",
          recipe: "",
          name: "",
          description: "",
          ingredients: "",
          instructions: "",
        };
      }
    
      // Toggle recipe elements on-screen
      toggleRecipe(on){
        if (on){
          this.setState(state => ({
            isToggleOn: true,
          }))
        }
        else {
          this.setState(state => ({
            isToggleOn: false,
          }))
        }
      }

      // Update recipe-relate states 
      updateRecipe(recipe){
        this.setState(state => ({
          recipe: recipe,
          name: recipe.name,
          description: recipe.description,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
        }));
      }

      // Visible elements for recipe on-screen
      recipeCurrent(){
        if (this.state.isToggleOn){
          return(
            <div className="recipe">
            <h1>{this.state.name}</h1>
            <h2>Description</h2>
            <p>{this.state.description}</p>
            <h2>Ingredients</h2>
            {listComponentFromArray(this.state.ingredients, "listIngredients")}
            <h2>Instructions</h2>
            <div>{this.state.instructions}</div>
            </div>
          );
        }
	  }
	  
	  // Callback for Form component on user-input field change
	  callbackFromRecipeChange(textChanged){

		if (/^[a-z]/i.test(textChanged)){
			var match = closestMatch(RecipeCollection.recipes, textChanged);
			if (match){
				var textChangedSuffix = match.substring(textChanged.length);
				alert(`Add ${textChangedSuffix} in grey after ${textChanged}`);
			}
		  }
	  }

      // Callback for Form component on user-input field submit
      callbackFromRecipesSubmit = (textSubmitted) => {
        if (itemExists(RecipeCollection.recipes, textSubmitted)){
          this.searchRecipes(textSubmitted);
		}
		else {
			this.toggleRecipe(false);
		}
      }
    
      // Return recipe from Recipes JSON recipes array
      searchRecipes(recipe){     
        if (itemExists(RecipeCollection.recipes, recipe)){
		  this.toggleRecipe(true);   
          var recipeReturned = findItemByName(RecipeCollection.recipes, recipe);
          this.updateRecipe(recipeReturned);   
		}        
		else {
			this.toggleRecipe(false);
		}
      }
      
      render() {
        return (
           <div>
			 <Form 
			 callbackFromParentChange={this.callbackFromRecipeChange} 
			 callbackFromParentSubmit={this.callbackFromRecipesSubmit}			 
			 />
             <div className="buttonsCollection">
                <button className="button" onClick={() => this.searchRecipes("Banana Ice Cream")}>
                  Banana Ice Cream
                </button>
                <button className="button" onClick={() => this.searchRecipes("Goat's Head Soup")}>
                  Goat's Head Soup
                </button>
                <button className="button" onClick={() => this.searchRecipes("Stew")}>
                  Stew
                </button>
            </div>
            <div>
                {this.recipeCurrent()}
            </div>        
          </div>
        );
      }
    }

    export default Recipes;