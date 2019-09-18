/**
 * @flow
 * @relayHash 0c03ebb7e9a9dcc424bbcc1c0df0544f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppAppleMutationVariables = {||};
export type AppAppleMutationResponse = {|
  +giveApple: ?{|
    +apples: ?string
  |}
|};
export type AppAppleMutation = {|
  variables: AppAppleMutationVariables,
  response: AppAppleMutationResponse,
|};
*/


/*
mutation AppAppleMutation {
  giveApple {
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppAppleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "giveApple",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppAppleMutation",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "giveApple",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AppAppleMutation",
    "id": null,
    "text": "mutation AppAppleMutation {\n  giveApple {\n    apples\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '178a34107024b28cf95ac7c9e87c12ae';
module.exports = node;
