import React, { Component } from 'react';
import { ONE, TWO, THREE, SEVEN, EIGHT, NINE, FOUR, FIVE, SIX,
  ZERO, CLEAR, ADD, WORTH, MINUS,
  DOT, MULTI, DIVIDE, LEFTBRACKET, RIGHTBRACKET, PERCENT, SIN, ROOT, POWER,
  COMMA, TAN, COS, PI, E, LOG} from './Calculate.action';


class Calculate extends Component {
  render() {
      const{onchange,value,onclear,onWorth} = this.props
    return (
      <div className="App-container" style={{height:this.props.calcHeight,width:this.props.calcWidth}}>
        <h2 className="answer" style={{height:this.props.inputHeight,
                                      width:this.props.inputWidth,
                                      fontSize:this.props.inputFontSize}}>{value}</h2>
        <div>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}}
          className="red" onClick={()=>onclear(CLEAR)}><em>C</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}}
          className="red" onClick={()=>onchange(LEFTBRACKET)}><em>(</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="red" onClick={()=>onchange(RIGHTBRACKET)}><em>)</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="orange" onClick={()=>onchange(MINUS)}><em>-</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(POWER)}><em>x^y</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(SIN)}><em>sin</em></button>
        </div>
        <div>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(SEVEN)}>7</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(EIGHT)}>8</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(NINE)}>9</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="orange" onClick={()=>onchange(MULTI)}><em>*</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(ROOT)}><em>√</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(COS)}><em>cos</em></button>
        </div>
        <div>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(FOUR)}>4</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(FIVE)}>5</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(SIX)}>6</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="orange" onClick={()=>onchange(DIVIDE)}><em>/</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(COMMA)}><em>,</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(TAN)}><em>tan</em></button>
        </div>
        <div>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(ONE)}>1</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(TWO)}>2</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(THREE)}>3</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="orange" onClick={()=>onchange(ADD)}><em>+</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(LOG)}><em>log</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(PI)}><em>π</em></button>
        </div>
        <div>
          <button style={{height:this.props.zeroHeight,
                          width:this.props.zeroWidth,
                          fontSize:this.props.zeroFontSize}} className="zero" onClick={()=>onchange(ZERO)}>0</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} onClick={()=>onchange(DOT)}>.</button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="orange" onClick={()=>onWorth(WORTH)}><em>=</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(PERCENT)}><em>%</em></button>
          <button style={{height:this.props.buttonHeight,
                          width:this.props.buttonWidth,
                          fontSize:this.props.buttonFontSize}} className="gray" onClick={()=>onchange(E)}><em>e</em></button>
        </div>
      </div>
    );
  }
}

export default Calculate;
