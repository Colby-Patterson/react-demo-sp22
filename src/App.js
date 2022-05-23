import "./App.css";
import Card from "./Card";
import JSXDemo from "./JSXDemo";
let users = [
  {id:1, name:"Bob", about:'likes to Fish'},
  {id:2, name:"Jill", about:'likes to Swim'},
  {id:3, name:"George", about:'likes to Code and Paint'},
]

function App() {
  const renderUsers = ()=>{
      return users.map((user)=>{
        return <Card key={user.id} name={user.name} about={user.about} />
      })
  }

  return (
    <>
      <h1>App</h1>
      {/* <Card name='Bob' about='likes to fish' />
      <Card name='Jill' about='likes to swim'/> */}
      {renderUsers()}
  
      {/* <JSXDemo /> */}
    </>
  );
}

export default App;
