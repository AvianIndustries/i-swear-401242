import { Component } from 'react';
import Link from 'next/link';
import { Banner } from '../components/Banner';
import { Features } from '../components/Features';
import { CTA } from '../components/CTA';

export default class HomePage extends Component {
  render() {
    return (
      <div className='container mx-auto px-6 py-8'>
        <Banner />
        <Features />
        <CTA />
      </div>
    );
  }
}
