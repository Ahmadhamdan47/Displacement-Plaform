import { HousingOffer } from '../models';

export const getAllHousingOffers = async () => {
    try {
        const offers = await HousingOffer.findAll();
        return offers;
    } catch (error) {
        throw new Error('Error fetching housing offers');
    }
};

export const getHousingOfferById = async (OfferID) => {
    try {
        const offer = await HousingOffer.findByPk(OfferID);
        if (!offer) {
            throw new Error('Housing offer not found');
        }
        return offer;
    } catch (error) {
        throw new Error('Error fetching housing offer');
    }
};

export const createHousingOffer = async (data) => {
    try {
        const newOffer = await HousingOffer.create(data);
        return newOffer;
    } catch (error) {
        throw new Error('Error creating housing offer');
    }
};

export const updateHousingOffer = async (OfferID, data) => {
    try {
        const updatedOffer = await HousingOffer.update(data, {
            where: { OfferID }
        });
        return updatedOffer;
    } catch (error) {
        throw new Error('Error updating housing offer');
    }
};

export const deleteHousingOffer = async (OfferID) => {
    try {
        const result = await HousingOffer.destroy({ where: { OfferID } });
        return result;
    } catch (error) {
        throw new Error('Error deleting housing offer');
    }
};
