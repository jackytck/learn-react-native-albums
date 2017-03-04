import React, { PropTypes } from 'react'
import {
  Text
} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )
}

AlbumDetail.propTypes = {
  album: PropTypes.object.isRequired
}

export default AlbumDetail
