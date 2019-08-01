import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { NavBar } from '../components/navBar';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it("render a prop", () => {
    const wrapper = shallow(<NavBar dataSent="[]" />);
    expect(wrapper.instance().props.dataSent).toEqual("[]");
    expect(wrapper).toMatchSnapshot();
  });
