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
// let ul = ReactDOM.render(
//     <ul>
//         <li>{list1.toUpperCase()}</li>
//         <li>{list2}</li>
//     </ul>
// , document.getElementById("root"))

//output to screen
ReactDOM.render(<App />, document.getElementById("root"))

// components
function Header(){
    return (
        <header>
            <h1>Amanda's Kitchen</h1>
        </header>
    )
}

function Main(){
    return(
        <section><p>We serve the best food around.</p></section>
    )

}

// What will output to screen
function App(){
    return(
        <div>
            <Header />
            <Main />
        </div>
    )
}