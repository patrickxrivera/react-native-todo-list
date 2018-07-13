import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.Text`
  font-family: 'System';
`;

const AppText = ({ children }) => <TextWrapper>{children}</TextWrapper>;

export default AppText;
