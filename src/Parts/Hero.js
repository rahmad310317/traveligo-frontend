/** @format */

import React from "react";
import Button from "Elements/Button";
import ImageHero from "Assets/images/Hero1.png";

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}

	return (
		<section className='container pt-1'>
			<div className='row align-item-center'>
				<div className='col-auto mt-3' style={{ width: 500 }}>
					<h2 className=' title-hero font-weight-bold line-height-1 mb-4s'>
						Ayok Explore
						<br /> Destinasi Wisata <br />
						Di Tapanuli Tengah.
					</h2>
					<p className='mb-3 font-weight text-gray-500'>
						Mari Liburan di Kabupaten Tapanuli Tengah Sejuta Pesona.
					</p>
					<Button
						className=' mt-2 btn py-2 px-5'
						hasShadow
						isPrimary
						onClick={showMostPicked}>
						Explore
					</Button>
				</div>

				<div className='col-6 pl-5'>
					<div className='image-hero mt-4'>
						<img
							src={ImageHero}
							alt='gambar'
							className='img-fluid position-absolute'
							style={{ height: 300, marginLeft: 170 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
