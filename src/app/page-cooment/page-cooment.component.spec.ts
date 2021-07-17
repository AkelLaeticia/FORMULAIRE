import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoomentComponent } from './page-cooment.component';

describe('PageCoomentComponent', () => {
  let component: PageCoomentComponent;
  let fixture: ComponentFixture<PageCoomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCoomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCoomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
