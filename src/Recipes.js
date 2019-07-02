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
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
          recipe: recipeUpdated,
        }));
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