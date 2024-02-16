import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'

const Search = ({placeholder, value}) => {
  return (
    <View>
     <Searchbar style={{width:'90%', alignSelf:'center',borderRadius:10,}} iconColor='#4683fb' placeholder={placeholder} value={value}/>
    </View>
  )
}

export default Search