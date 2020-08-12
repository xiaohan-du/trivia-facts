import React from "react";
import { fireEvent, render, waitForElement } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import WeatherForm from './WeatherForm';

describe('Test weather form', () => {

    it('should contain a Search button', () => {
        const { getByTestId } = render(<WeatherForm />);
        expect(getByTestId("search-button")).toBeTruthy();
    });

    it('should contain a form', () => {
        const wrapper = shallow(<WeatherForm/>);
        expect(wrapper.find('form').length).toBe(1);
    });

    it('should call handleSubmit function on form submission', () => {
        const onSubmitFn = jest.fn();
        const wrapper = shallow(<WeatherForm handleSubmit={onSubmitFn} />);


        const form = wrapper.find('form');
        form.simulate('submit');
        expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });
    
});