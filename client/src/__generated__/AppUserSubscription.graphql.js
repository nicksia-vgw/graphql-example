/**
 * @flow
 * @relayHash c6a12af2ea2021f667b310249e08fff1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppUserSubscriptionVariables = {||};
export type AppUserSubscriptionResponse = {|
  +userUpdated: ?{|
    +friends: ?$ReadOnlyArray<?{|
      +apples: ?string
    |}>,
    +apples: ?string,
  |}
|};
export type AppUserSubscription = {|
  variables: AppUserSubscriptionVariables,
  response: AppUserSubscriptionResponse,
|};
*/


/*
subscription AppUserSubscription {
  userUpdated {
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
    "name": "AppUserSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userUpdated",
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
    "name": "AppUserSubscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userUpdated",
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
    "operationKind": "subscription",
    "name": "AppUserSubscription",
    "id": null,
    "text": "subscription AppUserSubscription {\n  userUpdated {\n    friends {\n      apples\n      id\n    }\n    apples\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7cce3139c05572e7fdfe41c2422f56b9';
module.exports = node;
