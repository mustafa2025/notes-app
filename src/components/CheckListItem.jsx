import '../App.css'

function CheckListItem(props) {
const {text, completed} = props.data
  return (
    <div className="CheckListItem">
     <h3>{text}</h3>
      <input  type="checkbox" checked={completed} />    
      </div>
  )
}

export default CheckListItem
