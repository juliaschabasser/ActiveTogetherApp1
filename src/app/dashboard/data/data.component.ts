import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { courses } from '../../shared/data';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  // //Interpolation
  // public firstName = 'Tom';
  // public lastName = 'Turbo';
  // public number1 = 1;
  // public number2 = 2;

  // //Property binding
  // public disabled = false;
  // public imageUrl = 'https://www.jotun-austria.at/wp-content/uploads/2018/03/Pinguin-Spirit.jpg';
  // public imageName = 'Pinguin';


  // // Event binding
  // public disabled = false;
  // onClick() {
  //   this.disabled = true;
  // }

  // //Structural Directives
  // public displaySection = true;

  // public list = [
  //   {name: 'Julia', age: 27},
  //   {name: 'Tobias', age: 26}
  // ]

  ngOnInit(): void {
    console.log(courses);
  }

}
