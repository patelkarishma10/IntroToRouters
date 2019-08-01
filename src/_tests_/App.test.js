import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';
import { NavBar } from '../components/navBar';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders NavBar component', () => {
  const wrapper = shallow(<App />);
  const content = <NavBar />;
  expect(wrapper.contains(content)).toEqual(true);
});

it('snapshot App', () => {
  // const wrapper = shallow(<App />);
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot();
})

