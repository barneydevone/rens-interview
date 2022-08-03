import { mount } from '@cypress/react';
import Todo from '../Todo';

describe("Todo component", () => {
  it('should mount', () => {
    mount(<Todo />);
  });
})

