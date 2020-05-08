/* Design data structure for HangMan solver game. 
We are given array of lexocographically sorted strings 'dict[]' as 
input and a pattern 'puzzle', return list of all the words matching pattern 'puzzle'. 
'puzzle' is a pattern containing underscore character "_".

Example: let solver = new HangmanSolver(["ant", "feet", "meet", "zebra"]);
solver.solve("_e_t"); // ["feet", "meet"]
*/
class HangmanSolver {
  dict = [];
  constructor(dict: string[]) {
    this.dict = dict;
  }

  solve(puzzle: string): string[] {
    let results = [];
    if(this.dict.length === 0){
      return results;
    }
    let pidx = 0;
    let matchHash = {};
    //loop puzzle string and push match values and idx to hashtable
    while(pidx < puzzle.length) {
      if(puzzle.charAt(pidx) !== '_') {
        matchHash[pidx] = puzzle.charAt(pidx);
      }
      pidx++;
    }
    let checkIdxs = Object.keys(matchHash);
    if(checkIdxs.length === 0) return this.dict;
    for(let i = 0; i < this.dict.length; i++) {
      //if lengths match, check the puzzle on word.
      if(this.dict[i].length === puzzle.length) {
        let isMatch = false;
        // check all match values on dict[i];
        checkIdxs.forEach(idx => {
          isMatch = this.dict[i].charAt(idx) === matchHash[idx];
        });
        if(isMatch) {
          results.push(this.dict[i]);
        }
      }
    }
    return results;
  }
}

let solver = new HangmanSolver(["ant", "feet", "meet", "zebra"]);
solver.solve("_e_t"); 