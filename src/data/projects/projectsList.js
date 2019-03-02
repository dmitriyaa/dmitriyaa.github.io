import React from 'react';
import wad_m from './images/wad-m.jpg';
import wad_d from './images/wad-d.jpg';
import avtoskola_m from './images/avtoskola-m.jpg';
import avtoskola_d from './images/avtoskola-d.jpg';
import b2g_m from './images/b2g-m.jpg';
import b2g_d from './images/b2g-d.jpg';

const projectsList = [
  {
    id: 'b2g',
    title: 'Baku2Go.cz',
    tag: 'Client',
    url_live: 'https://baku2go.az',
    url_git: '',
    description: (
      <div>
        <p><strong>Setup</strong>, <strong>design</strong> and <strong>customization</strong> of WordPress theme for airport transfers agency.</p>
        <p>
            Implemented a complex <a href="http://www.baku2go.az/tour/transfers/" target="_blank" rel="noopener noreferrer">order form</a>, which:
            <ul class="portfolio__ul">
                <li>validates user's input</li>
                <li>uses google maps api to hint a place while user is typing</li>
                <li>has a custom date and time picker</li>
                <li>calculates and displays the cost of the transfer, based on user's choise</li>
                <li>sends confirmation email both to client and to website admin</li>
            </ul>
        </p>
      </div>
    ),
    img_mobile: b2g_m,
    img_desktop: b2g_d,
    completion_date: '2018'
  },
  {
    id: 'avtoskola',
    title: 'Avtoskola.cz',
    tag: 'Client',
    url_live: 'https://avtoskola.cz/',
    url_git: '',
    description: (
      <div>
        <p>Built <strong>mobile first</strong>, <strong>pixel perfect</strong> and <strong>highly optimized</strong> website, based on PSD design provided by client.</p>
        <p>No CSS frameworks were used. The layout is styled on <strong>pure CSS</strong> with help of <strong>flexboxes</strong>.</p>
      </div>
    ),
    img_mobile: avtoskola_m,
    img_desktop: avtoskola_d,
    completion_date: '2018'
  },
  {
    id: 'wad',
    title: 'Web App Dashbord',
    tag: 'Project',
    url_live: 'https://dmitriyaa.github.io/techdegree-project-9/',
    url_git: 'https://github.com/dmitriyaa/techdegree-project-9/',
    description: <p>Personal project where I've built an interactive dashboard application, which uses advanced web techniques including SVG graphics and JavaScript librariy (<a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">chartjs</a>). The project involves <strong>creating charts</strong>, <strong>graphics</strong> and <strong>other UI components</strong> in a manner that promotes interactivity and usability.</p>,
    img_mobile: wad_m,
    img_desktop: wad_d,
    completion_date: '2017'
  },
];

export default projectsList;
