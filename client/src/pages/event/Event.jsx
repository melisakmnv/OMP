import './event.css'

const Event = () => {
	return (
		<div className='event'>
			<p>Dans le passé = albums</p>

			<div className="event__container">
				{/* <section className="eventSection__">
					<div className="eventSection__title">
						<h1>Dans le présent</h1>
					</div>
					<div className="eventSection__content">
						<div className="eventSection__content__img">
							<img src="https://www.bar-events.com/wp-content/uploads/2022/03/Contact-BAR-EVENT-Expertise-bar-Evenementiel-768x1173-1.jpg" alt="event1" />
						</div>
						<div className="eventSection__content__desc">
							<h3>Bla Bla Bla</h3>
							<p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus accusantium laborum voluptatem."</p>
							<div className="eventSection__time">
								<div className="eventSection__start">
									<span>Starts now</span>
								</div>
								<div className="eventSection__end">
									<span>Ends in : 02 : 36 : 15</span>
								</div>
							</div>
						</div>
					</div>

					<div className="eventSection__content">
						<div className="eventSection__content__img">
							<img src="https://www.bar-events.com/wp-content/uploads/2022/03/Contact-BAR-EVENT-Expertise-bar-Evenementiel-768x1173-1.jpg" alt="event1" />
						</div>
						<div className="eventSection__content__desc">
							<h3>Bla Bla Bla</h3>
							<p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus accusantium laborum voluptatem, pariatur voluptate dolorem temporibus enim minima repellendus assumenda blanditiis fuga, numquam suscipit, vel quibusdam iusto quaerat nam."</p>
							<div className="eventSection__time">
								<div className="eventSection__start">
									<span>Starts now</span>
								</div>
								<div className="eventSection__end">
									<span>Ends in : 2 days</span>
								</div>
							</div>
						</div>
					</div>
				</section> */}



				<section className="eventSection__">
					<div className="eventSection__title">
						<h1>Dans le future</h1>
					</div>
					<div className="eventSection__content">
						<div className="eventSection__content__img">
							<img src="https://lh3.googleusercontent.com/p/AF1QipM_bFnS5-j9UOE5LwKduocwlihJ0ub7Q5v6lGkg=w1080-h608-p-no-v0" alt="event1" />
						</div>
						<div className="eventSection__content__desc">
							<h3>MONDAY TRIVA @ OMP</h3>
							<p>Fun OMP Ride, all riders get happy hour prices after the ride. 10 mile ride (roughly 1 hour).</p>
							<span>ON FRIDAY, 11 JULY 2022</span>
							<span>AT 2P.M</span>
							<div className="eventSection__time">
								<div className="eventSection__start">
									<span>Starts in : 0 Day : 13 : 32 : 11</span>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div className="eventSection__content">
						
						<div className="eventSection__content__desc">
							<h3>OMP'S HAPPY HOUR</h3>
							<p>OMP's Brewery brings you OMP's Happy Hour! $2 off pours</p>
							<br />
							<span>ON SATURDAY, 17 JULY 2022</span>
							<span>AT 2P.M</span>
							<div className="eventSection__time">
								<div className="eventSection__start">
									<span>Starts in : 5 days</span>
								</div>
							</div>
						</div>

						<div className="eventSection__content__img">
							<img src="https://www.bar-events.com/wp-content/uploads/2022/03/Contact-BAR-EVENT-Expertise-bar-Evenementiel-768x1173-1.jpg" alt="event1" />
						</div>
					</div>
				</section>

			




			</div>

		</div>
	)
}

export default Event