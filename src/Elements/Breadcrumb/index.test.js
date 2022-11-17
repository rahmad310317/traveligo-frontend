/** @format */

import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
	const breadcrumbList = [
		{ pageTitle: "Home", pageHref: "" },
		{ pageTitle: "Details Wisata", pageHref: "" },
	];

	const { container } = render(
		<Router>
			<Breadcrumb data={breadcrumbList} />
		</Router>,
	);

	const breadcrumb = container.querySelector(`.breadcrumb`);
	return {
		breadcrumb,
	};
};

test("test ini harus punya <ol> dengan className .breadcrumb ini  memiliki test home dan detail wisata", () => {
	const { breadcrumb } = setup();

	expect(breadcrumb).toBeInTheDocument();
	expect(breadcrumb).toHaveTextContent("Home");
	expect(breadcrumb).toHaveTextContent("Details Wisata");
});
