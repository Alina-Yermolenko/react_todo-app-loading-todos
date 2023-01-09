import { RefObject } from 'react';

type Props = {
  newTodoField: RefObject<HTMLInputElement>,
};

const TodoForm: React.FC<Props> = ({ newTodoField }) => {
  return (
    <form>
      <input
        data-cy="NewTodoField"
        type="text"
        ref={newTodoField}
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoForm;