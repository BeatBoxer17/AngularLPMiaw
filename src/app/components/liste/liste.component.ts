import { Component, OnInit } from '@angular/core';

import { Joueur } from './../../models';
import { Logs } from 'selenium-webdriver';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  public joueurs: Joueur[] = [];
  public selected: Joueur;
  public openDetail = false;

  constructor(private ngxSmartModalService : NgxSmartModalService) {
    
  }

  ngOnInit() {
    this.loadJoueurs();
  }

  loadJoueurs() {
    this.joueurs.push(
      {
        id: 'j1',
        firstName: 'Levani',
        lastName: 'botia',
        poste: '3eme ligne',
        taille: '1m60',
        birthdayDate: '1990-10-12',
        absent: true,
        image: 'https://www.staderochelais.com/sites/stade-rochelais/files/styles/squared_persona/public/persona/trombi/botia-1538408110.png?itok=Vk4t7LKg',
      },
      {
        id: 'j2',
        firstName: 'Mike',
        lastName: 'CORBEL',
        poste: 'Pillier',
        taille: '1m80',
        birthdayDate: '1989-03-30',
        absent: false,
        image: 'https://www.staderochelais.com/sites/stade-rochelais/files/styles/squared_persona/public/persona/trombi/corbel-1538407568.png?itok=zqZ-DzTQ',
      },
      {
        id: 'j3',
        firstName: 'Mohamed',
        lastName: 'BOUGHANMI',
        poste: 'Pillier',
        taille: '1m94',
        birthdayDate: '1985-06-18',
        absent: false,
        image: 'https://www.staderochelais.com/sites/stade-rochelais/files/styles/squared_persona/public/persona/trombi/boughanmi-1538407931.png?itok=hNGFwvTQ',
      }
    );
  }

  public select(j: Joueur) {
    this.ngxSmartModalService.open('detailsModal');
    this.openDetail = this.openDetail ? this.openDetail : !this.openDetail;
    this.selected = j;
  }

  public setPresentState(event) {
    const id = this.joueurs.findIndex(j => j.id === this.selected.id);
    this.joueurs[id].absent = event;
  }
}
