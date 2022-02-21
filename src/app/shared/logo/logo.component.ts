import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown,
  faChevronCircleUp,
  IconDefinition} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  faChevronCircleDown: IconDefinition = faChevronCircleDown

  constructor() { }

  ngOnInit(): void {
  }

}
