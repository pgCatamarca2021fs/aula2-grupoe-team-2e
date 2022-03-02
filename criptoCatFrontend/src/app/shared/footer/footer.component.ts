import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icon: IconDefinition = faFacebook
  icon2: IconDefinition = faInstagram
  icon3: IconDefinition = faTwitter

  constructor() { }

  ngOnInit(): void {
  }

}
