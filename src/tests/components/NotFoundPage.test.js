import React from 'react';
import { shallow } from 'enzyme';
import NotFountPage from '../../components/NotFoundPage';


test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFountPage />);
    expect(wrapper).toMatchSnapshot();
});