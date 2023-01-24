/**
 * @generated SignedSource<<5d2aa702dd91e4ab486eeb559a06d40f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodosListQuery$variables = {};
export type TodosListQuery$data = {
  readonly task: ReadonlyArray<{
    readonly createAt: any;
    readonly id: any;
    readonly pomodoro: number;
    readonly title: string;
  }>;
};
export type TodosListQuery = {
  response: TodosListQuery$data;
  variables: TodosListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "task",
    "kind": "LinkedField",
    "name": "task",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pomodoro",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosListQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "80b72aed071aac09fabf5ad11ed4eb89",
    "id": null,
    "metadata": {},
    "name": "TodosListQuery",
    "operationKind": "query",
    "text": "query TodosListQuery {\n  task {\n    createAt\n    id\n    pomodoro\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "35ed1b37ec5a19f138f498522ecf7e8d";

export default node;
