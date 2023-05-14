import { Button } from "@mui/material";

function SMButton({
	loading = false,
	variant,
	disabled,
	href,
	label,
	onClick,
	style }) {
	return (
		<Button
			sx={{ ...style, position: 'relative' }}
			disabled={disabled || false}
			href={href}
			variant={variant}
			onClick={onClick}>
			{label}
			{loading ?
				<img
					style={{
						height: '25px',
						left: 'calc(50% + 30px)',
						position: 'absolute'
					}}
					src="https://i.gifer.com/ZZ5H.gif"
					alt="" />
				: <></>
			}
		</Button>
	)
}
export default SMButton;