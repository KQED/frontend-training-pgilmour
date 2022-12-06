import React from 'react'
// https://reactjs.org/docs/forms.html

function Form () {
  console.log('Hello')
  return (
    <div>
      <div>
        <h2 id='getData'>Get a Sailor Scout:</h2>
        <form>
          <label>Sailor&apos;s Name:
            <input type='text' id='addName' name='addName' placeholder='Sailor Moon' /><br/>
          </label><br/>
          {/* <label>Sailor&apos;s Alias:
            <input type='text' id='addAlias' name='addAlias' placeholder='Usagi'/><br/>
          </label><br/> */}
          {/* <label>Sailor&apos;s Alignment:
            <input type='text' id='addAlignment' name='addAlignment' placeholder='Moon Kingdom'/><br/>
          </label><br/> */}
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <h2 id='modifyData'>Change a Sailor Scout&apos;s entry:</h2>
        <form>
          <label>Sailor&apos;s Name:
            <input type='text' id='changeName' name='changeName' placeholder='Sailor Moon' /><br/>
          </label><br/>
          <label>Sailor&apos;s Alias:
            <input type='text' id='changeAlias' name='changeAlias' placeholder='Usagi'/><br/>
          </label><br/>
          <label>Sailor&apos;s Alignment:
            <input type='text' id='changeAlignment' name='changeAlignment' placeholder='Moon Kingdom'/><br/>
          </label><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div>
        <h2 id='displayInput'>Your Sailor entry:</h2>
      </div>
    </div>
  )
}

export default Form