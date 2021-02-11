import React, { Component } from "react";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      lesInput: "",
      items: ["Task1", "Task2"],
    };
  }
  onChange(event) {
    // console.log(event.target.value);
    this.setState(
      {
        lesInput: event.target.value,
      },
      () => console.log(this.state.lesInput)
    );
  }

  addListe(event) {
    event.preventDefault();
    this.setState(
      {
        lesInput: "",
        items: [...this.state.items, this.state.lesInput],
      },
      console.log(this.state)
    );
  }
  deleteTitem(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      items: array,
    });
  }
  mapItem() {
    return this.state.items.map((item) => {
      return (
        <div className="list-group-item" key={item}>
          {item} | appuyez ici pour supprimé{" "}
          <button onClick={this.deleteTitem.bind(this)}> X </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 align="center"> Add item</h1>
        <form className="form-row align-items-center">
          <input
            value={this.state.lesInput}
            type="text"
            placeholder="Tapez ici votre texte"
            onChange={this.onChange.bind(this)}
            className=" form-control nb2"
          />
          <button
            onClick={this.addListe.bind(this)}
            className="btn btn-primary"
          >
            {" "}
            Ajouter{" "}
          </button>
        </form>
        <div className="list-group">{this.mapItem()}</div>
      </div>
    );
  }
}
export default AddItem;
