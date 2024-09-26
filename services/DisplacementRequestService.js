import { DisplacementRequest } from '../models';

export const getAllDisplacementRequests = async () => {
    try {
        const requests = await DisplacementRequest.findAll();
        return requests;
    } catch (error) {
        throw new Error('Error fetching displacement requests');
    }
};

export const getDisplacementRequestById = async (RequestID) => {
    try {
        const request = await DisplacementRequest.findByPk(RequestID);
        if (!request) {
            throw new Error('Displacement request not found');
        }
        return request;
    } catch (error) {
        throw new Error('Error fetching displacement request');
    }
};

export const createDisplacementRequest = async (data) => {
    try {
        const newRequest = await DisplacementRequest.create(data);
        return newRequest;
    } catch (error) {
        throw new Error('Error creating displacement request');
    }
};

export const updateDisplacementRequest = async (RequestID, data) => {
    try {
        const updatedRequest = await DisplacementRequest.update(data, {
            where: { RequestID }
        });
        return updatedRequest;
    } catch (error) {
        throw new Error('Error updating displacement request');
    }
};

export const deleteDisplacementRequest = async (RequestID) => {
    try {
        const result = await DisplacementRequest.destroy({ where: { RequestID } });
        return result;
    } catch (error) {
        throw new Error('Error deleting displacement request');
    }
};
