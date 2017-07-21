import React from 'react';
import PropTypes from 'prop-types';

const renderHeader = (title) => (
    <header className="Section__Header">
        <h2>{title}</h2>
    </header>
);

const renderChildren = (children, className) => (
    <section className={className}>
        {children}
    </section>
)

const Section = ({ className, title, children }) => (
  <section className="Section">
    {title && renderHeader(title)}
    {children && renderChildren(children, className)} 
  </section>
);

export default Section;
