import Head from 'next/head'

const style = `
body {
  color: #333
}
h5, h6 {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .2rem;
  text-decoration: none;
  line-height: 6.5rem;
  color: #222;
  margin-bottom: 0;
}
h6 {
  color: #bbb
}
hr {
  margin-top: 0px;
  margin-bottom: 0px;
}
.inline {
  box-sizing: border-box;
  display: inline-block;
}
`

export default () =>
  <div>
    <Head>
      <title>Azzofai</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/normalize.css" />
      <link rel="stylesheet" href="/static/skeleton.css" />
      <style>{style}</style>
    </Head>
    
    <div className="container">

      <div className="row">  
        <h5>azzofai</h5>
      </div>

      <hr />

      <div className="row">  
        <h6>What have you been doing ?</h6>
        <form>
          <div className="eight columns">  
            <input className="u-full-width" type="text" placeholder="#debugging ui problems on #project"></input>
          </div>
          <div className="four columns">  
            <button>add</button>
          </div>
        </form>
      </div>

      <div className="row">
        <div className="eight columns">  
          <h6>last entries</h6>
          <ul>
            <li>The book is on the table #one #two</li>
            <li>#one</li>
            <li>#one</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="four columns">
          <h6>Today</h6>
          <ul>
            <li>#one: 70%</li>
            <li>#two: 30%</li>
          </ul>
        </div>
        <div className="four columns">
          <h6>This week</h6>
          <ul>
            <li>#one: 70%</li>
            <li>#two: 30%</li>
          </ul>
        </div>
        <div className="four columns">
          <h6>Last month</h6>
          <ul>
            <li>#one: 70%</li>
            <li>#two: 30%</li>
          </ul>
        </div>
      </div>

      <hr/>      
      <div className="row">
        <div className="four columns">
          <h6>Settings</h6>
          <form>
            ask me again in <input className="inline" placeholder="" style={{ width: 30 }} ></input> minutes <button>reset</button>
          </form>
        </div>
      </div>
    </div>  
  </div>