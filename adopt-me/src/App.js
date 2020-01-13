const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!!!"),
            React.createElement(Pet, { 
                name: "Luna",
                animal: "Dog", 
                breed: "idk"
            }),
            React.createElement(Pet, { 
                name: "Luna1", 
                animal: "Dog", 
                breed: "idk1"
            }),
            React.createElement(Pet, { 
                name: "Luna2", 
                animal: "Dog2", 
                breed: "idk2"
            })
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

