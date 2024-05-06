import logo from "./logo.svg";
import "./App.css";
import { DEC, INC } from "./action";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./slice";

function App({counter,increment,decrement}) {
  const state= useSelector(state=>state.todos);
  const dispatch=useDispatch();
  return (
    <div className="App">
    <body>
      {state.map(item=>item.name)}
      <button onClick={()=>{dispatch(removeTodo({id:1,name:"san"}))}}>add</button>
    </body>
    </div>
  );
}
const mapStateToProps=(state)=>({
  counter:state.counter
});
const mapDispatchToProps={
  increment:INC,
  decrement:DEC
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
