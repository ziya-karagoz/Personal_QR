import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import allStyles from './Styles'

const styles = allStyles

export default function Paragraph(props) {
  return <Text style={styles.paragraph} {...props} />
}


