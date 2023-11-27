import React, {useState} from 'react';
import { schema } from './schema';
import '../../css/SeoTextBlock/global.css';

const SeoTextBlock = ({ enableComponent = false, seoTitle, seoText }) => {
    
    let [ seeMore, setSeeMore ] = useState('ver-mais');
    let [ textSeeMore, setTextSeeMore] = useState('Ver Mais');

    function changeSeeMoreState() {
        if ( seeMore === 'ver-mais' ){
            setSeeMore('ver-menos')
            setTextSeeMore('Ver Menos')
        } else {
            setSeeMore('ver-mais')
            setTextSeeMore('Ver Mais')
        }
    }

    return (
        <>
            {enableComponent && (
                <div className={`seo-custom-block ${seeMore}`}>
                    <h1 className='seo-custom-title' dangerouslySetInnerHTML={{__html: seoTitle }} />
                    <div className={`seo-custom-text ${seeMore}`} dangerouslySetInnerHTML={{__html: seoText }} />
                    <button className='seo-custom-see-more-less' onClick={changeSeeMoreState}>{textSeeMore}</button>
                </div>
            )}
        </>
    );
}

SeoTextBlock.schema = schema;

export default SeoTextBlock;
