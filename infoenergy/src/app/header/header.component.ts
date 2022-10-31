import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  navigateToContactBloc() {
    const element = document.getElementById('contact') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateToPresentationBloc() {
    const element = document.getElementById('qui_sommes_nous') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateToServiceDPE() {
    const element = document.getElementById('dpe') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
  navigateToServiceMAPRIMERNOV() {
    const element = document.getElementById('maprimernov') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
  navigateToServiceSOLUTIONS() {
    const element = document.getElementById('solutions') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
  navigateToServiceSUIVI() {
    const element = document.getElementById('suivi') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
  navigateToServiceAUDIT() {
    const element = document.getElementById('audit') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
  ngOnInit(): void {}
  navigateToAcceuil() {
    const element = document.getElementById('acceuil') as HTMLElement;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
