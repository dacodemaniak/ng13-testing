import { InternModel } from 'src/app/core/models/intern-model';
import { InternInitialPipe } from './intern-initial.pipe';

describe('InternInitialPipe', () => {
  it('create an instance', () => {
    const pipe = new InternInitialPipe();
    expect(pipe).toBeTruthy();
  });

  it(`Should transform to 'JA' an intern named 'Jean-Luc Aubert'`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Jean-Luc');
    intern.setLastName('Aubert');

    const pipe: InternInitialPipe = new InternInitialPipe();
    expect(pipe.transform(intern)).toBe('JA');
  });

  it(`Should transform to 'VC' an intern named 'Vincent Carrie'`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Vincent');
    intern.setLastName('Carrie');

    const pipe: InternInitialPipe = new InternInitialPipe();
    expect(pipe.transform(intern)).toBe('VC');
  });

  it(`Should transform to '??' an intern with no name and no firstName`, () => {
    const intern: InternModel = new InternModel();

    const pipe: InternInitialPipe = new InternInitialPipe();
    expect(pipe.transform(intern)).toBe('??');
  });

  it(`Should transform to 'J?' an intern with a firstName as Jean-Luc and no name`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Jean-Luc');
    const pipe: InternInitialPipe = new InternInitialPipe();
    expect(pipe.transform(intern)).toBe('J?');
  });

  it(`Should transform to '?C' an intern with a name as Carrie and no firstName`, () => {
    const intern: InternModel = new InternModel();
    intern.setLastName('Carrie');
    const pipe: InternInitialPipe = new InternInitialPipe();
    expect(pipe.transform(intern)).toBe('?C');
  });

  it(`Should throw an Error if arg is not an instance of InternModel`, () => {
    const intern: any = {
      lastName: 'Aubert',
      firstName: 'Jean-Luc'
    };
    const pipe: InternInitialPipe = new InternInitialPipe();

    // transform method should throw an Error
    expect(() => pipe.transform(intern)).toThrow(new Error(`Expect arg to be an instance of InternModel`));
  });

  it(`Output should be AJ if intern is name Jean-Luc Aubert and pipe inverse initial order`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Jean-Luc');
    intern.setLastName('Aubert');

    const config: any = {
      inverse: true
    };

    expect(new InternInitialPipe().transform(intern, config)).toBe('AJ');
  });

  it(`Output should be 'ja' if intern is name Jean-Luc Aubert and pipe to lower case`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Jean-Luc');
    intern.setLastName('Aubert');

    const config: any = {
      toLowerCase: true
    };

    expect(new InternInitialPipe().transform(intern, config)).toBe('ja');
  });

  it(`Output should be 'aj' if intern is name Jean-Luc Aubert and config inversed and to lower case`, () => {
    const intern: InternModel = new InternModel();
    intern.setFirstName('Jean-Luc');
    intern.setLastName('Aubert');

    const config: any = {
      inverse: true,
      toLowerCase: true
    };

    expect(new InternInitialPipe().transform(intern, config)).toBe('aj');
  });
});
