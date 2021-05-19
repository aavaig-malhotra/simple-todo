import { Component } from 'react';
import Search from './Search';
import RenderItem from './RenderItem';
import FlipMove from 'react-flip-move';
import '../css/App.css';

class App extends Component {
  state = { terms: [] };

  componentDidMount() {
    if (this.state.terms.length === 0) return;
    this._renderItem(...this.state.terms);
  }

  _renderItem = async (item) => {
    await this.setState({ terms: [...this.state.terms, item] });
    console.log(this.state.terms);
  };

  _onDelete = (key) => {
    console.log(`deleting an item with key = ${key}`);
    this.setState({
      terms: this.state.terms.filter((term, index) => index !== key),
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='container-main'>
          <div className='search-container'>
            <Search onSubmit={this._renderItem} />
          </div>
          <div className='todo-container'>
            <FlipMove enterAnimation='fade' leaveAnimation='fade'>
              {this.state.terms.map((term, index) => (
                <RenderItem
                  term={term}
                  elementKey={index}
                  key={index}
                  onDelete={this._onDelete}
                />
              ))}
            </FlipMove>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
