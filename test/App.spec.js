/**
 * Created by charan reddy on 6/22/2017.
 */
import React from 'react';
import App from '../src/App';

describe('App test', () => {
    const wrapper = shallow(<App />);

    it('should  be a div', () => {
        expect(wrapper.type()).to.eql('div');
    });
});