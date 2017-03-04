import React, { PropTypes } from 'react'
import {
  Text
} from 'react-native'
import Card from './Card'

const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired
}

export default AlbumDetail
