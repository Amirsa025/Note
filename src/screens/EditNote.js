import { View, Text } from 'react-native'
import React from 'react'

const EditNote = ({route}) => {
        const {text , id}=route.params
  return (
    <View>
      <Text>id: {id}</Text>
      <Text>desc: {text}</Text>
    </View>
  )
}

export default EditNote
