import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {executeMutation, executeQuery, executeSubscription} from "./queryHelpers";

const graphql = require('babel-plugin-relay/macro');

const subscription = graphql `
  subscription AppUserSubscription {
    userUpdated {
      friends {
        apples
      }
      apples
    }
  }
`;

const query = graphql`  
  query AppUserQuery {
    me {
      friends {
        apples
      }
      apples
    }
  }
`;

const friendMutation = graphql`
  mutation AppFriendMutation {
    addFriend {
      friends {
        apples
      }
    }
  }
`;

const appleMutation = graphql`
  mutation AppAppleMutation {
    giveApple {
      apples
    }
  }
`;

const App: React.FC = () => {
  const [user, updateUser] = React.useState<any>({});

  useEffect(() => {
    executeQuery(query, {}, (response) => {updateUser(response.me)});
    executeSubscription(subscription, {}, (response) => { updateUser(response.userUpdated) });
  }, []);

  return (
    <div className="App">
      <button onClick={() => executeMutation(friendMutation, {}, () => {})}>Add friend</button>
      <button onClick={() => executeMutation(appleMutation, {}, () => {})}>Give someone an apple</button>

      <div>
      { user && user.friends && user.friends.map((friend:any) => {
        return <div>
          Friend's Apples: {friend.apples}
        </div>
      })}
      </div>
    </div>
  );
};

export default App;
