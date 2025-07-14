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

sortCode() {
this.ramschemaservice.getRamchemaInf().subscribe(data => {
this.CourseInfo = data;
this.CourseInfo.sort((a,b) => a.code > b.code ? 1 : -1)
})
  
}
sortName() {
this.ramschemaservice.getRamchemaInf().subscribe(data => {
this.CourseInfo = data;
this.CourseInfo.sort((a,b) => a.coursename > b.coursename ? 1 : -1)
})
  
}

sortProg() {
this.ramschemaservice.getRamchemaInf().subscribe(data => {
this.CourseInfo = data;
this.CourseInfo.sort((a,b) => a.progression > b.progression ? 1 : -1)
})
  
}


}
