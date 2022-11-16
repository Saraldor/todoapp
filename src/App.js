import { Component } from "react";
import "./myStyle.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }
addItem(){
  const newItem = {
    id: 1 + Math.random(),
    value: this.state.newItem.slice()

  };

  // copy current list of items
  const list = [...this.state.list];

  // add the new item to the list
  list.push(newItem);
  this.setState({
    list,
    newItem:""
  });
}
deleteItem(id){
const list =[...this.state.list];
const updatedList = list.filter(item=> item.id !==id);
this.setState({list: updatedList});
}
render(){
  return (
    <div className="myhead">
      <div className="add">
        <input
          type="text"
          placeholder="type item here"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}

/> 

<a href="#" onClick={()=>this.addItem()} >
  Add
  </a>
  </div>
<br />
<ul className="mytodolist">
  {this.state.list.map(item =>{
    return(
      <li className="todo" key={item.id} >
         {item.value}
         <a href="#"
        onClick={() => this.deleteItem(item.id)}
        >x</a>
      </li>
    )
  })}
</ul>
<div> 
</div>
  </div>

  );
}
}
 
    

export default App
