/** @format */

import React from "react";
import "../Assets/scss/style.scss"
import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
	return (
		<main>
			<h4>Details Wisata</h4>
			<br/>
			<p className="justify">{ReactHtmlParser(data.description)}</p>
			<br />
			<h4>Fasilitas Wisata</h4>
			<div className='row' style={{ marginTop: 30 }}>
				{data.featureId.length === 0
					? "Tidak Ada Feature"
					: data.featureId.map((feature, index) => {
							return (
								<div
									key={`feature-${index}`}
									className='col-3'
									style={{ marginBottom: 20 }}>
									<img
										width='38'
										className='d-block mb-2'
										src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
										alt={feature.name}
									/>{" "}
									<span>{feature.qty}</span>{" "}
									<span className='text-gray-500 font-weight-light'>
										{feature.name}
									</span>
								</div>
							);
					  })}
			</div>
		</main>
	);
}
