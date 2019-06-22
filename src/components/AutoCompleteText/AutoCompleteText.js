import React, { Component } from 'react';
import './AutoCompleteText.css';
export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ''
    };
  }

  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState({ suggestions: suggestions, text: value });
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    const { maxItems } = this.props;

    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul>
          {suggestions.slice(0, maxItems).map(item => {
            return (
              <li key={item} onClick={() => this.suggestionSelected(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  suggestionSelected = value => {
    this.setState({
      text: value,
      suggestions: []
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className="AutoCompleteText">
        <input
          type="text"
          value={text}
          onChange={this.onTextChanged}
          placeholder={this.props.placeholder}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}
