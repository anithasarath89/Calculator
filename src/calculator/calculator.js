import React from "react";
import '../calculator/style.css';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state={
      result:''
    }
  }
  
  onPress= button =>{
    if(button==="="){
      this.calculate()
    }
    else if(button==="C"){
      this.reset()
    }

    else {
 if((button==='-' && this.state.result==='-')||
((button ==='+' || button==='/' || button==='*')&&             this.state.result==='')||
 (button==='0' && 
 (this.state.result.charAt(this.state.result.length-1)==='0' && 
 this.state.result.charAt(this.state.result.length-2)==='-'))
 )
      {
        button='';
      }
      
 if((button ==='+' || button==='-'||button==='/' || button==='*') && 
  (this.state.result.charAt(this.state.result.length-1)==='-' ||
  this.state.result.charAt(this.state.result.length-1)==='+' ))
      {this.setState({
        result: this.state.result.slice(0,-1) + button
      });}
      else if(this.state.result==='0' && this.state.result.length==='1')
      {this.setState({
        result: this.state.result.slice(0,-1) + button
      });}
      else
        {
          this.setState({
        result: this.state.result + button
      });
        }
      }
  };
  
  calculate =()=>{ 
      try
      {
       let valC= eval(this.state.result);
        if(valC===''|| valC=== null || valC===Infinity || 
           valC===-Infinity){ 
          this.setState({result:""})
        }
        else if(valC===0 ){ 
          this.setState({ result:(valC)+""})
        }
        else if(valC<1 && valC>0){
          this.setState({ result:"0"})
        }
        else
          {  
       this.setState({
        result:(Math.round(eval(this.state.result))||"")+""
      }) 
          }
      }catch(e){
        if(this.state.result ==='+' || this.state.result==='/' || this.state.result==='*'|| this.state.result==='-'){
          this.setState({
        result:this.state.result
         })}
      this.setState({
        result:""
         })
    }
  };
  
  reset=()=>{
    this.setState({
        result:''
      })
  };

  render() {
    let {result}=this.state.result;
    return (<div>
   <div className="calculator">
   <div className="output">
        <p>{this.state.result}</p>
   </div>
  <div className="button">
           <div>
  <button value="0" className="digit-0" 
  onClick={e=>this.onPress(e.target.value)}>0</button>
  <button value="1" className="digit-1"
  onClick={e=>this.onPress(e.target.value)}>1</button>
  <button value="2"className="digit-2"
  onClick={e=>this.onPress(e.target.value)}>2</button>
   <button value="3" className="digit-3"
  onClick={e=>this.onPress(e.target.value)}>3</button>          </div>
           <div>
  <button value="4" className="digit-4"
  onClick={e=>this.onPress(e.target.value)}>4</button>
  <button value="5" className="digit-5"
  onClick={e=>this.onPress(e.target.value)}>5</button>
  <button value="6" className="digit-6"
  onClick={e=>this.onPress(e.target.value)}>6</button>
  <button value="7" className="digit-7"
  onClick={e=>this.onPress(e.target.value)}>7</button>
          </div>
          <div>
  <button value="8" className="digit-8"
  onClick={e=>this.onPress(e.target.value)}>8</button>
  <button value="9" className="digit-9"
  onClick={e=>this.onPress(e.target.value)}>9</button>
  <button value="+" className="op-add"
  onClick={e=>this.onPress(e.target.value)}>+</button>
  <button value="-" className="op-sub"
  onClick={e=>this.onPress(e.target.value)}>-</button>
          </div>
          <div>
  <button value="*" className="op-mul"
  onClick={e=>this.onPress(e.target.value)}>*</button>
  <button value="/" className="op-div"
  onClick={e=>this.onPress(e.target.value)}>/</button>
  <button value="=" className="eq"
  onClick={e=>this.onPress(e.target.value)}>=</button>
  <button value="C" className="clear"
  onClick={e=>this.onPress(e.target.value)}>C</button>
          </div>
    </div>
  </div>
   </div>
    );
  }
}