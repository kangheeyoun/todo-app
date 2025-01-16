const TodoList = ({todos,onChecked}) => {
    // console.log(todos)
    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map((list)=>{
                        const {id,text,checked} = list;
                        return(
                            <li key={id}>
                                <input
                                type="checkbox"
                                checked={checked}
                                onChange={()=>{onChecked (id)}}
                                />
                            <label className={checked ? "checked":""}>{text}</label>
                            <button>x</button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;