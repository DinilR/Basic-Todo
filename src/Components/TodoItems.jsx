import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

export const TodoItems = ({no,display,text,setTodos}) => {
  const toggle = () => {
      let data = JSON.parse(localStorage.getItem("Todos"));
      for(let i=0;i < data.length;i++){
        if(data[i].no === no){
          if(data[i].display === ""){
            data[i].display = "line-through";
          } else {
            data[i].display = "";
          }
          break;
        }
      }
      setTodos(data);
  };

  const deleteData = (no) => {
    let data = JSON.parse(localStorage.getItem("Todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  }

  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} >
        {display===""?<img src={not_tick} alt="" onClick={()=>(toggle())}/>:<img src={tick} alt="" onClick={()=>(toggle())}/>}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross' src={cross} alt="" onClick={() => {deleteData(no)}}/>
    </div>
  )
}
