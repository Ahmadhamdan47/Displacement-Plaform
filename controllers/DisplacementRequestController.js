import * as displacementRequestService from '../services/DisplacementRequestService';

export const getAllDisplacementRequests = async (req, res) => {
    try {
        const requests = await displacementRequestService.getAllDisplacementRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDisplacementRequestById = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await displacementRequestService.getDisplacementRequestById(id);
        res.json(request);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

export const createDisplacementRequest = async (req, res) => {
    try {
        const newRequest = await displacementRequestService.createDisplacementRequest(req.body);
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateDisplacementRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRequest = await displacementRequestService.updateDisplacementRequest(id, req.body);
        res.json(updatedRequest);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteDisplacementRequest = async (req, res) => {
    try {
        const { id } = req.params;
        await displacementRequestService.deleteDisplacementRequest(id);
        res.status(204).json(); // 204 No Content on successful deletion
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
