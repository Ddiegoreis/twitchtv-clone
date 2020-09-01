import React from 'react'

import streamTumbnail from '../../images/stream_thumbnail.jpg'

import {
	List,
	StreamContainer,
	StreamTumbnail,
	StreamColumn,
	StreamRow,
	StreamHeader,
	StreamAvatar,
	StreamUsername,
	StreamDescription,
	StreamCategory,
	TagRow,
	TagView,
	TagText
} from './styles'

import avatar from '../../images/avatar.jpg'

const StreamList: React.FC = () => {
	const StreamItem: React.FC = () => (
		<StreamContainer>
			<StreamTumbnail source={streamTumbnail} />

			<StreamColumn>
				<StreamRow>
					<StreamHeader>
						<StreamAvatar source={avatar}/>
						<StreamUsername
							numberOfLines={1}>
							Diego Reis
						</StreamUsername>
					</StreamHeader>

					<StreamDescription numberOfLines={1}>
						Twitch.tv Clone UI
					</StreamDescription>

					<StreamCategory numberOfLines={1}>
						Programação
					</StreamCategory>
				</StreamRow>

				<TagRow>
					<TagView>
						<TagText>Português</TagText>
					</TagView>
					<TagView>
						<TagText>React Native</TagText>
					</TagView>
				</TagRow>
			</StreamColumn>
		</StreamContainer>
	)

	return (
		<List>
			<StreamItem />
			<StreamItem />
			<StreamItem />
			<StreamItem />
		</List>
	)
}

export default StreamList
