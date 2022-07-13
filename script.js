// what to create, style, content
let heading = React.createElement("h1", null, "Reasons to Learn React")
// let ul = React.createElement("ul", {style: {color: "blue"}}, 
// React.createElement("li", null, "Is cool"), 
// React.createElement("li", null, "Is popular")
// )

// redo above in JSX
// is dependent on babel compiler
let list1= "Is cool"
let list2= "Is popular"

// replace content with variables
// note can manip var
let ul = ReactDOM.render(
    <ul>
        <li>{list1.toUpperCase()}</li>
        <li>{list2}</li>
    </ul>
, document.getElementById("root"))