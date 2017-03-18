import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="site-content">
          <section>
            {/*React.cloneElement(this.props.children,this.props)*/}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
