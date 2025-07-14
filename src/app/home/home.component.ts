import { Component } from '@angular/core';
import { Ramschema } from '../model/ramschema';
import { RamschemaService } from '../services/ramschema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
CourseInfo: Ramschema[] = [];

constructor(private ramschemaservice : RamschemaService) {

}
ngOnInit() {
this.ramschemaservice.getRamchemaInf().subscribe(data => {
this.CourseInfo = data;

})

}
}
