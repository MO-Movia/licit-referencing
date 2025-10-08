import { HamBurgerIcon } from './Dropdown';

describe('Dropdown', () => {
  it('should render the HamBurgerIcon component and buttons', () => {
    const subMenuProps = {
      onMouseOut: () => undefined,
      options: [],
    };
    const wrapper = new HamBurgerIcon({ ...subMenuProps });
    expect(wrapper.render()).toBeDefined();
  });
});
