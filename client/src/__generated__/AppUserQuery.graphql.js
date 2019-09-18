/**
 * @flow
 * @relayHash 79dc92f631e90d94b0e6af44ba1494a8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppUserQueryVariables = {||};
export type AppUserQueryResponse = {|
  +me: ?{|
    +friends: ?$ReadOnlyArray<?{|
      +apples: ?string
    |}>,
    +apples: ?string,
  |}
|};
export type AppUserQuery = {|
  variables: AppUserQueryVariables,
  response: AppUserQueryResponse,
|};
*/


/*
query AppUserQuery {
  me {
    friends {
      apples
      id
    }
    apples
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
    "name": "AppUserQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
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
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
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
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppUserQuery",
    "id": null,
    "text": "query AppUserQuery {\n  me {\n    friends {\n      apples\n      id\n    }\n    apples\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7d21bd0b77b01f568689161100c88ebd';
module.exports = node;
