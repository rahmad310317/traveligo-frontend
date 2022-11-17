/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "Parts/Header";
import PageDetailTitle from "Parts/PageDetailTitle";
import FeaturedImage from "Parts/FeaturedImage";
import PageDetailDescription from "Parts/PageDetailDescription";
import Comment from "Comment/comments";
import Footer from "Parts/Footer";



import { fetchPage } from "Store/actions/page";

class PageDetails extends Component {
	componentDidMount() {
		window.title = "Details Page";
		window.scrollTo(0, 0);
		if (!this.props.page[this.props.match.params.id])
			this.props
				.fetchPage(
					`http://localhost:4000/api/v1/member/details-page/${this.props.match.params.id}`,
					this.props.match.params.id,
				)
				.then((response) => {
					document.title = `Traveligo| ${response.title}`;
				});
	}
	render() {
		const { page, match } = this.props;
	    if (!page[match.params.id]) return null;
		const breadcrumb = [
			{ pageTitle: "Home", pageHref: "" },
			{ pageTitle: "Details Wisata", pageHref: "" },
		];
		return (
			<>
				<Header {...this.props}></Header>
				<PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
				<FeaturedImage data={page[match.params.id].imageId}></FeaturedImage>
				<section className='container'>
					<div className='row'>
						<div className='col-7 pr-5'>
								<PageDetailDescription
									data={page[match.params.id]}></PageDetailDescription>
						</div>
						<div className='col-5'>
							<Comment/>
						</div>
					</div>
				</section>				
		
				<Footer />
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(PageDetails);
