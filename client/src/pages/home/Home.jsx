import Header from "../../components/header/Header"
import './home.css'

const Home = () => {
	return (
		<div className='home'>
			<main className="homeContainer">

				<Header/>
				<section className='homeSection'>
					<div className="homeSection__title">
						<h1>Nos best bières</h1>
					</div>

					<div className="beerSection__main">
						<div className="beerSection__item">
							<div className="beerSection__img">
								<img src="https://images.punkapi.com/v2/9.png" alt="beer1" />
							</div>
							<div className="beerSection__title">
								<h3>AB:07</h3>
							</div>
							<div className="beerSection__desc">
								<p>Whisky Cask-Aged Scotch Ale.</p>
								<span style={{ marginRight: '40px' }}>5.6 vol.</span>
								<span>33 cl.</span>
							</div>
							<hr />
							<div className="beerSection__footer">
								<p>€ 3.75</p>
								<button>J'en veux !</button>
							</div>
						</div>

						<div className="beerSection__item">
							<div className="beerSection__img">
								<img src="https://images.punkapi.com/v2/keg.png" alt="beer2" />
							</div>
							<div className="beerSection__title">
								<h3>Vice Bier</h3>
							</div>
							<div className="beerSection__desc">
								<p>Hoppy Wheat Bier.</p>
								<span style={{ marginRight: '40px' }}>6 vol.</span>
								<span>33 cl.</span>
							</div>
							<hr />
							<div className="beerSection__footer">
								<p>€ 2.75</p>
								<button>J'en veux !</button>
							</div>
						</div>

						<div className="beerSection__item">
							<div className="beerSection__img">
								<img src="https://images.punkapi.com/v2/14.png" alt="beer3" />
							</div>
							<div className="beerSection__title">
								<h3>Alpha Dog</h3>
							</div>
							<div className="beerSection__desc">
								<p>Existential Red Ale.</p>
								<span style={{ marginRight: '40px' }}>5 vol.</span>
								<span>33 cl.</span>
							</div>
							<hr />
							<div className="beerSection__footer">
								<p>€ 3.00</p>
								<button>J'en veux !</button>
							</div>
						</div>

						<div className="beerSection__item">
							<div className="beerSection__img">
								<img src="https://images.punkapi.com/v2/17.png" alt="beer4" />
							</div>
							<div className="beerSection__title">
								<h3>AB:06</h3>
							</div>
							<div className="beerSection__desc">
								<p>Imperial Black IPA.</p>
								<span style={{ marginRight: '40px' }}>7 vol.</span>
								<span>33 cl.</span>
							</div>
							<hr />
							<div className="beerSection__footer">
								<p>€ 3.20</p>
								<button>J'en veux !</button>
							</div>
						</div>
					</div>
				</section>


				<section className='homeSection'>
					<div className="homeSection__title">
						<h1>Notre histoire</h1>
					</div>

					<div className="historySection__main">
						<div className="historySection__item">
							<div className="historySection__img">
								<div className="historySection__img__wrapper tape opposite-corners">
									<img src="https://i.pinimg.com/736x/5f/a7/d7/5fa7d7b7f2c46a5d2956e2a24e9223d6--postcards-online-thank-you-postcards.jpg" alt="histrory1" />
								</div>
								<span>1er janvier 2018</span>
							</div>
							<div className="historySection__title">
								<h3>Nous sommes Bla Bla Bla Bla.. </h3>
								<div className="historySection__desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis sed mollitia recusandae laudantium fugiat suscipit consequuntur. Exercitationem, impedit quos. Quod dolores error esse suscipit praesentium accusamus tempore pariatur incidunt?</p>
								</div>
								<div className="historySection__footer">
									<button>Hé ça m'intéresse !</button>
								</div>
							</div>
						</div>

						<div className="historySection__item">
							<div className="historySection__title">
								<h3>Nous sommes Bla Bla Bla Bla.. </h3>
								<div className="historySection__desc">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facilis sed mollitia recusandae laudantium fugiat suscipit consequuntur. Exercitationem, impedit quos. Quod dolores error esse suscipit praesentium accusamus tempore pariatur incidunt?</p>
								</div>
								<div className="historySection__footer">
									<button>Hé ça m'intéresse !</button>
								</div>
							</div>
							<div className="historySection__img1">
								<div className="historySection__img__wrapper1 tape opposite-corners">
									<img src="https://i.pinimg.com/736x/5f/a7/d7/5fa7d7b7f2c46a5d2956e2a24e9223d6--postcards-online-thank-you-postcards.jpg" alt="histrory2" />
								</div>
								<span>Noël 25è décembre 2019</span>
							</div>
						</div>
					</div>
				</section>



				<section className='homeSection'>
					<div className="homeSection__title">
						<h1>Nos évents</h1>
					</div>

					<div className="eventSection__main">
						<div className="eventSection__img">
							<div className="eventSection__img__wrapper ">
								<img src="https://www.bar-events.com/wp-content/uploads/2020/09/Equipe_bartender_createur_de_cocktail_Paris_Bars_Events.jpg" alt="event1" />
							</div>
							<span>Noël 25è décembre 2019</span>
						</div>

						<div className="eventSection__img1">
							<div className="eventSection__img__wrapper1 ">
								<img src="https://cdn0.mariages.net/vendor/6691/3_2/960/jpg/priscilla-du-preez-697322-unsplash_3_196691-157181938585453.jpeg" alt="event2" />
							</div>
							<span>Noël 25è décembre 2019</span>
						</div>

						<div className="eventSection__img">
							<div className="eventSection__img__wrapper ">
								<img src="https://www.hotelchamplain.com/wp-content/uploads/2021/11/Champlain-Bar-et-evenements-1024x683.jpg" alt="event3" />
							</div>
							<span>Noël 25è décembre 2019</span>
						</div>

						<div className="eventSection__img1">
							<div className="eventSection__img__wrapper1 ">
								<img src="https://www.buzztime.com/business/wp-content/uploads/2019/05/shutterstock_365582339.jpg" alt="event4" />
							</div>
							<span>Noël 25è décembre 2019</span>
						</div>
					</div>
				</section>



				{/* <section className='section'>
					<div className="sectionTitle">
						<h1>Notre contact : SECTION'S TITLE</h1>
					</div>
				</section> */}

			</main>
		</div>




























		/* <section className="homeSection">
						<div className="homeSectionTilte">
							<p><u>2ème Section : Home Section</u></p>
							<h1>Notre histoire :P</h1>
						</div>
	
						<div className="storySection">
							<div className="storySectionImg">
								<img src="" alt="" />
							</div>
							
	
						</div>
	
	
	
	
						{/* <aside className="storySection">
							<div className="storySectionImg">
								<img src="https://ih1.redbubble.net/image.332170528.9755/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg" alt="bar" className='storyPicture' />
							</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora, laborum illo, aliquid fugit praesentium fugiat earum ut temporibus omnis itaque neque veniam facilis deserunt, quia eius debitis molestiae esse.</p>
						</aside> 
	
	
	
					</section> */

	)
}

export default Home