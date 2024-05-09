import "./myList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import MyDatatable from "../../components/myDatatable/MyDatatable";

const MyList = () => {
	return (
		<div className="myList">
			<Sidebar />
			<div className="myListContainer">
				<Navbar />
				<div className="widget">
					<Widget type="user" />
					<Widget type="order" />
				</div>
				<MyDatatable />
			</div>
		</div>
	);
};

export default MyList;
