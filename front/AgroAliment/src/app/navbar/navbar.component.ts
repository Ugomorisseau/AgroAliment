import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()
  public items: MenuItem[] = [
    {
      label: 'Salariés',
      icon: 'pi pi-user',
      routerLink: '/home'
    },
    {
      label: 'Services',
      icon: 'pi pi-fw pi-pencil'
    },
    {
      label: 'Sites',
      icon: 'pi pi-fw pi-user'
    }
  ];
}
