import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Software Developer Intern',
        p: 'Bezohminds Private Limited',
        date: 'Jan 2019 - Jan 2020',
      },
      text: '<p>I successfully completed a six-month internship at Bezohminds Private Limited in Tirunelveli, where I gained valuable hands-on experience in Angular development and collaborated with a team in a professional work environment. During this period, I worked on real-world projects, strengthening my skills in HTML, CSS, JavaScript, and Angular. I contributed to building dynamic web applications, implementing responsive designs, and improving user interfaces to enhance the overall user experience.</p>',
    }
  ]);
}
