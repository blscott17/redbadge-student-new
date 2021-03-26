import React, { Component } from 'react';

class ClassDeckFetch extends Component{
constructor(props){
  super(props)
  this.state = {deckID: ""}
}
fetchDeck() {
  // What is the url we are fetching?
  // Store the data from the fetch
  const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  fetch(url) 
  //convert to json object
  .then(res => res.json()) 
  // .then((json) => console.log(json))
  // left side I created, right side 
  .then((json) => this.setState({deckID: json.deck_id}));

}

fetchCard() {
  const url  = `https://deckofcardsapi.co/api/deck/${this.state.deckID}/draw/?count=2`;
  fetch(url)
  .then((res) => res.json())
  .then((json)  => console.log(json));
}

// functional use effect, class componentDidMount()
//cdm - shortcut
componentDidMount() {
  this.fetchDeck();
}

// cdu - shortcut
componentDidUpdate(prevProps, prevState) {
  debugger
  if(prevState.deckID !== this.state.deckId) {
this.fetchCard()
}
  render(){
    return <div>Hello from ClassDeckFetch</div>
  }
}

export default ClassDeckFetch;