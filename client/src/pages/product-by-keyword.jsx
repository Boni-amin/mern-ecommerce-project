import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import productStore from "../store/ProductStore.js";
import ProductList from "../components/product/product-list.jsx";
import Layout from "../components/layout/layout.jsx";

const ProductByKeyword = () => {
    const {ListByKeywordRequest}=productStore();
    let{keyword}=useParams();

    useEffect(() => {
        (async ()=>{
            await  ListByKeywordRequest(keyword);
        })()
    }, [keyword]);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByKeyword;