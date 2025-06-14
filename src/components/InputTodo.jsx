const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
};

export const InputTodo = (props) => {
    const {todoText, onChange, onClick, disabled, incompleteTodos, completeTodos} = props;
    const isDuplicate = incompleteTodos.includes(todoText) || completeTodos.includes(todoText);
    const isButtonDisabled = disabled || isDuplicate;
    return (
      <div style={style}>
        <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange}/>
        <button disabled={isButtonDisabled} onClick={onClick}>追加</button>
      </div>
    )
}