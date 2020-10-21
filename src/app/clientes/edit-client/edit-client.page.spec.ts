import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditClientPage } from './edit-client.page';

describe('EditClientPage', () => {
  let component: EditClientPage;
  let fixture: ComponentFixture<EditClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
