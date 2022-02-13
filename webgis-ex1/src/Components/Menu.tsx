import React, { SyntheticEvent } from 'react'

interface MenuState {
	streets: boolean,
	satellite: boolean,
	light: boolean,
	dark: boolean,
	outdoors: boolean
}

class Menu extends React.Component<any, MenuState> {
	constructor(props: any) {
		super(props)
		this.state = {
			streets: true,
			satellite: false,
			light: false,
			dark: false,
			outdoors: false,
		}
		this.handleCheck = this.handleCheck.bind(this)
	}

	handleCheck(e: SyntheticEvent<EventTarget>) {
		for (const [key, value] of Object.entries(this.state)) {
			(e.target as HTMLInputElement).value == key
				? this.setState({ [key]: true } as Pick<MenuState, keyof MenuState>)
				: this.setState({ [key]: false } as Pick<MenuState, keyof MenuState>)
		}
	}
	render() {
		return (
			<>
				<div id='menu'>
					<input
						id='streets-v11'
						type='radio'
						name='rtoggle'
						value='streets'
						checked={this.state.streets}
						onClick={this.handleCheck}
					/>
					<label htmlFor='streets-v11'>streets</label>
					<input
						id='satellite-v9'
						type='radio'
						name='rtoggle'
						value='satellite'
						checked={this.state.satellite}
						onClick={this.handleCheck}
					/>
					<label htmlFor='satellite-v9'>satellite</label>
					<input
						id='light-v10'
						type='radio'
						name='rtoggle'
						value='light'
						checked={this.state.light}
						onClick={this.handleCheck}
					/>
					<label htmlFor='light-v10'>light</label>
					<input
						id='dark-v10'
						type='radio'
						name='rtoggle'
						value='dark'
						checked={this.state.dark}
						onClick={this.handleCheck}
					/>
					<label htmlFor='dark-v10'>dark</label>
					<input
						id='outdoors-v11'
						type='radio'
						name='rtoggle'
						value='outdoors'
						checked={this.state.outdoors}
						onClick={this.handleCheck}
					/>
					<label htmlFor='outdoors-v11'>outdoors</label>
				</div>
			</>
		)
	}
}

export default Menu
