import express from 'express';
import * as housingOfferController from '../controllers/HousingOfferController';

const router = express.Router();

// GET all housing offers
router.get('/', housingOfferController.getAllHousingOffers);

// GET a single housing offer by ID
router.get('/:id', housingOfferController.getHousingOfferById);

// POST a new housing offer
router.post('/', housingOfferController.createHousingOffer);

// PUT to update a housing offer by ID
router.put('/:id', housingOfferController.updateHousingOffer);

// DELETE a housing offer by ID
router.delete('/:id', housingOfferController.deleteHousingOffer);

export default router;
