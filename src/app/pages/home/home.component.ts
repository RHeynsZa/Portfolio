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
    'Python', 'Golang', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'C++',
    'React', 'Angular', '.NET Core', 'Express.js', 'Apache Kafka',
    'Kubernetes', 'AWS', 'Terraform', 'Docker', 'Grafana',
    'PostgreSQL', 'Linux', 'Git',
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
