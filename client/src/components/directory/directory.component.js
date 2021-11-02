import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import styled from 'styled-components';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);
  
  return(
  <DirectoryMenuContainer>
    {sections.map(({id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
  </DirectoryMenuContainer>
)};

export default Directory;

// styles here...

const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;