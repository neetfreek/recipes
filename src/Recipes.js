import React from 'react';
import './Recipes.css';
import listComponentFromArray from './Helper';
import RecipeCollection from './data/RecipeCollection';
import Form from './Form';
import {findItemByName} from './Helper';

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
        
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        if (this.state.name == ""){
          this.setState(state => ({
            isToggleOn: !state.isToggleOn,
          }));
        }
      }

      updateRecipe(recipe){
        this.setState(state => ({
          recipe: recipe,
          name: recipe.name,
          description: recipe.description,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
        }));
      }

      recipeCurrent(){
        if (this.state.isToggleOn){
          return(
            <div className="recipe">
            <h1>{this.state.name}</h1>
            <h2>Description</h2>
            <p>{this.state.description}</p>
            <h2>Ingredients</h2>
            <p>{listComponentFromArray(this.state.ingredients)}</p>
            <h2>Instructions</h2>
            <div>{this.state.instructions}</div>
            </div>
          );
        }
      }
    
      searchRecipes(recipe){        
        alert(`Received call to search for ${recipe}`);
        var recipeReturned = findItemByName(RecipeCollection.recipes, recipe);
        this.updateRecipe(recipeReturned);
      }

      render() {
        return (
           <div>
             <Form/>
             <div className="buttonsCollection" onClick={() => this.handleClick()}>
                <button class="button" onClick={() => this.searchRecipes("Banana Ice Cream")}>
                  Banana Ice Cream
                </button>
                <button class="button" onClick={() => this.searchRecipes("Goat's Head Soup")}>
                  Goat's Head Soup
                </button>
                <button class="button" onClick={() => this.searchRecipes("Stew")}>
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