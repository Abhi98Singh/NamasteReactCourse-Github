    
        const heading = React.createElement('h1',
             {id :'head', xyz : "ABC"},
              "Hello world from React"  );

        console.log(heading); //heading : is a JS object / React's element

        const root = ReactDOM.createRoot(document.getElementById('root'));

        // root.render(heading); //render() method converts js obj into the tag which Browser understands




                    //Nested HTML Elements Structure

        /*
        *
        *   <div id="parent">
        *           <div id="child">
        *                       <h1> I'm h1 tag </h1>
        *                       <h2> I'm h2 tag </h2>  For giving more than one children or sibling - [Array of children]
        *           </div>
        * 
        *            <div id="child2">
        *                       <h1> I'm h1 tag </h1>
        *                       <h2> I'm h2 tag </h2>  For giving more than one children or sibling - [Array of children]
        *           </div>
        *   </div>
        * 
        * */


        const parent = React.createElement('div', {id:'parent'},
                [
                    React.createElement('div', {id:'child'}, 
                        [                                               //Array of children
                            React.createElement('h1', {}, "I'm h1 tag!!!"), 
                                React.createElement('h2', {}, "I'm h2 tag!!!")
                        ] 
                       ),
                       React.createElement('div', {id:'child2'}, 
                        [                                               //Array of children
                            React.createElement('h1', {}, "I'm h1 tag!!!"), 
                                React.createElement('h2', {}, "I'm h2 tag!!!")
                        ] 
                       ) 
                ]         
                      )

        
            console.log(parent);


        root.render(parent);