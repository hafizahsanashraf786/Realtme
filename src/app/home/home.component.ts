import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carrer: any[] = [];
  products: any[] = [];
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 3,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '820px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
    this.products = [
      {
        id: '0',
        toptitle: 'Me',
        topSubTitle: 'Daily',
        productTitle: 'Mevolve Daily',
        productSubTitle: 'Mobile App, Website',
        ProductDes:"Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
      },
      {
        id: '1',
        toptitle: 'Me',
        topSubTitle: 'Junior',
        productTitle: 'Mevolve Junior',
        productSubTitle: 'Mobile App, Website',
        ProductDes:"Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
      },
      {
        id: '2',
        toptitle: 'Me',
        topSubTitle: 'Focus',
        productTitle: 'Mevolve Focus',
        productSubTitle: 'Mobile App, Website',
        ProductDes:"Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut."
      },


    ]






    this.carrer = [
      {
        id: '0',
        title: 'Front End Developer',
        list1: 'Angular',
        list2: 'Firebase',
      },
      {
        id: '1',
        title: 'Flutter Developer',
        list1: 'Flutter',
        list2: 'Firebase',
      },
      {
        id: '2',
        title: 'UI/UX Designer',
        list1: 'Figma',
        list2: 'Canva',
      },
      {
        id: '3',
        title: 'QA Automation',
        list1: 'Appium',
        list2: 'Typescript',
      },
    ];
  }
  ngOnInit() {}
}

