import React from 'react';

export default class TitleBar extends React.Component {
  renderSubTitle () {
    if(this.props.subTitle) {
      return <h3>{this.props.subTitle}</h3>;
    }
  }
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubTitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
};


// TitleBar.defaultProps = {
//   title: 'Default Title'
// };
