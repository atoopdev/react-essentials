// what to create, style, content
let heading = React.createElement("h1", null, "Reasons to Learn React")
let ul = React.createElement("ul", {style: {color: "blue"}}, 
React.createElement("li", null, "Is cool"), 
React.createElement("li", null, "Is popular")
)
ReactDOM.render(ul, document.getElementById("root"))