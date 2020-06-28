import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  text-align: left;
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 25)
      ? "2px solid red"
      : "none"};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

export const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {todo.createdAt}
      </p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-button"
          >
            Mark as Completed
          </CompletedButton>
        )}
        <RemoveButton
          onClick={() => onRemovePressed(todo.id)}
          className="remove-button"
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoListItem;