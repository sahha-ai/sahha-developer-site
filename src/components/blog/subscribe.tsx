import React from 'react';
import Link from '@docusaurus/Link';

export default function SubscribeButton(): JSX.Element {
    return (
        <div style={{textAlign: 'center'}}>
        <h3>Subscribe to Sahha | News</h3>
        <p>How digital-phenotyping, artificial intelligence and machine learning will change the world of product development.</p>
        
        <Link
            className="button button--secondary button--lg"
            to="https://sahha.substack.com/subscribe?utm_medium=web&utm_source=developer-portal">
            Subscribe
        </Link>
        </div>
    );
  }
  