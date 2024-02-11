import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";



import FeatureStore from '../store/FeatureStore.js';
import LegalContents from '../components/features/legal-contents.jsx';


const AboutPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    // console.log(LegalDetails)

    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("about")
        })()
    }, []);

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default AboutPage;