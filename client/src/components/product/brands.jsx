import React from 'react';
import ProductStore from '../../store/ProductStore';
import BrandsSkeleton from '../../skeleton/brands-skeleton';
import { Link } from 'react-router-dom';

const Brands = () => {
    const {BrandList}=ProductStore();

    if(BrandList===null){
        return <BrandsSkeleton/>
    } 
    else {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <h2 className="headline-4 text-center my-2 p-0 brand-heading">Top Brands</h2>
                        <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br />Shopping Categories </span>
                        {
                            BrandList.map((item,i)=>{
                                return( 
                                    <>
                                    <div key={i} className="col-6 col-md-3 col-lg-2 text-center p-2">
                                        <Link to={"/by-brand/"+item['_id']} className="card h-100 rounded-3 bg-white">
                                            <div className="card-body brand-img-body">
                                                <img className="brand-img" src={item['brandImg']}/>
                                            </div>
                                            <p className="bodySmal mt-3">{item['brandName']}</p>
                                        </Link>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    
};

export default Brands;