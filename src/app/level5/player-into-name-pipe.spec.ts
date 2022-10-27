import { PlayerIntoNamePipe } from "./player-into-name.pipe";

describe('Player into name pipe',()=>{
  it('Transforms 1 into X',()=>{
      const pipe = new PlayerIntoNamePipe();
      expect(pipe.transform(1)).toBe('X');
  });
  it('Transforms 2 into O',()=>{
    const pipe = new PlayerIntoNamePipe();
    expect(pipe.transform(2)).toBe('O');
  });
  it('Transforms 0 into Empty string',()=>{
    const pipe = new PlayerIntoNamePipe();
    expect(pipe.transform(0)).toBe('');
  });
});
