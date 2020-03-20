import React from 'react';
import Footer from '../component/Footer';
import { create}  from 'react-test-render';

describe('Snapshot Component' ,() => {
    test('testing footer' ,() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})