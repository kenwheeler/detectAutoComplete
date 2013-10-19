/**
 *
 * [Detect AutoComplete]
 *
 * version 1.0.0
 *
 * Ken Wheeler
 *
 */

var detectAutoComplete = (function(){

  function detectAutoComplete(){
    getElements();
    setTimer();
  }

  function getElements(){
    this.selects = document.getElementsByTagName('select');
    this.formElements = [];
    for(var i=0; i < this.selects.length; i++){
      this.formElements.push({element: this.selects.item(i), value: this.selects.item(i).value})
    }
  }

  function setTimer(){
    window.setInterval(function(){
      checkElements();
    },1000);
  }

  function checkElements(){
    for(el in this.formElements){
      if(this.formElements[el].element.value != this.formElements[el].value){
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('change',true,true);
        this.formElements[el].element.dispatchEvent(evt);
        getElements();
      }
    }
  }

  return detectAutoComplete;

})()