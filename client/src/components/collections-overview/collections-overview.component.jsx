import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return(
        <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
        </CollectionsOverviewContainer>
    )
};

export default CollectionsOverview;



// styles here...

const CollectionsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
