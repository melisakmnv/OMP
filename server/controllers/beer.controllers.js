import BeerModel from "../models/beer.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorResponse } from "../utils/errorResponse.js";


export const getAllBeers = asyncHandler(async (req, res) => {
	const beers = await BeerModel.find({});
	res.status(200).json(beers);
});


export const getBeer = asyncHandler(async (req, res, next) => {
	const beer = await BeerModel.findById(req.params.id)
	if (!beer) return next(new ErrorResponse('Product Not Found !', 404))
	res.status(200).json(beer);
});


export const addBeer = asyncHandler(async (req, res) => {
	const newBeer = req.body;
	await BeerModel.create(newBeer)
	res.status(201).json({ newBeer });
})



export const editBeer = asyncHandler(async (req, res, next) => {


		const {
			name,
			image,
			description,
			tagline,
			category,
			volume,
			abv,
			price,
			countInStock,
		} = { ...req.body }

		const beer = await BeerModel.findById(req.params.id)

		if (beer) {
			beer.name = name
			beer.image = image
			beer.description = description
			beer.tagline = tagline
			beer.category = category
			beer.volume = volume
			beer.abv = abv
			beer.price = price
			beer.countInStock = countInStock

			const updateBeer = await beer.save()
			res.json(updateBeer)
		} else {
			return next(new ErrorResponse('Product not found'))
		}

	// let beer = await BeerModel.findById(req.params.id);
	// if (!beer) return next(new ErrorResponse('Product Not Found', 400))

	// beer = await BeerModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
	// res.status(200).json({
	// 	beer
	// })

})



export const deleteBeer = asyncHandler(async (req, res, next) => {

	const beer = await BeerModel.findById(req.params.id)
	if (!beer) return next(new ErrorResponse('Product Not Found', 404))
	await beer.remove()
	res.status(200).json({ message: "success" });

})

