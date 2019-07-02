import React from 'react';

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
    
      handleClick(recipeUpdated) {
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

      updateIngredientsList(){
        const ingredients = this.state.ingredients;
        var listIngredients = [];

        for(var counter = 0; counter < ingredients.length; counter++){
          var textIngredient = ingredients[counter];
          var listItem = React.createElement('li', {}, textIngredient);
          listIngredients.push(listItem);
        }
        var listElement = React.createElement('ul', {}, [listIngredients]);
        var listContainer = React.createElement('div', {className: "listIngredients"}, [listElement]);

        return (
          listContainer
        );
      }

      recipeCurrent(){
        if (this.state.isToggleOn){
          return(
            <div className="recipe">
            <h1>{this.state.name}</h1>
            <h2>Description</h2>
            <p>{this.state.description}</p>
            <h2>Ingredients</h2>
            <p>{this.updateIngredientsList()}</p>
            <h2>Instructions</h2>
            <div>{this.state.instructions}</div>
            </div>
          );
        }
      }
    
      render() {
        return (
           <div>
          <button onClick={() => this.handleClick("Banana ice cream recipe")}>
            Banana Ice Cream
          </button>
          <button onClick={() => this.handleClick("Stew recipe")}>
            Stew
          </button>
          <button onClick={() => this.handleClick("Goat's Head Soup recipe")}>
            Goat's Head Soup
          </button>
          <p>{this.state.recipe}</p>
          </div>
        );
      }
    }

    export default Recipes;