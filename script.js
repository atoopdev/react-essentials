// // what to create, style, content
// let heading = React.createElement("h1", null, "Reasons to Learn React")
// // let ul = React.createElement("ul", {style: {color: "blue"}}, 
// // React.createElement("li", null, "Is cool"), 
// // React.createElement("li", null, "Is popular")
// // )

// // redo above in JSX
// // is dependent on babel compiler
// let list1= "Is cool"
// let list2= "Is popular"

// // replace content with variables
// // note can manip var
// // let ul = ReactDOM.render(
// //     <ul>
// //         <li>{list1.toUpperCase()}</li>
// //         <li>{list2}</li>
// //     </ul>
// // , document.getElementById("root"))

// //output to screen
// ReactDOM.render(<App />, document.getElementById("root"))

// // components
// // pass variable - defined down in App
// function Header(props){
//     return (
//         <header>
//             <h1>{props.name}'s Kitchen</h1>
//         </header>
//     )
// }

// const dishes = [
//     "Black Bean Soup",
//     "Macaroni and Cheese",
//     "Salmon and Potatoes"
//   ];

// function Main(props) {
//     return (
//       <section>
//         <ul>
//           {props.dishes.map((dish) => (
//             <li>{dish}</li>
//           ))}
//         </ul>
//       </section>
//     );
//   }

// function Footer(props){
//     return (
//         <footer>
//             <p>Copyright {props.year}</p>
//         </footer>
//     )
// }



// // What will output to screen
// // pass name vlaue to header
// // value must be added where item is being rendered
// // only numbers wrapped in "", everything else {}
// function App(){
//     return(
//         <div>
//             <Header name="Amanda" />
//             <Main
//               adjective="amazing"
//               dishes={dishes}
//             />
//             <Footer year={new Date().getFullYear()} />
//         </div>
//     )
// }

function Header(props) {
    return (
      <header>
        <h1>{props.name}'s Kitchen</h1>
      </header>
    );
  }

//   keys keep your data in synch
  function Main(props) {
    return (
      <section>
        <img height={200} src="./pexels-pixabay-262978.jpg" alt="A server presents two plates"></img>
        <h2>Our Menu:</h2>
        <ul>
          {props.dishes.map((dish) => (
            <li key={dish.id}>{dish.title}</li>
          ))}
        </ul>
      </section>
    );
  }

  function Footer(props) {
    return (
      <footer>
        <p>Copyright {props.year}</p>
      </footer>
    );
  }

  const dishes = [
    "Black Bean Soup",
    "Macaroni and Cheese",
    "Salmon and Potatoes",
    "Pizza"
  ];
//   convert simple array to object array with index - to keep data in synch when rendering
  const dishObjects = dishes.map(
    (dish, i) =>({
    id:i,
    title:dish
  }))

  function App() {
    return (
      <div>
        <Header name="Cindy" />
        <Main
          adjective="amazing"
          dishes={dishObjects}
        />
        <Footer
          year={new Date().getFullYear()}
        />
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );