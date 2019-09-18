/**
 * @flow
 * @relayHash 0f24c0b3b8c606f5f0430686461cabfe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppFriendMutationVariables = {||};
export type AppFriendMutationResponse = {|
  +addFriend: ?{|
    +friends: ?$ReadOnlyArray<?{|
      +apples: ?string
    |}>
  |}
|};
export type AppFriendMutation = {|
  variables: AppFriendMutationVariables,
  response: AppFriendMutationResponse,
|};
*/


/*
mutation AppFriendMutation {
  addFriend {
    friends {
      apples
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "apples",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppFriendMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addFriend",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "friends",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppFriendMutation",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addFriend",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "friends",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ]
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppFriendMutation",
    "id": null,
    "text": "mutation AppFriendMutation {\n  addFriend {\n    friends {\n      apples\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cda09ba3b738bfb497cbe53bbe53a138';
module.exports = node;
