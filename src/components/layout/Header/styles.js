import styled from 'styled-components'
import Colors from 'theme/Colors'

export const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0px;
	font: normal normal normal 26px/32px Helvetica Neue;
	letter-spacing: 0px;
	color: #7d868b;
	background: var(--unnamed-color-e6f2f2) 0% 0% no-repeat padding-box;
	background: #e6f2f2 0% 0% no-repeat padding-box;
	opacity: 1;
	border: 1px solid #b5dddd;
	max-width: 100%;
	height: 5rem;
	& > h1 {
		text-align: center;
		font: normal normal normal 30px/36px Helvetica Neue;
		letter-spacing: 0px;
		color: #7d868b;
		opacity: 1;
	}

	&.logged {
		justify-content: left;
		padding-left: 23rem;
	}
`

export const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	color: #823434;
	font: normal normal normal 15px/15px Korb-Bold;
	letter-spacing: 0px;
	text-transform: uppercase;
	opacity: 1;

	&.logged {
		justify-content: left;
	}
`

export const StyledHeaderTop = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	padding: 2px 15vw;

	&.logged {
		justify-content: space-between;
	}
`

export const StyledMiPerfil = styled.div`
	position: relative;
	display: inline-block;
`

export const StyledLogo = styled.div`
	text-align: left;
	font: normal normal normal 18px Korb-Bold;
	letter-spacing: 0px;
	color: #005593;
	text-transform: uppercase;
	opacity: 1;
	justify-content: flex-end;
	min-width: 10rem;
	padding-top: 1rem;
`

export const StyledImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-left: 0px;
	margin-right: 5px;
`

export const StyledText = styled.h6`
	text-align: left;
	font: normal normal normal 12px Helvetica Neue;
	letter-spacing: 0px;
	color: #707070;
	margin-left: 4px;
	opacity: 1;
`

export const StyledDropdown = styled.div`
	position: absolute;
	padding: 0;
	z-index: 1;
	text: center;
	background: #ffffff 0% 0% no-repeat padding-box;
	border: 1px solid #dddddd;
	border-radius: 6px 6px 0px 0px;
	opacity: 1;
`

export const StyledUl = styled.ul`
	list-style-type: none;
	padding: 0px;
	margin: 0px;
	position: absolute;
`

export const StyledLi = styled.li`
	border: 1px solid #dddd;
	padding-top: 10px;
	align-items: center;
	text-align: center;
	min-height: 2.5rem;
	min-width: 6rem;
	line-height: 100%;

	display: block;
	background-color: white;
	position: relative;

	top: 20px;
	z-index: 2;
`

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 4px 8px #00000029;
	border: none;
	border-radius: 10px;
	opacity: 1;
	min-width: 6rem;
	height: 50px;
`
