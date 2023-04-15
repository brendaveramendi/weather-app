import { View, Text } from 'react-native'

export const OurChild = (props) => {
  const { message } = props
  return (
    <View style={{ heigth: 200, with: 200, backgroundColor: 'red' }}>
      <Text>{message}</Text>
    </View>
  )
}
