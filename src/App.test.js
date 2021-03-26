import { render } from '@testing-library/react';
import App from './App';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

// test('renders the app', () => {
//   const component = render(<App />);
//   expect(component).toMatchSnapshot();
// });

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });

});
