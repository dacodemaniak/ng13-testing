import { InternModel } from './intern-model';

describe('InternModel', () => {
  let intern: InternModel;
  
  beforeEach(async () => {
    intern = new InternModel();
  });
  

  it('should create an instance', () => {
    expect(intern).toBeTruthy();
  });

  it(`id should be 0 at InternModel instanciation`, () => {
    expect(intern.getId()).toEqual(0);
  });

  it(`Should have an id of 99 after setting the id`, () => {
    intern.setId(99);
    expect(intern.getId()).toEqual(99);
  });

  it(`Should have an empty name at InternModel instanciation`, () => {
    expect(intern.getLastName()).toBe('');
  });

  it(`Should have 'Aubert' as lastName after setting the lastName`, () => {
    intern.setLastName('Aubert');
    expect(intern.getLastName()).toBe('Aubert');
  });

  it(`Should have an empty firstName at component instanciation`, () => {
    expect(intern.getFirstName()).toBe('');
  });

  it(`Should have 'Jean-Luc' after setting the firstName`, () => {
    intern.setFirstName('Jean-Luc');
    expect(intern.getFirstName()).toBe('Jean-Luc');
  });
});
