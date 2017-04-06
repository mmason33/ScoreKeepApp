import React from 'react';

export default class TitleBar extends React.Component {
  renderSubTitle () {
    if(this.props.subTitle) {
      return <h3 className="title-bar--sub-title">{this.props.subTitle}</h3>;
    }
  }
  render () {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
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
