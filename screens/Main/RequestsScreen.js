import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

import {AuthContext} from '../../App';


export default function HomeScreen() {
  const {state, dispatch} = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed In!</Text>
      <Button title="Sign out" onPress={() => {
        dispatch({type: 'DELETE_REFRESH_TOKEN'});
        dispatch({type: 'DELETE_JWT'});

    }}/>
    </View>
  );
}
