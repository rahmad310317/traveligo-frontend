/** @format */

import React from "react";
import IconText from "Parts/IconText";

export default function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-auto' style={{ width: 350 }}>
						<IconText />
						<p className='brand-tagline'>
							Mari Liburan di Kabupaten Tapanuli Tengah Sejuta Pesona.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col text-center copyrights'>
						product designer 2022 • By : Rahmad Windi Simanullang
					</div>
				</div>
			</div>
		</footer>
	);
}
