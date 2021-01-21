import React from 'react';
import Heading from '../../widgets/typography/heading';
import SubTitle from '../../widgets/typography/subtitle';
import Title from '../../widgets/typography/title';
import ServiceCard from './components/service_card';
import './services.css'

const Services = (props) => {
  return <div className="services_container">
    <Title color="#222">Statement of faith</Title>
    <br /><br />
    <div className="services">
      <ServiceCard
        title="Who are you"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
      <ServiceCard
        title="How are you?"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
        logo="Logo"
      />
    </div>
  </div>
}

export default Services;