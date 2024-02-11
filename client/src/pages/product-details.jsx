import React, { useEffect } from 'react';
import Details from "../components/product/details.jsx";
import ProductStore from '../store/ProductStore.js';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/layout.jsx';
import Brands from '../components/product/brands.jsx';

const ProductDetails = () => {
    const {BrandList,DetailsRequest,ReviewListRequest,BrandListRequest}=ProductStore();
    const {id}=useParams();

    useEffect(() => {
        (async ()=>{
            await DetailsRequest(id);
            await ReviewListRequest(id);
            BrandList===null?await BrandListRequest():null
        })()
    }, []);


    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};

export default ProductDetails;