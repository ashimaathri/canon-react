var PopoverFooter = require('../transpiled/PopoverFooter');

var TestUtils = React.addons.TestUtils;

describe('PopoverFooter', function () {
  var popoverFooter;

  beforeEach(function () {
    popoverFooter = TestUtils.renderIntoDocument(
      <PopoverFooter>
        Hello
      </PopoverFooter>
    );
  });

  afterEach(function () {
    if (popoverFooter.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(popoverFooter).parentNode);
    }
  });

  it('renders a footer button group', function () {
    var buttonGroup;

    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(popoverFooter, 'rs-popover-footer');

    expect(buttonGroup.getDOMNode()).toHaveClass('rs-btn-group');
  });

  it('renders children', function () {
    expect(popoverFooter.getDOMNode().textContent).toBe('Hello');
  });
});
