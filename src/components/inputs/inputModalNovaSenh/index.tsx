import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
type InputProps = {
  iconName: string;
  defaultValue?: string;
  placeHolder?: string;
  secureTextEntry?: boolean;
  onIconPress?: () => void; // Nova prop para ação ao pressionar o ícone
};
export default function InputModalNovaSenha({
  iconName,
  defaultValue,
  placeHolder,
  secureTextEntry = false,
  onIconPress,
}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
      {iconName && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} size={20} color="#0E3A8C" />
        </TouchableOpacity>
      )}
    </View>
  );
}
