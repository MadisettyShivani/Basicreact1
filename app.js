const heading = React.createElement(

    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { className: "child2" },
        React.createElement("h1", {}, "this is my world"

        )
    )
)
console.log(root);
const rooting = ReactDOM.createRoot(document.getElementById("root"));
rooting.render(heading)
