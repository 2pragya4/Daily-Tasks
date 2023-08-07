import React, {useState,useEffect} from 'react';

// useState and useEffect is always used inside the component function and before return
// creating another component task
const Task =({title, description, deleteTask, index})=>{
    return(
        <div className="task">
            <div>
                <p> {title}</p>
                <span> {description} </span>
            </div>

            {/* whenever need to pass the parameter, use arrow function*/}
            <button onClick={() => deleteTask(index)}> - </button>
        </div>
    )
}

const Proj1 = () => {
    // initialising the var with 0 using useState
    //const [inputvar, setInputValue] = useState(0);

    /* we can add event of onSubmit*/

    const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")): [];

    // initialize tasks as an empty array
    const [tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title);
    console.log(description);

    const submitHandler= (e)=>{
        // with this form will not reload again and again
        e.preventDefault(); 

        // ... is spread operator that does not create an array of elements, instead spread the ele.
        setTasks([...tasks,
            {title,description}
        ]);
    };

    const deleteTask = (index)=>{
        //now we are filtering the task array 
        // filetedArr contains all the elements except for that particular index
        const filteredArr = tasks.filter((val,i)=>{
            return i !== index;
        });
        //console.log(filteredArr);
        setTasks(filteredArr);
    };

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);

  return (
    <div className="container">
        <h1> DAILY TASKS </h1>
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            placeholder="title" 
            value={title} 
            onChange ={(e) => setTitle(e.target.value)}
            />
            <textarea 
            placeholder="Description"
            value={description} 
            onChange ={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit"> ADD </button>
        </form>

        {/* whenever a map function is created, it should have a unique key always*/}
        {/* item means element, we can also write value element instead of item */}

        {tasks.map((item,index)=>(
            // here two elements are there- title and description(need to access only those)
            <Task 
            key={index} 
            title={item.title} 
            description={item.description} 
            deleteTask ={deleteTask}
            index = {index}
            />
        ))}
    </div>
  );
}
export default Proj1;