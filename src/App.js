import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome"
import Container from "./components/Container"

class App extends Component {
  state = {
    images: images,
    topScore: 0,
    score:0,
    imagesClicked : [],
    message:""
  }

 //whaen user click any image 
  handleClick = id => {
    let newimages;
    //check if imagesClicked array dont have the same id of the image that the user clicked
    if (this.state.imagesClicked.indexOf(id) === -1)
    {
      //increase the score by 1 
      this.setState({score:this.state.score+ 1,message:"You Guessed correctly!!"})
      ////pushed the array to the imagesClicked array 
      this.state.imagesClicked.push(id)
    }
    else 
    {
    //if score is > topScore then set topScore the the current score 
      if(this.state.score>this.state.topScore)
      {
          this.setState({topScore:this.state.score,score:0,imagesClicked:[],message:"You Guessed Incorrectly!!"})
      }
      else
      {

        this.setState({score:0,imagesClicked:[],message:"You Guessed Incorrectly!!"})
      }
    
      console.log("reset"+this.state.score)
    }

    // change the order of elements in the images array by removing random items and pushed it to the end of the array 
    this.state.images.forEach(element => {
      let newimages = this.state.images;
      const length = newimages.length;
      let x = Math.floor(Math.random() * (length - 1));
      let y = Math.floor(Math.random() * length);
      let tmpOrder = newimages[x];
      newimages.splice(x, 1);
      newimages.splice(y, 0, tmpOrder);
    })



    this.setState({ newimages })

  }



  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-md-10 mx-auto" >
            <Header score={this.state.score} topScore={this.state.topScore} message={this.state.message}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Welcome />      </div>
        </div>
        <div className="row ">
        <div className="col-md-10 mx-auto bg-light">
          <Container images={this.state.images} onClick={this.handleClick} />
        </div></div>
        <Footer />
      </div >

    );
  }
}

export default App;
