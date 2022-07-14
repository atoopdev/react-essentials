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
// pass variable - defined down in App
function Header(props){
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    )
}

function Main(props){
    return(
        <section><p>We serve the most {props.adjective} food around.</p></section>
    )

}

function Footer(props){
    return (
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    )
}

// What will output to screen
// pass name vlaue to header
// value must be added where item is being rendered
// note numbers must be wrapped in curly braces, same with functions
function App(){
    return(
        <div>
            <Header name="Amanda" />
            <Main adjective="amazing"/>
            <Footer year={new Date().getFullYear()} />
        </div>
    )
}