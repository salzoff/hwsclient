import express from 'express';
import HwsClient from '../client';
import bodyParser from 'body-parser';
import config from '../../config';
const router = express.Router();
import axios from 'axios';

const hwsClient = new HwsClient({
    url: config.url,
    defaultAuthKey: config.defaultAuthKey,
    http: axios.create({
        baseURL: config.url
    })
});

router.use(bodyParser.json());

router.post('/info', (req, res) => {
    res.json({ version: 'test' });
});

router.post('/formdata', (req, res) => {
    hwsClient.requestFormData(req.body).then(response => {
        res.json(response);
    });
});

router.post('/group/:requesttype', (req, res) => {
    hwsClient.requestGroups(req.params.requesttype, req.body).then(response => {
        res.json(response);
    });
});

router.post('/product/:requesttype', (req, res) => {
    hwsClient.requestProducts(req.params.requesttype, req.body).then(response => {
        res.json(response);
    });
});

router.post('/offer/:requesttype', (req, res) => {
    hwsClient.requestOffers(req.params.requesttype, req.body).then(response => {
        res.json(response);
    });
});

router.post('/variant/:requesttype', (req, res) => {
    hwsClient.requestVariants(req.params.requesttype, req.body).then(response => {
        res.json(response);
    });
});

export default router;
