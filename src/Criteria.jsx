import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Criteria extends React.Component {
  constructor(props) {
    super(props);

    this._handleSelectionChange = this._handleSelectionChange.bind(this);
  }

  render() {
    let countText;

    if (this.props.count !== undefined) {
      countText = '(' + this.props.count + ')';
    }

    const itemClasses = classNames(
      'rs-facet-item',
      { 'selected': this.props.isSelected },
      { 'disabled': this.props.disabled },
      { 'rs-hidden': this.props.hidden}
    );

    return (
      <span>
        <li className={ itemClasses } onClick={ this._handleSelectionChange } title={ this.props.label }>
          <span className={ this.props.iconClass } />
          <div className='rs-facet-label'>{ this.props.label }</div>
          <div className='rs-facet-count'>{ countText }</div>
        </li>
      </span>
    );
  }

  _handleSelectionChange() {
    if (!this.props.disabled && this.props.onSelectionChanged) {
      this.props.onSelectionChanged(!this.props.isSelected, this.props.id);
    }
  }
}

Criteria.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number,
  iconClass: PropTypes.string,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  onSelectionChanged: PropTypes.func
};

export default Criteria;
