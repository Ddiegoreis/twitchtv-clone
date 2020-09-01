import React from 'react'

import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Avatar,
  Column,
  Username,
  Info,
  WhiteCircle
} from './styles'

import avatar from '../../images/avatar.jpg'

const ChannelList: React.FC = () => {
  const ChannelItems = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar source={avatar}/>

        <Column>
          <Username>Diego Reis</Username>
          <Info>10 vídeos novos.</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )
  
  return (
		<List>
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
		</List>
	)
}

export default ChannelList
