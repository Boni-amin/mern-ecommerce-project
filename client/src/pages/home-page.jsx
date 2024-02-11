import React from 'react';
import Layout from '../components/layout/layout';
import Brands from '../components/product/brands';
import ProductStore from '../store/ProductStore';
import FeatureStore from '../store/FeatureStore';
import { useEffect } from 'react';
import Slider from '../components/product/slider';
import Features from '../components/features/features';
import Categories from '../components/product/categories';
import Products from '../components/product/products';



const HomePage = () => {

    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore();
    const {FeatureListRequest}=FeatureStore();

    useEffect(() => {
        (async ()=>{
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await ListByRemarkRequest("new");
            await BrandListRequest()
        })()
    }, []);

    return (
        <div>
            <Layout>
                <Slider/>
                <Features/>
                <Categories/>
                <Products/>
                <Brands/>
            </Layout>
        </div>
    );
};

export default HomePage;