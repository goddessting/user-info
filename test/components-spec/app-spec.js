import App from '../../public/js/Components/app';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('Enzyme Shallow', function () {
    it('App\'s title should be 用户管理系统', function () {
        let app = shallow(<App/>);
        expect(app.find('h1').text()).to.equal('用户管理系统');
    });
});

