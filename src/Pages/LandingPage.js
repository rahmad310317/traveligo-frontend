/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Hero from "Parts/Hero";
import Header from "Parts/Header";
import MostPicked from "Parts/MostPicked";
import Categories from "Parts/Categories";
import Footer from "Parts/Footer";
// import Maps from "Elements/GoogleMaps/maps";

import { fetchPage } from "Store/actions/page";

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.refMostPicked = React.createRef();
	}

	componentDidMount() {
		window.title = " Traveligo | Home";
		window.scrollTo(0, 0);

		if (!this.props.page.landingPage)
			this.props.fetchPage(
				`http://localhost:4000/api/v1/member/landing-page/`,
				"landingPage",
			);
	}

	render() {
		const { page } = this.props;

		if (!page.hasOwnProperty("landingPage")) return null;

		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
				<MostPicked
					refMostPicked={this.refMostPicked}
					data={page.landingPage.mostPicked}
				/>

				<Categories data={page.landingPage.category} />
				{/* <Maps/> */}
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
