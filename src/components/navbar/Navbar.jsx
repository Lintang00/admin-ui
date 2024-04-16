import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<NightlightRoundedIcon className="icon" />
					</div>
					<div className="item">
						<img 
							src="https://i.pinimg.com/736x/93/17/d3/9317d3f23299675282bfa8759550983b.jpg" 
							alt=""
							className="avatar" 
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
