import { useLazyLoadQuery } from "react-relay";

import { graphql } from 'relay-runtime';
import {TodosListQuery as TodosListQueryType } from './__generated__/TodosListQuery.graphql'

const TodosListQuery = graphql`
    query TodosListQuery {
        task {
            createAt
            id
            pomodoro
            title
        }
    }
`;

export default function TodosList({}) {
  const data = useLazyLoadQuery<TodosListQueryType>(
    TodosListQuery,
    {},
  );

  return (
    <div>
        {
            data.task.map(item=>{
                return <h2 key={item.id}>
                    {item.title}
                </h2>
            })
        }
    </div>
  );
}