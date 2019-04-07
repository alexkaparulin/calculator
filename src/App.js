import React, { Component } from 'react';
import Calculate from './calculate/Calculate.view';
import {connect} from 'react-redux'
import { number_select, input_clear,worth } from './calculate/Calculate.action';

class App extends Component {
  render() {
    const{doAdd,doClear,calculate,doWorth}=this.props
    return (
      <div className="App">
        <Calculate onchange={doAdd}
                   value={calculate}
                   onclear={doClear}
                   onWorth={doWorth}
                   calcHeight={750}
                   calcWidth={700}
                   inputHeight={100}
                   inputWidth={600}
                   inputFontSize={55}
                   buttonHeight={100}
                   buttonWidth={100}
                   buttonFontSize={20}
                   zeroHeight={100}
                   zeroWidth={210}
                   zeroFontSize={20}/>
      </div>
    );
  }
}
function mapStateToProps(state){
  const {calculate}= state
  return{
    calculate:calculate.value
  }

}
function mapDispatchToProps(dispatch){
return{
 doAdd   : (number)=>dispatch(number_select(number)),
 doClear : (input) => dispatch(input_clear(input)),
 doWorth : (input) => dispatch(worth(input))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
