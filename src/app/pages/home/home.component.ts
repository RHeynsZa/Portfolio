import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('animateIn') animateElements!: QueryList<ElementRef>;

  currentYear = new Date().getFullYear();

  skills = [
    { name: 'Angular', level: 'Primary' },
    { name: 'TypeScript', level: 'Primary' },
    { name: 'JavaScript', level: 'Primary' },
    { name: 'HTML & CSS', level: 'Primary' },
    { name: 'SCSS / Sass', level: 'Primary' },
    { name: 'RxJS', level: 'Primary' },
    { name: 'React', level: 'Secondary' },
    { name: 'Node.js', level: 'Secondary' },
    { name: 'REST APIs', level: 'Secondary' },
    { name: 'Git', level: 'Secondary' },
    { name: 'Responsive Design', level: 'Secondary' },
    { name: 'Impeccable', level: 'Secondary' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.animateElements.forEach((el) => {
      observer.observe(el.nativeElement);
    });
  }
}
