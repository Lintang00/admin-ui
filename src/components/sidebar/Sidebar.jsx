import "./sidebar.scss";
import { Link } from "react-router-dom";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GradingSharpIcon from '@mui/icons-material/GradingSharp';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<div className="logo">Store</div>
			</div>
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
                        <SpaceDashboardIcon className="icon"/>
						<span>Dashboard</span>
					</li>
					<p className="title">LIST</p>
					<Link to="/users">
						<li>
                            <PeopleAltIcon className="icon"/>
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products">
						<li>
                            <ProductionQuantityLimitsIcon className="icon"/>
							<span>Products</span>
						</li>
					</Link>
					<li>
                    <GradingSharpIcon className="icon"/>
						<span>Orders</span>
					</li>
					<p className="title">USER</p>
					<li>
						<span>Profil</span>
					</li>
					<li>
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
