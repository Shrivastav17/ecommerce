import Brands from "./Brands"
import Category from "./Category"
import Products from "./Product"

/* eslint-disable jsx-a11y/anchor-is-valid */
function Home() {
	return (
		<section>
			
			<div class="container">	
				<div class="row">
					<div class="col-sm-3">
						<div class="left-sidebar">
							<Category></Category>

							<Brands></Brands>

							<div class="price-range">
								<h2>Price Range</h2>
								<div class="well text-center">
									<input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" ></input><br />
									<b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
								</div>
							</div>

						</div>
					</div>

					<div class="col-sm-9 padding-right">
						

						<Products></Products>
						
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home