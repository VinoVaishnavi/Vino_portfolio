import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      name: 'Automobile Rental Management System',
      alt: 'Projeto Vida FullStack',
      title: 'Automobile Rental Management System',
      with: '100px',
      height: '51px',
      description:
        '<p>Designed and built a comprehensive website for managing automobile rentals using HTML, CSS, JavaScript, Python, and MySQL. Collaborated with a team of three to implement features like booking, payment, and inventory tracking</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
