import React from 'react'
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Feather,
} from '@expo/vector-icons'

import { Container, Avatar, OnLineStatus, RightSide, Button, AvatarContiner } from './styles'

import avatar from '../../images/avatar.jpg'
import colors from '../../styles/colors'

const Header: React.FC = () => {
	return (
		<Container>
			<AvatarContiner>
				<Avatar source={avatar}/>
				<OnLineStatus />
			</AvatarContiner>

			<RightSide>
				<Button>
					<MaterialIcons
						name='notifications-none'
						size={26}
						color={colors.black}
					/>
				</Button>

				<Button>
					<MaterialCommunityIcons
						name='message-outline'
						size={26}
						color={colors.black}
					/>
				</Button>

				<Button>
					<Feather
						name='search'
						size={26}
						color={colors.black}
					/>
				</Button>
			</RightSide>
		</Container>
	)
}

export default Header
