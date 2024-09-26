import * as housingOfferService from '../services/HousingOfferService';

export const getAllHousingOffers = async (req, res) => {
    try {
        const offers = await housingOfferService.getAllHousingOffers();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getHousingOfferById = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await housingOfferService.getHousingOfferById(id);
        res.json(offer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createHousingOffer = async (req, res) => {
    try {
        const newOffer = await housingOfferService.createHousingOffer(req.body);
        res.status(201).json(newOffer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateHousingOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOffer = await housingOfferService.updateHousingOffer(id, req.body);
        res.json(updatedOffer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteHousingOffer = async (req, res) => {
    try {
        const { id } = req.params;
        await housingOfferService.deleteHousingOffer(id);
        res.status(204).json(); // 204 No Content on successful deletion
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
