import React from 'react';

function CheckboxForm(){
  return(
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"/>

        <div>
          <input type="checkbox" id="checkbox1" name="checkbox1" value="checkbox1" />
          <label htmlFor="checkbox1">Checkbox 1</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox2" name="checkbox2" value="checkbox2" />
          <label htmlFor="checkbox2">Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox3" name="checkbox3" value="checkbox3" />
          <label htmlFor="checkbox3">Checkbox 3</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox4" name="checkbox4" value="checkbox4" />
          <label htmlFor="checkbox4">Checkbox 4</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox5" name="checkbox5" value="checkbox5" />
          <label htmlFor="checkbox5">Checkbox 5</label>
        </div>
        <div>
          <input type="checkbox" id="checkbox6" name="checkbox6" value="checkbox6" />
          <label htmlFor="checkbox6">Checkbox 6</label>
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default CheckboxForm;