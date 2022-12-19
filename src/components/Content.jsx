import React, {useState} from 'react'; 
import CheckListItem from '../components/CheckListItem'
import notes from "../data/notes";

const Content = () => {
  const [notesData, setNotesData] = useState(notes);
  const [firstName, setFirstName] = useState('Mustafa');
  const checkListItems= notesData.map(item => <CheckListItem  data = {item}/>)
  const [count, setCount] = useState(0);
  // const handlePlusButton = ()=> setCount(count + 1)
  // const handleMinusButton = ()=> setCount (count - 1)
  const handleClick = (e, isPlus) => {
    if (e.target.name === 'plus') {
       setCount(count + 1);
    }
       else {
        setCount(count - 1)
       }
    }
   

return (
  <>
  <button onClick= {handleClick} name='plus'>+</button>
  <h3>Count: {count}</h3>
  <button onClick={handleClick}>-</button>
  {checkListItems}
  </>
)
}
export default Content;
