import React from 'react';
import listComponentFromArray from './Helper';
import RecipeCollection from './data/RecipeCollection';

   class Recipes extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
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
    
      render() {
        return (
           <div onClick={() => this.handleClick()}>
             <div className="buttonsCollection">
                <button onClick={() => this.updateRecipe(RecipeCollection.recipes[0])}>
                  Banana Ice Cream
                </button>
                <button onClick={() => this.updateRecipe(RecipeCollection.recipes[1])}>
                  Stew
                </button>
                <button onClick={() => this.updateRecipe(RecipeCollection.recipes[2])}>
                  Goat's Head Soup
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