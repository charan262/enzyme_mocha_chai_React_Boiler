
import React from 'react';
import Comment from '../src/Comment';

describe('Comment item', () => {
    const wrapper = shallow(<Comment />);

    it('should be a list item', () => {
        expect(wrapper.type()).to.eql('li');
    });
});