import React from 'react';
import { View } from 'react-native';
import { Icon, Input, Button } from '@ui-kitten/components';

const ins = props => {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = style => <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />;

  function doVals() {
    console.log(value);
  }

  return (
    <View style={{justifyContent:"center", alignItems:"center", padding: 30}}>
      <Input
        value={value}
        placeholder="********"
        icon={renderIcon}
        secureTextEntry={secureTextEntry}
        onIconPress={onIconPress}
        onChangeText={setValue}
      />

      <Button
        onPress={() => {
          doVals();
        }} style={{padding:35,marginTop:50}}>
        Check
      </Button>
    </View>
  );
};

export default ins;
