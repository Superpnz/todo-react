import { memo, useContext } from "react";
import { TodoItem, TasksContext } from "@/entities/todo";

function TodoList( {styles} ) {
  const { tasks, filteredTasks} = useContext(TasksContext);
  const hasTasks = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return <div className={styles.emptyMessage}>Задач пока нет</div>;
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className={styles.emptyMessage}>Нет соответствующих задач</div>;
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          className={styles.item}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          key={task.id}
        />
      ))}
    </ul>
  );
}

export default memo(TodoList);
