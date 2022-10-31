import TodoItem from "../components/Todoitem"
import Addtodo from "../components/Addtodo"

function HomePage() {
  return (
    <div>

    <div>Welcome to Next.js!</div>
    <Addtodo />
    <TodoItem />
    </div>
  
  )
}

export default HomePage